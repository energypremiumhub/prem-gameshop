// auth.js - Authentication system
let currentUser = null;

// Load saved user
const savedUser = localStorage.getItem('currentUser');
if (savedUser) {
    currentUser = JSON.parse(savedUser);
}

function isLoggedIn() {
    return currentUser !== null;
}

function getCurrentUser() {
    return currentUser;
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email] && users[email].password === password) {
        currentUser = { username: email, email: email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateAuthUI();
        return true;
    }
    return false;
}

function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) return false;
    users[username] = { username: username, password: password };
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = { username: username, email: username };
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
    const profileBtn = document.getElementById('profileBtn');
    if (currentUser && authBtn) {
        authBtn.textContent = getText('logout');
        authBtn.onclick = () => {
            if (confirm(getText('logoutConfirm'))) {
                logoutUser();
                showToast(getText('logoutSuccess'));
            }
        };
        if (profileBtn) profileBtn.style.display = 'flex';
    } else if (authBtn) {
        authBtn.textContent = getText('login');
        authBtn.onclick = () => openModal('login');
        if (profileBtn) profileBtn.style.display = 'none';
    }
}

// Auth Modal
function openModal(mode) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal._mode = mode || 'login';
    modal.classList.add('show');
    updateModalUI();
}

function closeModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('show');
}

function switchAuthMode() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal._mode = modal._mode === 'login' ? 'register' : 'login';
    updateModalUI();
}

function updateModalUI() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    const isLogin = modal._mode === 'login';
    document.getElementById('modalTitle').textContent = getText(isLogin ? 'modalLogin' : 'modalRegister');
    document.getElementById('modalSub').textContent = getText(isLogin ? 'modalLoginSub' : 'modalRegisterSub');
    document.getElementById('modalAction').textContent = getText(isLogin ? 'login' : 'register');
    document.getElementById('switchLink').textContent = getText(isLogin ? 'switchLogin' : 'switchRegister');
    document.getElementById('emailLabel').textContent = getText(isLogin ? 'email' : 'username');
    document.getElementById('emailInput').placeholder = isLogin ? 'Enter your email' : 'Enter your username';
    document.getElementById('passLabel').textContent = getText('password');
}

function handleAuth() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    const isLogin = modal._mode === 'login';
    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passInput').value.trim();

    if (!email) { showToast(getText('enterEmail')); return; }
    if (!password) { showToast(getText('enterPassword')); return; }

    if (isLogin) {
        if (loginUser(email, password)) {
            closeModal();
            showToast(getText('loginSuccess'));
            if (window.updateProfileUI) window.updateProfileUI();
        } else {
            showToast('❌ Invalid email or password');
        }
    } else {
        if (password.length < 4) {
            showToast('❌ Password must be at least 4 characters');
            return;
        }
        if (registerUser(email, password)) {
            closeModal();
            showToast(getText('registerSuccess'));
            if (window.updateProfileUI) window.updateProfileUI();
        } else {
            showToast('❌ Username already exists');
        }
    }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
    // Enter key support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && document.getElementById('authModal')?.classList.contains('show')) {
            handleAuth();
        }
    });
    updateAuthUI();
});
