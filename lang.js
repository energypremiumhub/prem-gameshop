// ============================================================
//  lang.js - Language System (ပြင်ဆင်ပြီး)
// ============================================================

const LANG_DATA = {
    en: {
        // Common
        appName: 'Premium Game Shop',
        home: 'Home',
        shop: 'Shop',
        payment: 'Payment',
        profile: 'Profile',
        login: 'Login',
        register: 'Register',
        logout: 'Logout',
        noti: '🔔 No new notifications',
        // Home
        greeting: '👋 Hey dear, Welcome',
        title: 'Level Up Your <span>Game!</span>',
        subtitle: 'Top up diamonds and dominate the battlefield',
        bannerTag: 'HOT',
        bannerTitle: '20% Bonus Diamonds!',
        bannerDesc: 'Limited time offer • Shop now',
        servicesTitle: '⚡ Premium Services',
        s1: 'Instant', s2: 'Secure', s3: 'Best Price',
        s4: '24/7', s5: 'Mobile', s6: 'Top Rated',
        goToShop: 'Enter Shop →',
        shopSubText: 'Browse all packages',
        telegramTitle: '📢 Join Our Telegram Channel',
        telegramDesc: 'Get latest updates, promos and support',
        // Shop
        shopTitle: 'Diamonds Package',
        shopSub: 'Choose your package and top up instantly',
        bundles: '🎁 Bundles',
        diamonds: '💎 Diamonds',
        doubleTitle: '⭐ Double Top Up',
        doubleBoxTitle: 'Double Diamonds',
        doubleBoxSub: 'Tap to view double diamond packages',
        buy: 'Buy',
        select: 'Select',
        selected: 'Selected',
        selectFirst: '⚠️ Please select a package first!',
        // Payment
        paymentTitle: 'Payment Accounts',
        paymentSub: 'Send payment to one of the following accounts',
        wave: 'Wave Pay',
        waveDetail: 'Mobile Money',
        kpay: 'KBZ Pay',
        kpayDetail: 'KBZ Bank',
        copy: 'Copy',
        copied: '✅ Copied!',
        howToLabel: 'How to Pay',
        step1: 'Choose <strong>Wave Pay</strong> or <strong>KBZ Pay</strong>',
        step2: 'Copy the <strong>phone number</strong> above',
        step3: 'Send the exact amount and <strong>take a screenshot</strong>',
        step4: 'Go to <strong>Shop</strong> and complete your order',
        supportLabel: 'Need Help?',
        supportTitle: 'Contact us on Telegram',
        supportDesc: '@Energypremiumhub • 24/7 Support',
        // Profile
        profileTitle: 'Profile',
        online: 'Online • Premium Member',
        myDiamonds: 'My Diamonds',
        orders: 'Orders',
        editProfile: 'Edit Profile',
        orderHistory: 'Order History',
        notifications: 'Notifications',
        logoutConfirm: 'Are you sure you want to logout?',
        settingsLabel: 'Settings',
        accountSettingsText: 'Account Settings',
        themeSettingsText: 'Theme Color',
        changePasswordText: 'Change Password',
        achieveText: 'Achievements',
        aboutLabel: 'About',
        versionText: 'App Version 1.0.0',
        helpText: 'Help & Support',
        termsText: 'Terms & Privacy',
        statusOnline: '🟢 Online',
        statusLogin: '🔑 Login',
        settingsSaved: '✅ Settings saved successfully!',
        passChanged: '✅ Password changed successfully!',
        wrongCurrentPass: '❌ Current password is incorrect',
        invalidCredentials: '❌ Invalid credentials',
        userNotFound: '❌ User not found',
        userExists: '❌ Username, email or phone already exists',
        noSpace: 'Username cannot contain spaces',
        resetSuccess: '✅ Password reset successful!',
        usernameChanged: '✅ Username changed successfully!',
        usernameExists: '❌ Username already exists',
        usernameRequired: 'Please enter a username',
        // Auth
        modalLogin: '⚔️ Login',
        modalRegister: '🛡️ Register',
        modalLoginSub: 'Welcome back, warrior!',
        modalRegisterSub: 'Create your account, champion!',
        email: '📧 Email / Username / Phone',
        password: '🔑 Password',
        switchLogin: "Don't have an account? Register",
        switchRegister: 'Already have an account? Login',
        loginSuccess: '✅ Welcome back, Champion!',
        registerSuccess: '✅ Account created! Welcome!',
        logoutSuccess: '🚪 Logged out successfully!',
        enterEmail: 'Please enter your email or username',
        enterPassword: 'Please enter your password',
        enterUsername: 'Please enter your username',
        enterValidEmail: 'Please enter a valid email',
        passwordMin: 'Password must be at least 4 characters',
        passwordMatch: 'Passwords do not match',
        forgotTitle: '🔑 Forgot Password',
        forgotSub: 'Enter your email to reset password',
        otpSent: '✅ OTP sent to your email!',
        // Notifications
        pageTitle: 'Notifications',
        pageSub: 'Stay updated with your orders',
        markAll: 'Mark all as read',
        noNoti: 'No notifications yet',
        noNotiDesc: 'Your notifications will appear here',
        notiWelcome: '👋 Welcome to Premium Game Shop!',
        notiWelcomeDesc: 'Start shopping and get the best deals.',
        markedAll: '✅ All notifications marked as read',
        // Checkout
        checkout: 'Checkout',
        checkoutSub: 'Complete your order',
        selected: 'Selected Package',
        gameId: '🎮 Game ID',
        serverId: '🌐 Server ID',
        paymentMethod: '💳 Payment Method',
        uploadSlip: '📤 Upload Payment Slip',
        uploadText: 'Tap to upload screenshot',
        submit: 'Submit Order',
        orderSuccess: '✅ Order Submitted!',
        orderDesc: 'Your order has been sent. We will process it shortly.',
        homeBtn: '🏠 Back to Home',
        enterGameId: 'Please enter your Game ID',
        enterServerId: 'Please enter your Server ID',
        selectPayment: 'Please select a payment method',
        uploadSlipError: 'Please upload your payment slip',
        sending: '⏳ Sending order...',
        sendError: '❌ Failed to send order. Please try again.',
        notiNewOrder: '🛒 New order!',
        noOrders: 'No orders yet',
        orderStatusPending: 'Pending',
        orderStatusCompleted: 'Completed',
        orderStatusCancelled: 'Cancelled',
        showMore: 'Show More →'
    },
    my: {
        // Common
        appName: 'ပရီမီယံ ဂိမ်းဆိုင်',
        home: 'ပင်မ',
        shop: 'ဆိုင်',
        payment: 'ငွေပေးချေ',
        profile: 'ပရိုဖိုင်',
        login: 'ဝင်ရန်',
        register: 'မှတ်ပုံတင်ရန်',
        logout: 'ထွက်ရန်',
        noti: '🔔 အသိပေးချက်အသစ်မရှိပါ',
        // Home
        greeting: '👋 ဟေ့ကောင်လေး၊ ကြိုဆိုပါတယ်',
        title: 'ဂိမ်းကို <span>မြှင့်တင်လိုက်ပါ!</span>',
        subtitle: 'စိန်တွေဖြည့်ပြီး စစ်မြေပြင်ကို အနိုင်ယူလိုက်ပါ',
        bannerTag: 'ပူပူ',
        bannerTitle: 'စိန် ၂၀% အပိုရယူလိုက်ပါ!',
        bannerDesc: 'အချိန်အကန့်အသတ်နဲ့ • အခုပဲဝယ်ယူပါ',
        servicesTitle: '⚡ ထိပ်တန်းဝန်ဆောင်မှုများ',
        s1: 'ချက်ချင်း', s2: 'လုံခြုံ', s3: 'ဈေးအကောင်းဆုံး',
        s4: '၂၄/၇', s5: 'မိုဘိုင်း', s6: 'ထိပ်တန်း',
        goToShop: 'ဆိုင်သို့သွားရန် →',
        shopSubText: 'ပက်ကေ့ခ်ျအားလုံးကိုကြည့်ပါ',
        telegramTitle: '📢 ကျွန်ုပ်တို့ Telegram ချန်နယ်သို့လာရောက်ပါ',
        telegramDesc: 'နောက်ဆုံးရသတင်းများ၊ ပရိုမိုးရှင်းများနှင့် အကူအညီရယူပါ',
        // Shop
        shopTitle: 'စိန်အထုပ်များ',
        shopSub: 'သင့်အထုပ်ကိုရွေးပြီး ချက်ချင်းဖြည့်ပါ',
        bundles: '🎁 အထုပ်များ',
        diamonds: '💎 စိန်များ',
        doubleTitle: '⭐ နှစ်ဆဖြည့်မှု',
        doubleBoxTitle: 'နှစ်ဆစိန်များ',
        doubleBoxSub: 'နှစ်ဆစိန်အထုပ်များကိုကြည့်ရန် နှိပ်ပါ',
        buy: 'ဝယ်ရန်',
        select: 'ရွေးရန်',
        selected: 'ရွေးပြီး',
        selectFirst: '⚠️ ကျေးဇူးပြု၍ အထုပ်တစ်ခုကို ဦးစွာရွေးပါ!',
        // Payment
        paymentTitle: 'ငွေပေးချေအကောင့်များ',
        paymentSub: 'အောက်ပါအကောင့်များထဲမှ တစ်ခုသို့ ငွေလွှဲပါ',
        wave: 'Wave Pay',
        waveDetail: 'မိုဘိုင်းငွေကြေး',
        kpay: 'KBZ Pay',
        kpayDetail: 'KBZ ဘဏ်',
        copy: 'ကူးယူရန်',
        copied: '✅ ကူးယူပြီး!',
        howToLabel: 'ငွေပေးချေနည်း',
        step1: '<strong>Wave Pay</strong> သို့မဟုတ် <strong>KBZ Pay</strong> ကိုရွေးပါ',
        step2: 'အပေါ်က <strong>ဖုန်းနံပါတ်</strong> ကိုကူးယူပါ',
        step3: 'ငွေအတိအကျလွှဲပြီးပြေစာ <strong>Screenshot</strong> ရိုက်ပါ',
        step4: '<strong>ဆိုင်</strong> သို့သွားပြီး အော်ဒါအပြီးသတ်ပါ',
        supportLabel: 'အကူအညီလိုပါသလား?',
        supportTitle: 'Telegram မှ ဆက်သွယ်ပါ',
        supportDesc: '@Energypremiumhub • အကူအညီယူရန်',
        // Profile
        profileTitle: 'ပရိုဖိုင်',
        online: 'အွန်လိုင်း • အဖွဲ့ဝင်ကြီး',
        myDiamonds: 'ကျွန်ုပ်၏စိန်များ',
        orders: 'အော်ဒါများ',
        editProfile: 'ပရိုဖိုင်ပြင်ရန်',
        orderHistory: 'အော်ဒါမှတ်တမ်း',
        notifications: 'အသိပေးချက်များ',
        logoutConfirm: 'ထွက်မှာသေချာလား?',
        settingsLabel: 'ပြင်ဆင်မှုများ',
        accountSettingsText: 'အကောင့်ဆက်တင်',
        themeSettingsText: 'အရောင်ပြောင်းရန်',
        changePasswordText: 'စကားဝှက်ပြောင်းရန်',
        achieveText: 'အောင်မြင်မှုများ',
        aboutLabel: 'အကြောင်း',
        versionText: 'App ဗားရှင်း 1.0.0',
        helpText: 'အကူအညီနှင့် ပံ့ပိုးမှု',
        termsText: 'စည်းကမ်းနှင့် ကိုယ်ရေးအချက်အလက်',
        statusOnline: '🟢 အွန်လိုင်း',
        statusLogin: '🔑 ဝင်ရန်',
        settingsSaved: '✅ ဆက်တင်များသိမ်းဆည်းပြီး!',
        passChanged: '✅ စကားဝှက်ပြောင်းလဲခြင်းအောင်မြင်ပါပြီ!',
        wrongCurrentPass: '❌ လက်ရှိစကားဝှက် မှားနေပါသည်',
        invalidCredentials: '❌ အထောက်အထား မှားနေပါသည်',
        userNotFound: '❌ အသုံးပြုသူ မတွေ့ပါ',
        userExists: '❌ အသုံးပြုသူအမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ် ရှိပြီးသားဖြစ်သည်',
        noSpace: 'အသုံးပြုသူအမည်တွင် နေရာလပ်မထည့်ရပါ',
        resetSuccess: '✅ စကားဝှက်ပြန်လည်သတ်မှတ်ခြင်းအောင်မြင်ပါပြီ!',
        usernameChanged: '✅ အသုံးပြုသူအမည် ပြောင်းလဲခြင်းအောင်မြင်ပါပြီ!',
        usernameExists: '❌ အသုံးပြုသူအမည် ရှိပြီးသားဖြစ်သည်',
        usernameRequired: 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည် ထည့်ပါ',
        // Auth
        modalLogin: '⚔️ ဝင်ရန်',
        modalRegister: '🛡️ မှတ်ပုံတင်ရန်',
        modalLoginSub: 'ပြန်လည်ကြိုဆိုပါတယ် စစ်သည်တော်!',
        modalRegisterSub: 'အကောင့်ဖွင့်ပါ ချန်ပီယံ!',
        email: '📧 အီးမေးလ် / အသုံးပြုသူအမည် / ဖုန်းနံပါတ်',
        password: '🔑 စကားဝှက်',
        switchLogin: 'အကောင့်မရှိသေးဘူး? မှတ်ပုံတင်ရန်',
        switchRegister: 'အကောင့်ရှိပြီးသား? ဝင်ရန်',
        loginSuccess: '✅ ကြိုဆိုပါတယ် ချန်ပီယံ!',
        registerSuccess: '✅ အကောင့်ဖွင့်ခြင်းအောင်မြင်ပါပြီ!',
        logoutSuccess: '🚪 ထွက်ခြင်းအောင်မြင်ပါပြီ!',
        enterEmail: 'ကျေးဇူးပြု၍ အီးမေးလ် သို့မဟုတ် အသုံးပြုသူအမည်ထည့်ပါ',
        enterPassword: 'ကျေးဇူးပြု၍ စကားဝှက်ထည့်ပါ',
        enterUsername: 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည်ထည့်ပါ',
        enterValidEmail: 'ကျေးဇူးပြု၍ မှန်ကန်တဲ့ အီးမေးလ်ထည့်ပါ',
        passwordMin: 'စကားဝှက်သည် အနည်းဆုံး ၄ လုံးရှိရမယ်',
        passwordMatch: 'စကားဝှက်များ မတူညီပါ',
        forgotTitle: '🔑 စကားဝှက်မေ့နေပါသလား',
        forgotSub: 'စကားဝှက်ပြန်သတ်မှတ်ရန် သင့်အီးမေးလ်ထည့်ပါ',
        otpSent: '✅ သင့်အီးမေးလ်သို့ OTP ပို့ထားပါသည်!',
        // Notifications
        pageTitle: 'အသိပေးချက်များ',
        pageSub: 'သင့်အော်ဒါများကို စောင့်ကြည့်ပါ',
        markAll: 'အားလုံးဖတ်ပြီးအဖြစ်မှတ်ပါ',
        noNoti: 'အသိပေးချက်မရှိသေးပါ',
        noNotiDesc: 'သင့်အသိပေးချက်များ ဤနေရာတွင်ပေါ်လာပါမည်',
        notiWelcome: '👋 Premium Game Shop မှ ကြိုဆိုပါတယ်!',
        notiWelcomeDesc: 'စျေးဝယ်ပြီး အကောင်းဆုံးဈေးနှုန်းများရယူပါ။',
        markedAll: '✅ အားလုံးဖတ်ပြီးအဖြစ်မှတ်ပြီး',
        // Checkout
        checkout: 'စစ်ဆေးရန်',
        checkoutSub: 'သင့်အော်ဒါကိုအပြီးသတ်ပါ',
        selected: 'ရွေးထားသောအထုပ်',
        gameId: '🎮 ဂိမ်း ID',
        serverId: '🌐 ဆာဗာ ID',
        paymentMethod: '💳 ငွေပေးချေနည်း',
        uploadSlip: '📤 ငွေလွှဲပြေစာတင်ရန်',
        uploadText: 'စခရင်ရိုက်ပုံတင်ရန်နှိပ်ပါ',
        submit: 'အော်ဒါတင်ရန်',
        orderSuccess: '✅ အော်ဒါတင်ခြင်းအောင်မြင်ပါပြီ!',
        orderDesc: 'သင့်အော်ဒါကို ပို့ထားပါသည်။ ကျွန်ုပ်တို့ အမြန်ဆုံးဆောင်ရွက်ပေးပါမည်။',
        homeBtn: '🏠 ပင်မစာမျက်နှာသို့',
        enterGameId: 'ကျေးဇူးပြု၍ သင့်ဂိမ်း ID ထည့်ပါ',
        enterServerId: 'ကျေးဇူးပြု၍ သင့်ဆာဗာ ID ထည့်ပါ',
        selectPayment: 'ကျေးဇူးပြု၍ ငွေပေးချေနည်းကိုရွေးပါ',
        uploadSlipError: 'ကျေးဇူးပြု၍ သင့်ငွေလွှဲပြေစာကိုတင်ပါ',
        sending: '⏳ အော်ဒါပို့နေပါသည်...',
        sendError: '❌ အော်ဒါပို့ရန်မအောင်မြင်ပါ။ ကျေးဇူးပြု၍ ပြန်စမ်းပါ။',
        notiNewOrder: '🛒 အော်ဒါအသစ်!',
        noOrders: 'အော်ဒါမရှိသေးပါ',
        orderStatusPending: 'ဆောင်ရွက်ဆဲ',
        orderStatusCompleted: 'ပြီးဆုံး',
        orderStatusCancelled: 'ပယ်ဖျက်',
        showMore: 'အားလုံးကြည့်ရန် →'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function getText(key) {
    return LANG_DATA[currentLang][key] || key;
}

function setLang(lang) {
    if (LANG_DATA[lang]) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === lang);
        });
        
        // Update UI if function exists
        if (typeof updateLanguage === 'function') {
            updateLanguage();
        }
        
        // Dispatch event for other pages
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    }
}

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === currentLang);
    });
    
    // Update UI if function exists
    if (typeof updateLanguage === 'function') {
        updateLanguage();
    }
});

// Listen for language changes across pages
window.addEventListener('storage', function(e) {
    if (e.key === 'lang' && e.newValue) {
        currentLang = e.newValue;
        if (typeof updateLanguage === 'function') {
            updateLanguage();
        }
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LANG_DATA,
        currentLang,
        getText,
        setLang
    };
}
