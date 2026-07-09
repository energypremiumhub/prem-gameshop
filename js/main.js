/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (FIXED)
   ============================================ */

// ========== GLOBAL CONFIG ==========
const TELEGRAM_BOT_TOKEN = '8751360822:AAFQNiWhfGWgUsjD7Bd5DzfHMfpkR4COHY8';
const TELEGRAM_CHAT_ID = '8745522082';

// ========== LANGUAGE DATA ==========
const LANG_DATA = {
    my: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'ပင်မ', shop: 'ဆိုင်', payment: 'ငွေပေးချေ', profile: 'ပရိုဖိုင်', noti: 'ငွေပေးချေ',
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
        forgotPassword: 'စကားဝှက်မေ့နေပါသလား?',
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
        // MLBB Page Headers
        mlbbGlobalPackages: 'MLBB Global Packages',
        mlbbBanPackages: 'MLBB Ban Packages',
        mlbbIndoPackages: 'MLBB Indo Packages',
        mlbbRussiaPackages: 'MLBB Russia Packages',
        banServerLabel: 'Ban Server: (Malay, Sin, Php)',
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
        orderFail: '❌ အော်ဒါမအောင်မြင်ပါ။ ထပ်မံကြိုးစားပါ။',
        backToShop: '← ဆိုင်သို့ ပြန်သွားရန်'
    },
    en: {
        appName: 'Premium', appSub: 'Game Shop',
        home: 'Home', shop: 'Shop', payment: 'Payment', profile: 'Profile', noti: 'Payment',
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
        forgotPassword: 'Forgot Password?',
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
        mlbbGlobalPackages: 'MLBB Global Packages',
        mlbbBanPackages: 'MLBB Ban Packages',
        mlbbIndoPackages: 'MLBB Indo Packages',
        mlbbRussiaPackages: 'MLBB Russia Packages',
        banServerLabel: 'Ban Server: (Malay, Sin, Php)',
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
        orderFail: '❌ Order failed. Please try again.',
        backToShop: '← Back to Shop'
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
        setTimeout(() => { btn.textContent = d.copy || 'Copy'; btn.classList.remove('copied'); }, 2500);
    }).catch(() => {
        const input = document.createElement('input');
        input.value = number;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        btn.textContent = d.copied || '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = d.copy || 'Copy'; btn.classList.remove('copied'); }, 2500);
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
    return time >= 570 && time < 1290;
}
/* ============================================
   PREMIUM GAME SHOP - MAIN JAVASCRIPT (PART 2)
   Copy this BELOW Part 1 in js/main.js
   ============================================ */

// ========== UPDATE LANGUAGE (ALL PAGES) ==========
function updateLanguage() {
    const d = LANG_DATA[currentLang];
    if (!d) return;

    // Common text elements
    const textIds = [
        'appName', 'appSub', 'greeting', 'subtitle', 'goToShop', 'shopSubText',
        'servicesTitle', 's1', 's2', 's3', 's4', 's5', 's6',
        'telegramTitle', 'telegramDesc', 'contactLabel',
        'navHome', 'navShop', 'navPayment', 'navProfile', 'navNoti',
        'pageTitle', 'pageSub', 'pageTitleShop', 'pageSubShop',
        'pageTitleProfile', 'pageSubProfile',
        'gamesTitle', 'mlbbSub', 'mcggSub', 'cs1', 'cs2', 'cs1sub', 'cs2sub',
        'paymentTitle', 'paymentSub', 'accountsTitle', 'waveName', 'kpayName',
        'supportTitle', 'supportLabel', 'supportDesc',
        'orderHistoryLabel', 'settingsLabel',
        'changeNameText', 'changeUsernameText', 'changeEmailText',
        'changePhoneText', 'changePasswordText', 'logoutText',
        'bundlesTitle', 'diamondsTitle', 'doubleTitle',
        'clearAllText', 'emptyText', 'pageTitleNotiLabel',
        'pageTitleMCGG', 'pageSubMCGG',
        'modalTitle', 'modalSub', 'gameIdLabel', 'serverIdLabel',
        'gameIdHint', 'serverIdHint', 'paymentLabel',
        'uploadLabel', 'uploadText', 'waveLabel', 'kpayLabel',
        'forgotLink'
    ];
    textIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (['step1', 'step2', 'step3', 'step4'].includes(id)) {
                el.innerHTML = d[id] || '';
            } else {
                el.textContent = d[id] || '';
            }
        }
    });

    // HTML content elements
    const stepIds = ['step1', 'step2', 'step3', 'step4'];
    stepIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && d[id]) el.innerHTML = d[id];
    });

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = d.searchPlaceholder || '';

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
    if (copyBtn1) copyBtn1.textContent = d.copy || 'Copy';
    if (copyBtn2) copyBtn2.textContent = d.copy || 'Copy';

    // Update submit button
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = '✅ ' + (d.submit || 'Submit');
    else if (submitBtn) submitBtn.textContent = '✅ ' + (d.submit || 'Submit');

    // Update MLBB page header based on server
    updateMLBBHeader();

    // Update how-to title
    const howToTitle = document.getElementById('howToTitle');
    if (howToTitle) howToTitle.textContent = d.howToTitle || 'How to Pay';

    // Update back button
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.textContent = d.backToShop || '← Back to Shop';

    // Update forgot password link
    const forgotLink = document.getElementById('forgotLink');
    if (forgotLink) forgotLink.textContent = d.forgotPassword || 'Forgot Password?';

    updateAuthUI();
    if (typeof renderOrders === 'function') renderOrders();
    if (typeof loadNotifications === 'function') loadNotifications();
    if (typeof renderPackages === 'function') renderPackages();
    updateBadge();
}

// ========== UPDATE MLBB HEADER ==========
function updateMLBBHeader() {
    const pageTitle = document.getElementById('pageTitle');
    const banOpt = document.querySelector('.server-selector .opt[data-server="ban"]');
    if (!pageTitle) return;

    const d = LANG_DATA[currentLang];
    const headerMap = {
        'global': d.mlbbGlobalPackages || 'MLBB Global Packages',
        'ban': d.mlbbBanPackages || 'MLBB Ban Packages',
        'indo': d.mlbbIndoPackages || 'MLBB Indo Packages',
        'russia': d.mlbbRussiaPackages || 'MLBB Russia Packages'
    };
    if (headerMap[currentServer]) {
        pageTitle.textContent = headerMap[currentServer];
    }

    // Update Ban server label
    if (banOpt && currentServer === 'ban') {
        banOpt.textContent = '🇲🇾🇸🇬🇵🇭 ' + (d.banServerLabel || 'Ban Server: (Malay, Sin, Php)');
    } else if (banOpt) {
        banOpt.textContent = '🇲🇾🇸🇬🇵🇭 Ban';
    }
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

    // Update profile section
    const displayName = document.getElementById('displayName');
    const displayUsername = document.getElementById('displayUsername');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const avatarDisplay = document.getElementById('avatarDisplay');

    if (displayName) displayName.textContent = currentUser ? (currentUser.displayName || currentUser.username) : 'Guest';
    if (displayUsername) displayUsername.innerHTML = '<i class="fas fa-user"></i> @' + (currentUser ? currentUser.username : 'guest');
    if (displayEmail) displayEmail.innerHTML = '<i class="fas fa-envelope"></i> ' + (currentUser ? (currentUser.email || 'No email') : 'No email');
    if (displayPhone) displayPhone.innerHTML = '<i class="fas fa-phone"></i> ' + (currentUser ? (currentUser.phone || 'No phone') : 'No phone');
    if (avatarDisplay && currentUser) {
        const avatar = localStorage.getItem('userAvatar_' + currentUser.username);
        if (avatar) {
            avatarDisplay.innerHTML = '<img src="' + avatar + '" alt="avatar" style="width:100%;height:100%;object-fit:cover;">';
        } else {
            avatarDisplay.textContent = '👤';
        }
    } else if (avatarDisplay) {
        avatarDisplay.textContent = '👤';
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
    const inputs = ['loginInput', 'loginPassword', 'regUsername', 'regEmail', 'regPhone', 'regPassword', 'regConfirmPassword',
        'authLoginInput', 'authLoginPassword', 'authRegUsername', 'authRegEmail', 'authRegPhone', 'authRegPassword', 'authRegConfirmPassword'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    if (loginBtn) { loginBtn.disabled = true; loginBtn.className = 'btn-primary'; }
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (registerBtn) { registerBtn.disabled = true; registerBtn.className = 'btn-primary'; }
}

function updateAuthModalTexts() {
    const d = LANG_DATA[currentLang];
    const isLogin = document.getElementById('registerForm') ? document.getElementById('registerForm').style.display === 'none' : true;

    const modalTitle = document.getElementById('modalTitle') || document.getElementById('authModalTitle');
    const modalSubEl = document.getElementById('modalSub') || document.getElementById('authModalSub');
    if (modalTitle) modalTitle.textContent = isLogin ? d.modalLogin : d.modalRegister;
    if (modalSubEl) modalSubEl.textContent = isLogin ? d.modalLoginSub : d.modalRegisterSub;

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

    const forgotLink = document.getElementById('forgotLink');
    if (forgotLink) forgotLink.textContent = d.forgotPassword || 'Forgot Password?';
}

// ========== AUTH LOGIN FORM CHECK ==========
function checkLoginForm() {
    const loginInput = document.getElementById('loginInput') || document.getElementById('authLoginInput');
    const loginPassword = document.getElementById('loginPassword') || document.getElementById('authLoginPassword');
    const loginBtn = document.getElementById('loginBtn') || document.getElementById('authLoginBtn');
    if (!loginInput || !loginPassword || !loginBtn) return;
    const input = loginInput.value.trim();
    const pass = loginPassword.value.trim();
    if (input && pass) {
        loginBtn.disabled = false;
        loginBtn.className = 'btn-primary enabled';
    } else {
        loginBtn.disabled = true;
        loginBtn.className = 'btn-primary';
    }
}

// ========== AUTH REGISTER FORM CHECK ==========
function checkRegisterForm() {
    const regUsername = document.getElementById('regUsername') || document.getElementById('authRegUsername');
    const regPassword = document.getElementById('regPassword') || document.getElementById('authRegPassword');
    const regConfirm = document.getElementById('regConfirmPassword') || document.getElementById('authRegConfirmPassword');
    const registerBtn = document.getElementById('registerBtn') || document.getElementById('authRegisterBtn');
    if (!regUsername || !regPassword || !regConfirm || !registerBtn) return;
    const username = regUsername.value.trim();
    const pass = regPassword.value.trim();
    const confirm = regConfirm.value.trim();
    if (username && pass && confirm && pass === confirm) {
        registerBtn.disabled = false;
        registerBtn.className = 'btn-primary enabled';
    } else {
        registerBtn.disabled = true;
        registerBtn.className = 'btn-primary';
    }
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
    if (error) { error.style.display = 'none'; error.textContent = ''; error.classList.remove('show'); }

    if (!input || !password) {
        if (error) { error.textContent = d.enterEmail || 'Please enter all fields'; error.style.display = 'block'; error.classList.add('show'); }
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
        showToast(d.loginSuccess || '✅ Welcome back!', 'success');
        updateAuthUI();
        updateBadge();
        if (typeof renderOrders === 'function') renderOrders();
    } else {
        if (error) { error.textContent = d.invalidCredentials || '❌ Invalid credentials'; error.style.display = 'block'; error.classList.add('show'); }
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
    if (error) { error.style.display = 'none'; error.textContent = ''; error.classList.remove('show'); }

    if (!username || !password || !confirm) {
        if (error) { error.textContent = 'Please fill all required fields'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }
    if (password.length < 4) {
        if (error) { error.textContent = d.passwordMin || 'Password must be at least 4 characters'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }
    if (password !== confirm) {
        if (error) { error.textContent = d.passwordMatch || 'Passwords do not match'; error.style.display = 'block'; error.classList.add('show'); }
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    for (const key in users) {
        if (key === username || (email && users[key].email === email) || (phone && users[key].phone === phone)) {
            if (error) { error.textContent = d.userExists || '❌ Username, email or phone already exists'; error.style.display = 'block'; error.classList.add('show'); }
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
    showToast(d.registerSuccess || '✅ Account created!', 'success');
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

    const modeMap = {
        name: { title: d.settingsNameTitle, sub: d.settingsNameSub, label: d.settingsNameLabel, type: 'text', placeholder: 'New name', confirm: false },
        username: { title: d.settingsUsernameTitle, sub: d.settingsUsernameSub, label: d.settingsUsernameLabel, type: 'text', placeholder: 'New username', confirm: false },
        email: { title: d.settingsEmailTitle, sub: d.settingsEmailSub, label: d.settingsEmailLabel, type: 'email', placeholder: 'example@email.com', confirm: false },
        phone: { title: d.settingsPhoneTitle, sub: d.settingsPhoneSub, label: d.settingsPhoneLabel, type: 'tel', placeholder: '09xxxxxxxxx', confirm: false },
        password: { title: d.settingsPassTitle, sub: d.settingsPassSub, label: d.settingsPassLabel, type: 'password', placeholder: 'Min 4 characters', confirm: true }
    };

    const config = modeMap[mode];
    if (config) {
        if (title) title.textContent = config.title;
        if (sub) sub.textContent = config.sub;
        if (label) label.textContent = config.label;
        if (input) { input.type = config.type; input.placeholder = config.placeholder; }
        if (confirmGroup) confirmGroup.style.display = config.confirm ? 'block' : 'none';
        if (confirmInput && config.confirm) { confirmInput.type = 'password'; confirmInput.placeholder = 'Re-enter password'; }
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
