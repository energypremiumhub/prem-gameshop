// ============================================================
//  auth.js - Authentication System (ပြင်ဆင်ပြီး)
// ============================================================

let currentUser = null;

// Load saved user
const savedUser = localStorage.getItem('currentUser');
if (savedUser) {
    try {
        currentUser = JSON.parse(savedUser);
    } catch (e) {
        currentUser = null;
    }
}

function isLoggedIn() {
    return currentUser !== null;
}

function getCurrentUser() {
    return currentUser;
}

function loginUser(input, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    for (const key in users) {
        const user = users[key];
        if (key === input || user.email === input || user.username === input || user.phone === input) {
            if (user.password === password) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateAuthUI();
                return true;
            }
        }
    }
    return false;
}

function registerUser(username, password, email = '', phone = '') {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username]) {
        return false;
    }
    
    if (email) {
        for (const key in users) {
            if (users[key].email === email) {
                return false;
            }
        }
    }
    
    if (phone) {
        for (const key in users) {
            if (users[key].phone === phone) {
                return false;
            }
        }
    }
    
    const userId = 'UID' + String(Math.floor(10000000 + Math.random() * 90000000));
    
    const newUser = {
        username: username,
        email: email || '',
        phone: phone || '',
        password: password,
        displayName: username,
        userId: userId,
        level: 1,
        xp: 0,
        diamonds: 100,
        createdAt: new Date().toISOString()
    };
    
    users[username] = newUser;
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAuthUI();
    return true;
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const profileIcon = document.getElementById('profileIcon');
    
    // ===== အကောင့်ဝင်ပြီးရင် Profile ပြန်ပေါ်အောင် =====
    if (currentUser) {
        const savedAvatar = localStorage.getItem('userAvatar_' + currentUser.username);
        
        if (authBtn) {
            if (savedAvatar) {
                authBtn.innerHTML = '<img src="' + savedAvatar + '" alt="avatar"> ' + currentUser.username;
            } else {
                authBtn.innerHTML = '👤 ' + currentUser.username;
            }
            authBtn.className = 'auth-btn logged-in';
            authBtn.title = 'Go to Profile';
            // ===== Profile ကိုသွားမယ် (Logout မဟုတ်ဘူး) =====
            authBtn.onclick = function(e) {
                e.preventDefault();
                window.location.href = 'profile.html';
            };
        }
        
        if (profileIcon) {
            if (savedAvatar) {
                profileIcon.innerHTML = '<img src="' + savedAvatar + '" alt="avatar"> ' + currentUser.username;
            } else {
                profileIcon.innerHTML = '👤 ' + currentUser.username;
            }
            profileIcon.className = 'profile-icon logged-in';
        }
    } else {
        if (authBtn) {
            authBtn.innerHTML = '🔑 ' + (getText ? getText('login') : 'Login');
            authBtn.className = 'auth-btn';
            authBtn.title = 'Login';
            // ===== Login Modal ဖွင့်မယ် =====
            authBtn.onclick = function(e) {
                e.preventDefault();
                if (typeof openModal === 'function') {
                    openModal('login');
                } else {
                    window.location.href = 'index.html';
                }
            };
        }
        
        if (profileIcon) {
            profileIcon.innerHTML = '👤 Profile';
            profileIcon.className = 'profile-icon';
        }
    }
    
    if (window.updateProfileUI) {
        window.updateProfileUI();
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        currentUser,
        isLoggedIn,
        getCurrentUser,
        loginUser,
        registerUser,
        logoutUser,
        updateAuthUI
    };
}
