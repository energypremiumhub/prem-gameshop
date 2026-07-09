/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT
   All 7 pages use this single JS file
   ============================================ */

// ========== GLOBAL CONFIG ==========
const TELEGRAM_BOT_TOKEN = '8751360822:AAFQNiWhfGWgUsjD7Bd5DzfHMfpkR4COHY8';
const TELEGRAM_CHAT_ID = '8745522082';

// ========== LANGUAGE DATA ==========
const LANG_DATA = {
    my: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'ပင်မ', shop: 'ဆိုင်', payment: 'ငွေပေးချေ', profile: 'ပရိုဖိုင်', noti: 'နိုတီ',
        greeting: 'ဟေ့ကောင်လေး!',
        subtitle: 'စိန်တွေဖြည့်ပြီး စစ်မြေပြင်ကို အနိုင်ယူလိုက်ပါ',
        goToShop: '⚡ GO TO SHOP', shopClosed: '🔒 SHOP CLOSED',
        shopSubText: 'ပက်ကေ့ခ်ျအားလုံးကိုကြည့်ပါ',
        servicesTitle: 'ဘာကြောင့် ကျွန်ုပ်တို့ကိုရွေးမလဲ?',
        s1: '၁၀ မိနစ်အတွင်း အော်ဒါပြီးမြောက်',
        s2: 'လျှင်မြန် • လွယ်ကူ • ယုံကြည်စိတ်ချရ',
        s3: 'အတန်ဆုံးဈေးနဲ့ အကောင်းဆုံး Service',
        s4: 'မနက် ၉:၃၀ မှ ည ၉:၃၀ အထိ',
        s5: 'Mobile Legends', s6: 'Coming Soon',
        telegramTitle: '📢 ကျွန်ုပ်တို့ Telegram ချန်နယ်သို့လာရောက်ပါ',
        telegramDesc: 'နောက်ဆုံးရသတင်းများ၊ ပရိုမိုးရှင်းများနှင့် အကူအညီရယူပါ',
        contactLabel: '💬 အကူအညီလိုပါသလား?', contactUsername: '@PremEnergy',
        shopOpen: 'OPEN', shopClosedStatus: 'CLOSED',
        shopOpenText: 'မနက် ၉:၃၀ မှ ည ၉:၃၀ အတွင်းသာ ဆိုင်ဖွင့်မည် (မြန်မာစံတော်ချိန်)',
        shopClosedText: 'မနက် ၉:၃၀ မှသာ ဆိုင်ဖွင့်ပါမည် (မြန်မာစံတော်ချိန်)',
        // Auth Modal
        modalLogin: 'ဝင်ရန်', modalRegister: 'မှတ်ပုံတင်ရန်',
        modalLoginSub: 'ပြန်လည်ကြိုဆိုပါတယ်!', modalRegisterSub: 'အကောင့်ဖွင့်ပါ!',
        email: 'အီးမေးလ် / အသုံးပြုသူအမည် / ဖုန်းနံပါတ်', password: 'စကားဝှက်',
        switchLogin: 'အကောင့်မရှိသေးဘူး? မှတ်ပုံတင်ရန်',
        switchRegister: 'အကောင့်ရှိပြီးသား? ဝင်ရန်',
        login: 'ဝင်ရန်', register: 'မှတ်ပုံတင်ရန်',
        loginSuccess: '✅ ကြိုဆိုပါတယ်!', registerSuccess: '✅ အကောင့်ဖွင့်ခြင်းအောင်မြင်ပါပြီ!',
        enterEmail: 'ကျေးဇူးပြု၍ အီးမေးလ်၊ အသုံးပြုသူအမည် သို့မဟုတ် ဖုန်းနံပါတ်ထည့်ပါ',
        enterPassword: 'ကျေးဇူးပြု၍ စကားဝှက်ထည့်ပါ',
        enterUsername: 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည်ထည့်ပါ',
        passwordMin: 'စကားဝှက်သည် အနည်းဆုံး ၄ လုံးရှိရမယ်',
        passwordMatch: 'စကားဝှက်များ မတူညီပါ',
        userExists: '❌ အသုံးပြုသူအမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ် ရှိပြီးသားပါ',
        invalidCredentials: '❌ အီးမေးလ်/အသုံးပြုသူအမည်/ဖုန်းနံပါတ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်',
        // Settings
        settingsNameTitle: '✏️ နာမည်ပြောင်းရန်', settingsNameSub: 'နာမည်အသစ်ထည့်ပါ',
        settingsUsernameTitle: '✏️ အသုံးပြုသူအမည်ပြောင်းရန်', settingsUsernameSub: 'အသုံးပြုသူအမည်အသစ်ထည့်ပါ',
        settingsEmailTitle: '📧 အီးမေးလ်ပြောင်းရန်', settingsEmailSub: 'အီးမေးလ်အသစ်ထည့်ပါ',
        settingsPhoneTitle: '📱 ဖုန်းနံပါတ်ပြောင်းရန်', settingsPhoneSub: 'ဖုန်းနံပါတ်အသစ်ထည့်ပါ',
        settingsPassTitle: '🔑 စကားဝှက်ပြောင်းရန်', settingsPassSub: 'စကားဝှက်အသစ်ထည့်ပါ',
        settingsNameLabel: 'နာမည်အသစ်', settingsUsernameLabel: 'အသုံးပြုသူအမည်အသစ်',
        settingsEmailLabel: 'အီးမေးလ်အသစ်', settingsPhoneLabel: 'ဖုန်းနံပါတ်အသစ်',
        settingsPassLabel: 'စကားဝှက်အသစ်', settingsConfirmLabel: 'စကားဝှက်အတည်ပြုရန်',
        settingsSave: '💾 သိမ်းမည်', settingsError: 'ကျေးဇူးပြု၍ ထည့်ပါ',
        settingsPassError: 'စကားဝှက်များတူညီရမည်',
        settingsUsernameExists: '❌ ဤအသုံးပြုသူအမည်ရှိပြီးသားပါ',
        saveSuccess: '✅ အောင်မြင်ပါသည်!', logoutSuccess: '✅ ထွက်ပြီးပါပြီ!',
        // Notifications
        pageTitleNoti: 'သတိပေးချက်များ', emptyNoti: 'သတိပေးချက် မရှိသေးပါ',
        clearAll: 'အကုန်ဖျက်မည်', cleared: '✅ အကုန်ဖျက်ပြီး',
        replyPlaceholder: 'စာပြန်ရန်...', replyBtn: 'ပို့မည်',
        // Payment
        paymentTitle: 'ငွေပေးချေရန်', paymentSub: 'အောက်ပါအကောင့်များထဲမှ တစ်ခုခုသို့ ငွေပို့ပါ',
        accountsTitle: 'ငွေလက်ခံမည့်အကောင့်များ', wave: 'Wave Pay', kpay: 'KBZ Pay',
        howToTitle: 'ငွေပေးချေနည်း',
        step1: '<strong>Wave Pay</strong> သို့မဟုတ် <strong>KBZ Pay</strong> ရွေးပါ',
        step2: 'အပေါ်က <strong>ဖုန်းနံပါတ်</strong> ကိုကူးယူပါ',
        step3: 'အတိအကျငွေပို့ပြီး <strong>Screenshot</strong> ရိုက်ပါ',
        step4: '<strong>ဆိုင်</strong> သို့သွားပြီး အော်ဒါအပြီးသတ်ပါ',
        supportTitle: 'အကူအညီ', supportLabel: 'Telegram မှ ဆက်သွယ်ပါ',
        supportDesc: '@Energypremiumhub • ၂၄/၇ ဝန်ဆောင်မှု',
        copy: 'ကူးယူမည်', copied: '✅ ကူးပြီး',
        // Shop page
        pageTitleShop: 'Game Shop', pageSubShop: 'ဂိမ်းတစ်ခုရွေးပြီး ပက်ကေ့ခ်ျများကို ဝယ်ယူလိုက်ပါ',
        gamesTitle: 'ဂိမ်းများ', comingSoon: 'Coming Soon', comingSoonSub: '⏳ အသစ်ထွက်ရှိမည်',
        searchPlaceholder: '🔍 ဂိမ်းနာမည်ရှာပါ...', noGames: '❌ ဂိမ်းမတွေ့ပါ',
        selectGame: 'ရွေးချယ်လိုက်ပါ', comingSoonMsg: '🎮 ဤဂိမ်းကို မကြာမီ ထည့်သွင်းပေးပါမည်။',
        mlbbSub: 'စိန်ဖြည့်မှု', mcggSub: 'စိန်ဖြည့်မှု',
        // Profile
        pageTitleProfile: 'ပရိုဖိုင်', pageSubProfile: 'သင့်အကောင့်အချက်အလက်များ',
        orderHistoryLabel: 'အော်ဒါမှတ်တမ်း', settingsLabel: 'အကောင့်ဆက်တင်များ',
        changeNameText: 'နာမည်ပြောင်းရန်', changeUsernameText: 'အသုံးပြုသူအမည်ပြောင်းရန်',
        changeEmailText: 'အီးမေးလ်ပြောင်းရန်', changePhoneText: 'ဖုန်းနံပါတ်ပြောင်းရန်',
        changePasswordText: 'စကားဝှက်ပြောင်းရန်', logoutText: 'ထွက်မည်',
        noOrders: 'အော်ဒါမရှိသေးပါ', showMore: 'အကုန်ကြည့်မည် →', showLess: 'ပြန်ဖျောက်မည်',
        orderStatusPending: 'ဆောင်ရွက်နေဆဲ', orderStatusCompleted: 'ပြီးပြီ', orderStatusCancelled: 'ပယ်ဖျက်ထား',
        // MCGG
        pageTitleMCGG: 'MCGG Packages', pageSubMCGG: 'ပက်ကေ့ချ်တစ်ခုရွေးပြီး ဝယ်ယူပါ',
        bundlesTitle: 'ပက်ကေ့ချ်များ', diamondsTitle: 'စိန်များ', doubleTitle: 'နှစ်ဆဖြည့်မှု',
        buy: 'ဝယ်ယူရန်', selectLabel: 'ရွေးရန်', currency: 'Ks', doubleBadge: '⭐ 2x Bonus',
        modalTitle: '🛒 အော်ဒါတင်ရန်', modalSub: 'အချက်အလက်များကို မှန်ကန်စွာဖြည့်သွင်းပါ',
        gameId: 'ဂိမ်းအိုင်ဒီ', serverId: 'ဆာဗာအိုင်ဒီ',
        gameIdHint: 'နံပါတ်သာ ထည့်ပါ', serverIdHint: 'နံပါတ်သာ ထည့်ပါ',
        paymentLabel: 'ငွေပေးချေရန်',
        uploadLabel: 'ပြေစာတင်ပို့ရန်', uploadText: 'Screenshot ပို့ပေးပါ',
        submit: 'အော်ဒါတင်မည်', submitting: '⏳ အော်ဒါတင်နေသည်...',
        enterGameId: 'ကျေးဇူးပြု၍ ဂိမ်းအိုင်ဒီ နံပါတ်ထည့်ပါ',
        enterServerId: 'ကျေးဇူးပြု၍ ဆာဗာအိုင်ဒီ နံပါတ်ထည့်ပါ',
        enterNumberOnly: 'နံပါတ်သာ ထည့်ပါ (အက္ခရာမထည့်ရ)',
        selectPayment: 'ကျေးဇူးပြု၍ ငွေပေးချေနည်းရွေးပါ',
        uploadSlip: 'ကျေးဇူးပြု၍ Screenshot ပို့ပေးပါ',
        orderSuccess: '✅ အော်ဒါအောင်မြင်ပါသည်!',
        orderFail: '❌ အော်ဒါမအောင်မြင်ပါ။ ထပ်မံကြိုးစားပါ။'
    },
    en: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'Home', shop: 'Shop', payment: 'Payment', profile: 'Profile', noti: 'Noti',
        greeting: 'Hey, Gamer!',
        subtitle: 'Top up diamonds and dominate the battlefield',
        goToShop: '⚡ GO TO SHOP', shopClosed: '🔒 SHOP CLOSED',
        shopSubText: 'Browse all packages',
        servicesTitle: 'Why Choose Us?',
        s1: '10 mins delivery', s2: 'Fast • Easy • Trusted',
        s3: 'Best Price & Best Service', s4: '9:30 AM - 9:30 PM',
        s5: 'Mobile Legends', s6: 'Coming Soon',
        telegramTitle: '📢 Join Our Telegram Channel',
        telegramDesc: 'Get latest updates, promos and support',
        contactLabel: '💬 Need Help?', contactUsername: '@PremEnergy',
        shopOpen: 'OPEN', shopClosedStatus: 'CLOSED',
        shopOpenText: 'Open from 9:30 AM to 9:30 PM (Myanmar Time)',
        shopClosedText: 'Will open at 9:30 AM (Myanmar Time)',
        modalLogin: 'Login', modalRegister: 'Register',
        modalLoginSub: 'Welcome back!', modalRegisterSub: 'Create your account!',
        email: 'Email / Username / Phone', password: 'Password',
        switchLogin: "Don't have an account? Register",
        switchRegister: 'Already have an account? Login',
        login: 'Login', register: 'Register',
        loginSuccess: '✅ Welcome back!', registerSuccess: '✅ Account created!',
        enterEmail: 'Please enter your email, username or phone',
        enterPassword: 'Please enter your password',
        enterUsername: 'Please enter your username',
        passwordMin: 'Password must be at least 4 characters',
        passwordMatch: 'Passwords do not match',
        userExists: '❌ Username, email or phone already exists',
        invalidCredentials: '❌ Invalid email/username/phone or password',
        settingsNameTitle: '✏️ Change Name', settingsNameSub: 'Enter new name',
        settingsUsernameTitle: '✏️ Change Username', settingsUsernameSub: 'Enter new username',
        settingsEmailTitle: '📧 Change Email', settingsEmailSub: 'Enter new email',
        settingsPhoneTitle: '📱 Change Phone', settingsPhoneSub: 'Enter new phone number',
        settingsPassTitle: '🔑 Change Password', settingsPassSub: 'Enter new password',
        settingsNameLabel: 'New Name', settingsUsernameLabel: 'New Username',
        settingsEmailLabel: 'New Email', settingsPhoneLabel: 'New Phone',
        settingsPassLabel: 'New Password', settingsConfirmLabel: 'Confirm Password',
        settingsSave: '💾 Save', settingsError: 'Please fill in',
        settingsPassError: 'Passwords must match',
        settingsUsernameExists: '❌ Username already exists',
        saveSuccess: '✅ Success!', logoutSuccess: '✅ Logged out!',
        pageTitleNoti: 'Notifications', emptyNoti: 'No notifications yet',
        clearAll: 'Clear All', cleared: '✅ Cleared all',
        replyPlaceholder: 'Reply...', replyBtn: 'Send',
        paymentTitle: 'Payment', paymentSub: 'Send payment to one of the following accounts',
        accountsTitle: 'Payment Accounts', wave: 'Wave Pay', kpay: 'KBZ Pay',
        howToTitle: 'How to Pay',
        step1: 'Choose <strong>Wave Pay</strong> or <strong>KBZ Pay</strong>',
        step2: 'Copy the <strong>phone number</strong> above',
        step3: 'Send the exact amount and <strong>take a screenshot</strong>',
        step4: 'Go to <strong>Shop</strong> and complete your order',
        supportTitle: 'Support', supportLabel: 'Contact us on Telegram',
        supportDesc: '@Energypremiumhub • 24/7 Support',
        copy: 'Copy', copied: '✅ Copied!',
        pageTitleShop: 'Game Shop', pageSubShop: 'Choose a game and purchase packages',
        gamesTitle: 'Games', comingSoon: 'Coming Soon', comingSoonSub: '⏳ Coming Soon',
        searchPlaceholder: '🔍 Search game name...', noGames: '❌ No games found',
        selectGame: 'Selected', comingSoonMsg: '🎮 This game will be added soon.',
        mlbbSub: 'Diamond Top Up', mcggSub: 'Diamond Top Up',
        pageTitleProfile: 'Profile', pageSubProfile: 'Your account information',
        orderHistoryLabel: 'Order History', settingsLabel: 'Account Settings',
        changeNameText: 'Change Name', changeUsernameText: 'Change Username',
        changeEmailText: 'Change Email', changePhoneText: 'Change Phone',
        changePasswordText: 'Change Password', logoutText: 'Logout',
        noOrders: 'No orders yet', showMore: 'Show More →', showLess: 'Show Less',
        orderStatusPending: 'Pending', orderStatusCompleted: 'Completed', orderStatusCancelled: 'Cancelled',
        pageTitleMCGG: 'MCGG Packages', pageSubMCGG: 'Select a package and buy',
        bundlesTitle: 'Packages', diamondsTitle: 'Diamonds', doubleTitle: 'Double Top Up',
        buy: 'Buy', selectLabel: 'Select', currency: 'Ks', doubleBadge: '⭐ 2x Bonus',
        modalTitle: '🛒 Submit Order', modalSub: 'Fill in your details correctly',
        gameId: 'Game ID', serverId: 'Server ID',
        gameIdHint: 'Numbers only', serverIdHint: 'Numbers only',
        paymentLabel: 'Payment Method',
        uploadLabel: 'Upload Payment Slip', uploadText: 'Send Screenshot',
        submit: 'Submit Order', submitting: '⏳ Submitting...',
        enterGameId: 'Please enter your Game ID (numbers only)',
        enterServerId: 'Please enter your Server ID (numbers only)',
        enterNumberOnly: 'Please enter numbers only',
        selectPayment: 'Please select a payment method',
        uploadSlip: 'Please send your Screenshot',
        orderSuccess: '✅ Order successful!',
        orderFail: '❌ Order failed. Please try again.'
    }
};

let currentLang = localStorage.getItem('lang') || 'my';
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

function getText(key) { return LANG_DATA[currentLang] ? LANG_DATA[currentLang][key] : key; }

// ========== TOAST ==========
function showToast(msg, type) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show';
    if (type === 'success') t.classList.add('success');
    else if (type === 'error') t.classList.add('error');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ========== NIGHT MODE ==========
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const icon = document.querySelector('.night-toggle i');
    if (icon) icon.className = document.body.classList.contains('night-mode') ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('nightMode', document.body.classList.contains('night-mode') ? 'true' : 'false');
}

// ========== BADGE ==========
function updateBadge() {
    const notis = JSON.parse(localStorage.getItem('notifications') || '[]');
    const count = notis.filter(n => n.status === 'pending').length;
    const badge = document.getElementById('notiBadge');
    if (badge) {
        badge.style.display = count > 0 ? 'block' : 'none';
        if (count > 0) badge.textContent = count;
    }
}

// ========== COPY ==========
function copyTextValue(v) {
    navigator.clipboard.writeText(v);
    showToast('✅ ကူးယူပြီး', 'success');
}

function copyNumber(number, btn) {
    const d = LANG_DATA[currentLang] || {};
    navigator.clipboard.writeText(number).then(() => {
        btn.textContent = d.copied || '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = d.copy || 'Copy';
            btn.classList.remove('copied');
        }, 2500);
    }).catch(() => {
        const input = document.createElement('input');
        input.value = number;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        btn.textContent = d.copied || '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = d.copy || 'Copy';
            btn.classList.remove('copied');
        }, 2500);
    });
}

// ========== LANGUAGE SWITCHER ==========
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    updateLanguage();
}

// ========== SHOP STATUS CHECK ==========
function isShopOpen() {
    const now = new Date();
    const myanmarTime = new Date(now.getTime() + (6.5 * 60 * 60 * 1000));
    const hours = myanmarTime.getUTCHours();
    const minutes = myanmarTime.getUTCMinutes();
    const time = hours * 60 + minutes;
    return time >= 570 && time < 1290; // 9:30 AM - 9:30 PM
}
/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (PART 2)
   Copy this BELOW Part 1 in js/main.js
   ============================================ */

// ========== UPDATE LANGUAGE (ALL PAGES) ==========
function updateLanguage() {
    const d = LANG_DATA[currentLang];
    if (!d) return;

    // Common elements
    const ids = [
        'appName', 'appSub', 'greeting', 'subtitle', 'goToShop', 'shopSubText',
        'servicesTitle', 's1', 's2', 's3', 's4', 's5', 's6',
        'telegramTitle', 'telegramDesc', 'contactLabel',
        'navHome', 'navShop', 'navPayment', 'navProfile', 'navNoti',
        'pageTitle', 'pageSub', 'pageTitleNoti', 'pageTitleShop', 'pageSubShop',
        'pageTitleProfile', 'pageSubProfile', 'pageTitleMCGG', 'pageSubMCGG',
        'gamesTitle', 'mlbbSub', 'mcggSub', 'cs1', 'cs2', 'cs1sub', 'cs2sub',
        'paymentTitle', 'paymentSub', 'accountsTitle', 'waveName', 'kpayName',
        'howToTitle', 'step1', 'step2', 'step3', 'step4',
        'supportTitle', 'supportLabel', 'supportDesc',
        'orderHistoryLabel', 'settingsLabel',
        'changeNameText', 'changeUsernameText', 'changeEmailText',
        'changePhoneText', 'changePasswordText', 'logoutText',
        'bundlesTitle', 'diamondsTitle', 'doubleTitle',
        'clearAllText', 'emptyText', 'pageTitleNotiLabel'
    ];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'step1' || id === 'step2' || id === 'step3' || id === 'step4') {
                el.innerHTML = d[id];
            } else {
                el.textContent = d[id];
            }
        }
    });

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = d.searchPlaceholder;

    // Update shop status
    const statusBadge = document.getElementById('statusBadge');
    const statusText = document.getElementById('statusText');
    const shopCard = document.getElementById('shopCard');
    const goToShop = document.getElementById('goToShop');
    const shopSubText = document.getElementById('shopSubText');
    const isOpen = isShopOpen();

    if (statusBadge) {
        statusBadge.innerHTML = isOpen
            ? '<span class="status-dot"></span> ' + d.shopOpen
            : '<span class="status-dot"></span> ' + d.shopClosedStatus;
        statusBadge.className = 'banner-status ' + (isOpen ? 'open' : 'closed');
    }
    if (statusText) statusText.textContent = isOpen ? d.shopOpenText : d.shopClosedText;
    if (shopCard) {
        shopCard.className = 'shop-card ' + (isOpen ? 'open' : 'closed');
        if (goToShop) goToShop.textContent = isOpen ? d.goToShop : d.shopClosed;
        if (shopSubText) shopSubText.textContent = isOpen ? d.shopSubText : d.shopClosedText;
    }

    // Update copy buttons
    const copyBtn1 = document.getElementById('copyBtn1');
    const copyBtn2 = document.getElementById('copyBtn2');
    if (copyBtn1) copyBtn1.textContent = d.copy;
    if (copyBtn2) copyBtn2.textContent = d.copy;

    // Update MCGG modal elements
    const modalTitle = document.getElementById('modalTitle');
    const modalSub = document.getElementById('modalSub');
    const gameIdLabel = document.getElementById('gameIdLabel');
    const serverIdLabel = document.getElementById('serverIdLabel');
    const gameIdHint = document.getElementById('gameIdHint');
    const serverIdHint = document.getElementById('serverIdHint');
    const paymentLabel = document.getElementById('paymentLabel');
    const uploadLabel = document.getElementById('uploadLabel');
    const uploadText = document.getElementById('uploadText');
    const submitBtn = document.getElementById('submitBtn');
    if (modalTitle) modalTitle.textContent = d.modalTitle;
    if (modalSub) modalSub.textContent = d.modalSub;
    if (gameIdLabel) gameIdLabel.textContent = d.gameId;
    if (serverIdLabel) serverIdLabel.textContent = d.serverId;
    if (gameIdHint) gameIdHint.textContent = d.gameIdHint;
    if (serverIdHint) serverIdHint.textContent = d.serverIdHint;
    if (paymentLabel) paymentLabel.textContent = d.paymentLabel;
    if (uploadLabel) uploadLabel.textContent = d.uploadLabel;
    if (uploadText) uploadText.textContent = d.uploadText;
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = '✅ ' + d.submit;
    else if (submitBtn) submitBtn.textContent = '✅ ' + d.submit;

    updateAuthUI();
    if (typeof renderOrders === 'function') renderOrders();
    if (typeof loadNotifications === 'function') loadNotifications();
    if (typeof renderPackages === 'function') renderPackages();
    updateBadge();
}

// ========== AUTH UI UPDATE ==========
function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    if (!authBtn) return;

    if (currentUser) {
        const firstChar = (currentUser.displayName || currentUser.username || 'U').charAt(0).toUpperCase();
        const avatarImg = localStorage.getItem('userAvatar_' + currentUser.username);
        if (avatarImg) {
            authBtn.innerHTML = '<img src="' + avatarImg + '" alt="avatar"> ' + (currentUser.displayName || currentUser.username);
        } else {
            authBtn.innerHTML = '<span class="avatar-small">' + firstChar + '</span> ' + (currentUser.displayName || currentUser.username);
        }
        authBtn.className = (authBtn.classList.contains('auth-btn-profile') ? 'auth-btn-profile' : 'auth-btn') + ' logged-in';
    } else {
        authBtn.innerHTML = '<i class="fas fa-key"></i> Login';
        authBtn.className = authBtn.classList.contains('auth-btn-profile') ? 'auth-btn-profile' : 'auth-btn';
    }

    // Update profile section if on profile page
    const displayName = document.getElementById('displayName');
    const displayUsername = document.getElementById('displayUsername');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const avatarDisplay = document.getElementById('avatarDisplay');

    if (displayName && currentUser) {
        displayName.textContent = currentUser.displayName || currentUser.username;
    }
    if (displayUsername && currentUser) {
        displayUsername.innerHTML = '<i class="fas fa-user"></i> @' + currentUser.username;
    }
    if (displayEmail && currentUser) {
        displayEmail.innerHTML = '<i class="fas fa-envelope"></i> ' + (currentUser.email || 'No email');
    }
    if (displayPhone && currentUser) {
        displayPhone.innerHTML = '<i class="fas fa-phone"></i> ' + (currentUser.phone || 'No phone');
    }
    if (avatarDisplay && currentUser) {
        const avatar = localStorage.getItem('userAvatar_' + currentUser.username);
        if (avatar) {
            avatarDisplay.innerHTML = '<img src="' + avatar + '" alt="avatar" style="width:100%;height:100%;object-fit:cover;">';
        } else {
            avatarDisplay.textContent = '👤';
        }
    }
}

// ========== AUTH MODAL FUNCTIONS ==========
function openAuthModal(mode) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.add('show');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const error = document.getElementById('loginError');
    const success = document.getElementById('loginSuccess');
    const authError = document.getElementById('authError');

    if (mode === 'register') {
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
    } else {
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
    }
    if (error) { error.classList.remove('show'); error.textContent = ''; }
    if (success) { success.classList.remove('show'); success.textContent = ''; }
    if (authError) { authError.style.display = 'none'; authError.textContent = ''; }
    updateAuthModalTexts();
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.remove('show');
    // Clear inputs
    const inputs = ['loginInput', 'loginPassword', 'regUsername', 'regEmail', 'regPhone', 'regPassword', 'regConfirmPassword',
        'authLoginInput', 'authLoginPassword', 'authRegUsername', 'authRegEmail', 'authRegPhone', 'authRegPassword', 'authRegConfirmPassword'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

function updateAuthModalTexts() {
    const d = LANG_DATA[currentLang];
    const isLogin = document.getElementById('registerForm') ? document.getElementById('registerForm').style.display === 'none' : true;

    const modalTitle = document.getElementById('modalTitle') || document.getElementById('authModalTitle');
    const modalSub = document.getElementById('modalSub') || document.getElementById('authModalSub');
    if (modalTitle) modalTitle.textContent = isLogin ? d.modalLogin : d.modalRegister;
    if (modalSub) modalSub.textContent = isLogin ? d.modalLoginSub : d.modalRegisterSub;

    const emailLabel = document.getElementById('emailLabel') || document.getElementById('authEmailLabel');
    const passLabel = document.getElementById('passLabel') || document.getElementById('authPassLabel');
    if (emailLabel) emailLabel.textContent = d.email;
    if (passLabel) passLabel.textContent = d.password;

    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (loginBtn) loginBtn.textContent = d.login;
    if (registerBtn) registerBtn.textContent = d.register;

    const switchToReg = document.getElementById('switchToRegister') || document.getElementById('authSwitchToRegister');
    const switchToLog = document.getElementById('switchToLogin') || document.getElementById('authSwitchToLogin');
    if (switchToReg) switchToReg.textContent = d.switchLogin;
    if (switchToLog) switchToLog.textContent = d.switchRegister;
}

// ========== AUTH LOGIN ==========
function handleAuthLogin() {
    const loginInput = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const loginPassword = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    const error = document.getElementById('loginError') || document.getElementById('authError');
    const d = LANG_DATA[currentLang];

    if (!loginInput || !loginPassword) return;
    const input = loginInput.value.trim();
    const password = loginPassword.value.trim();
    if (error) { error.style.display = 'none'; error.textContent = ''; }

    if (!input || !password) {
        if (error) { error.textContent = d.enterEmail; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    let found = null;
    for (const key in users) {
        const user = users[key];
        if (key === input || user.email === input || user.username === input || user.phone === input) {
            if (user.password === password) { found = user; break; }
        }
    }

    if (found) {
        currentUser = found;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeAuthModal();
        showToast(d.loginSuccess, 'success');
        updateAuthUI();
        updateBadge();
        if (typeof renderOrders === 'function') renderOrders();
    } else {
        if (error) { error.textContent = d.invalidCredentials; error.style.display = 'block'; error.classList.add('show'); }
    }
}

// ========== AUTH REGISTER ==========
function handleAuthRegister() {
    const regUsername = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const regEmail = document.getElementById('regEmail') || document.getElementById('authRegEmail');
    const regPhone = document.getElementById('regPhone') || document.getElementById('authRegPhone');
    const regPassword = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const regConfirm = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    const error = document.getElementById('loginError') || document.getElementById('authError');
    const d = LANG_DATA[currentLang];

    if (!regUsername || !regPassword || !regConfirm) return;
    const username = regUsername.value.trim();
    const email = regEmail ? regEmail.value.trim() : '';
    const phone = regPhone ? regPhone.value.trim() : '';
    const password = regPassword.value.trim();
    const confirm = regConfirm.value.trim();
    if (error) { error.style.display = 'none'; error.textContent = ''; }

    if (!username || !password || !confirm) {
        if (error) { error.textContent = 'Please fill all required fields'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }
    if (password.length < 4) {
        if (error) { error.textContent = d.passwordMin; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }
    if (password !== confirm) {
        if (error) { error.textContent = d.passwordMatch; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    for (const key in users) {
        if (key === username || (email && users[key].email === email) || (phone && users[key].phone === phone)) {
            if (error) { error.textContent = d.userExists; error.style.display = 'block'; error.classList.add('show'); }
            return;
        }
    }

    const newUser = {
        username, email, phone, password,
        displayName: username, diamonds: 100,
        createdAt: new Date().toISOString()
    };
    users[username] = newUser;
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    showToast(d.registerSuccess, 'success');
    updateAuthUI();
    updateBadge();
    if (typeof renderOrders === 'function') renderOrders();
}

// ========== SETTINGS MODAL ==========
let settingsModalMode = '';

function openSettingsModal(mode) {
    if (!currentUser) { showToast('❌ Please login first', 'error'); return; }
    settingsModalMode = mode;
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.classList.add('show');

    const d = LANG_DATA[currentLang];
    const title = document.getElementById('settingsModalTitle');
    const sub = document.getElementById('settingsModalSub');
    const label = document.getElementById('settingsFieldLabel');
    const input = document.getElementById('settingsInput');
    const confirmGroup = document.getElementById('settingsConfirmGroup');
    const confirmInput = document.getElementById('settingsConfirmInput');
    const error = document.getElementById('settingsError');
    const saveBtn = document.getElementById('settingsSaveBtn');

    if (error) error.style.display = 'none';
    if (input) input.value = '';
    if (confirmInput) confirmInput.value = '';

    if (mode === 'name') {
        if (title) title.textContent = d.settingsNameTitle;
        if (sub) sub.textContent = d.settingsNameSub;
        if (label) label.textContent = d.settingsNameLabel;
        if (input) { input.type = 'text'; input.placeholder = 'New name'; }
        if (confirmGroup) confirmGroup.style.display = 'none';
    } else if (mode === 'username') {
        if (title) title.textContent = d.settingsUsernameTitle;
        if (sub) sub.textContent = d.settingsUsernameSub;
        if (label) label.textContent = d.settingsUsernameLabel;
        if (input) { input.type = 'text'; input.placeholder = 'New username'; }
        if (confirmGroup) confirmGroup.style.display = 'none';
    } else if (mode === 'email') {
        if (title) title.textContent = d.settingsEmailTitle;
        if (sub) sub.textContent = d.settingsEmailSub;
        if (label) label.textContent = d.settingsEmailLabel;
        if (input) { input.type = 'email'; input.placeholder = 'example@email.com'; }
        if (confirmGroup) confirmGroup.style.display = 'none';
    } else if (mode === 'phone') {
        if (title) title.textContent = d.settingsPhoneTitle;
        if (sub) sub.textContent = d.settingsPhoneSub;
        if (label) label.textContent = d.settingsPhoneLabel;
        if (input) { input.type = 'tel'; input.placeholder = '09xxxxxxxxx'; }
        if (confirmGroup) confirmGroup.style.display = 'none';
    } else if (mode === 'password') {
        if (title) title.textContent = d.settingsPassTitle;
        if (sub) sub.textContent = d.settingsPassSub;
        if (label) label.textContent = d.settingsPassLabel;
        if (input) { input.type = 'password'; input.placeholder = 'Min 4 characters'; }
        if (confirmGroup) confirmGroup.style.display = 'block';
        if (confirmInput) { confirmInput.type = 'password'; confirmInput.placeholder = 'Re-enter password'; }
    }
    if (saveBtn) saveBtn.textContent = d.settingsSave;
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.classList.remove('show');
}

function saveSettings() {
    const input = document.getElementById('settingsInput');
    const error = document.getElementById('settingsError');
    const d = LANG_DATA[currentLang];
    if (!input) return;

    const value = input.value.trim();
    if (error) error.style.display = 'none';

    if (!value) {
        if (error) { error.textContent = d.settingsError; error.style.display = 'block'; }
        return;
    }

    if (settingsModalMode === 'password') {
        const confirmInput = document.getElementById('settingsConfirmInput');
        if (confirmInput && value !== confirmInput.value.trim()) {
            if (error) { error.textContent = d.settingsPassError; error.style.display = 'block'; }
            return;
        }
        if (value.length < 4) {
            if (error) { error.textContent = 'Password must be at least 4 characters'; error.style.display = 'block'; }
            return;
        }
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userData = users[currentUser.username];
    if (!userData) { showToast('❌ User not found', 'error'); return; }

    if (settingsModalMode === 'name') {
        userData.displayName = value;
        currentUser.displayName = value;
    } else if (settingsModalMode === 'username') {
        if (value !== currentUser.username && users[value]) {
            if (error) { error.textContent = d.settingsUsernameExists; error.style.display = 'block'; }
            return;
        }
        users[value] = userData;
        delete users[currentUser.username];
        currentUser.username = value;
    } else if (settingsModalMode === 'email') {
        userData.email = value;
        currentUser.email = value;
    } else if (settingsModalMode === 'phone') {
        userData.phone = value;
        currentUser.phone = value;
    } else if (settingsModalMode === 'password') {
        userData.password = value;
    }

    if (settingsModalMode !== 'username') {
        users[currentUser.username] = userData;
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    closeSettingsModal();
    updateAuthUI();
    showToast(d.saveSuccess, 'success');
}

// ========== LOGOUT ==========
function logout() {
    if (!currentUser) { showToast('❌ No user logged in', 'error'); return; }
    const overlay = document.getElementById('logoutOverlay');
    if (overlay) overlay.classList.add('show');
}
