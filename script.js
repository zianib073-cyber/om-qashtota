// تاريخ مؤقت للعدّاد إلى أن يُحدَّد يوم الافتتاح الحقيقي.
const LAUNCH_AT = new Date("2026-11-15T10:00:00+01:00");
const DISCOUNT_CODE = "QASHTOTA20";
const USERS_KEY = "omQashtotaUsers";
const SESSION_KEY = "omQashtotaSession";
const GOOGLE_CLIENT_ID = window.OM_QASHTOTA_GOOGLE_CLIENT_ID || "";

// صورة الطبق: حط item.image ملي توصل صورة الحلوى، وإلا كيبان تصوير القسم.
const CATEGORIES = [
    {
        id: "koshari",
        title: "قسم الكشري الحلو",
        en: "Koshari Sweet — Round Bowls",
        image: "images/koshari.jpg",
        coming: "📍 قريباً بفرع الدروة - خصم 20%",
        blurb: "تجربة الكشري الحلو الفاخرة، طبقات من الإبداع واللذة",
        blurbFr: "Expérience Koshari Sweet Premium",
        items: [
            { id: "k-mix", image: "images/plates/k-mix.jpg", name: "كشري مكس", en: "Koshari Mix", desc: "طبقات كشري حلو متداخلة: قشطة، مكسرات وصلصات، في علبة دائرية بالشعار." },
            { id: "k-pistachio", image: "images/plates/k-pistachio.jpg", name: "كشري فستق كريمي", en: "Koshari Pistachio Cream", desc: "شعيرية مقرمشة مع كريمة فستق كثيفة تغمر الطبقات." },
            { id: "k-mango", image: "images/plates/k-mango.jpg", name: "كشري مانجو", en: "Koshari Mango", desc: "مكعبات مانجو طازجة فوق طبقات الكشري الحلو والكريمة." },
            { id: "k-oreo", image: "images/plates/k-oreo.jpg", name: "كشري أوريو بالشوكولاتة", en: "Koshari Oreo & Chocolate", desc: "فتات أوريو وكريمة حليب، مع شوكولاتة بلجيكية تسيل على طبقات الكشري." },
            { id: "k-fraise", image: "images/plates/k-fraise.jpg", name: "كشري فراولة وشوكولاتة", en: "Koshari Fraise & Chocolat", desc: "فراولة طرية وشوكولاتة بلجيكية تسيل على طبقات الكشري." }
        ]
    },
    {
        id: "icecream",
        title: "قسم المثلجات والگلاص الفاخر",
        en: "Premium Ice Cream — Round Tubs",
        image: "images/icecream.jpg",
        coming: "📍 قريباً بفرع الدروة - خصم 20%",
        blurb: "آيس كريم فاخر بطعم مميز وبقوام كريمي غني",
        blurbFr: "Ice Cream Premium",
        blurbLang: "en",
        items: [
            { id: "i-pistachio", image: "images/plates/i-pistachio.jpg", name: "گلاص فستق بصوص غني", en: "Pistachio Ice Cream", desc: "سكوب فستق كثيف وصوص فستق غني، داخل العلبة الدائرية بالشعار." },
            { id: "i-lotus", image: "images/plates/i-lotus.jpg", name: "گلاص لوتس", en: "Lotus Ice Cream", desc: "گلاص لوتس كريمي مع فتات البسكويت وصوص الكراميل في العلبة الدائرية." },
            { id: "i-mango", image: "images/plates/i-mango.jpg", name: "گلاص مانجو مع صوص غني", en: "Mango Ice Cream", desc: "سكوبات مانجو مدوّرة، صوص مانجو ذهبي يسيل عليها، ومكعبات مانجو طازجة. في العلبة الدائرية." },
            { id: "i-cheesecake", image: "images/plates/i-cheesecake.jpg", name: "گلاص تشيزكيك", en: "Cheesecake Ice Cream", desc: "قوام تشيزكيك كريمي بارد، مقدّم في نفس العلبة الدائرية." },
            { id: "i-caramel", image: "images/plates/i-caramel.jpg", name: "گلاص حليب وكراميل", en: "Milk & Caramel Ice Cream", desc: "گلاص حليب ناعم وكراميل دافئ يسيل فوقه، في العلبة الدائرية." }
        ]
    },
    {
        id: "qashtota",
        title: "قسم القشطوطة",
        en: "Qashtouta Showcase",
        image: "images/qashtota.jpg",
        coming: "📍 قريباً بفرع الدروة - خصم 20%",
        blurb: "كيك طري متشرب لبن 24 ساعة بكريمة بلجيكي فاخرة وإضافات على مزاجك",
        blurbFr: "Gâteau moelleux imbibé de lait 24h, nappé de crème belge premium et de vos toppings préférés",
        items: [
            { id: "q-family", image: "images/plates/q-family.jpg", name: "قشطوطة عائلية", en: "Qashtouta Family — 4 × Qashtouta", desc: "صينية عائلية فيها أربع قشطوطات. الكيك متشرب بالحليب 24 ساعة، والكريمة بلجيكية، والإضافات على كيفكم." },
            { id: "q-mangue-brulee", image: "images/plates/q-mangue-brulee.jpg", name: "قشطوطة بروليه مانجو", en: "Qashtouta Mangue Brulée", desc: "مكعبات مانجو ناضجة فوق الكريمة، وسطح سكر محروق على طريقة البروليه يتكسر تحت الملعقة." },
            { id: "q-malaki", image: "images/plates/q-malaki.jpg", name: "قشطوطة ملكي", en: "Qashtouta Malaki", desc: "التشكيلة الملكية: كريمة بلجيكية كثيفة وإضافات مختارة فوق الكيك الذهبي المتشرب بالحليب." },
            { id: "q-super", image: "images/plates/q-super.jpg", name: "قشطوطة سوبر ملكي", en: "Qashtouta Super Malaki", desc: "حجم أكبر وطبقات أغنى من الملكي: كيك طري، كريمة بلجيكية، وتقديم يملأ الطبق." },
            { id: "q-super-brulee", image: "images/plates/q-super-brulee.jpg", name: "قشطوطة سوبر ملكي بروليه", en: "Qashtouta Super Malaki Brulée", desc: "السوبر ملكي بسطح كراميل محروق، قشرة رقيقة فوق كريمة بلجيكية كثيفة." },
            { id: "q-mangue", image: "images/plates/q-mangue.jpg", name: "قشطوطة مانجا", en: "Qashtouta Mangue", desc: "مانجو طازجة مقطعة فوق كريمة بلجيكية وكيك متشرب بالحليب طول الليل." },
            { id: "q-oreo", image: "images/plates/q-oreo.jpg", name: "قشطوطة أوريو", en: "Qashtouta Oreo", desc: "قطع أوريو مقرمشة وكريمة بسكويت داكنة فوق القشطوطة." },
            { id: "q-four", image: "images/plates/q-four.jpg", name: "قشطوطة فور سيزون", en: "Qashtouta Four Season", desc: "أربع نكهات في طبق واحد: كل ربع بإضافته، من الفستق إلى الشوكولاتة والفاكهة." },
            { id: "q-pistachio", image: "images/plates/q-pistachio.jpg", name: "قشطوطة بيستاشيو", en: "Qashtouta Pistachio", desc: "فستق مجروش وصوص فستق أخضر يغمر الكريمة البلجيكية." },
            { id: "q-lotus", image: "images/plates/q-lotus.jpg", name: "قشطوطة لوتس", en: "Qashtouta Lotus", desc: "فتات بسكويت اللوتس وصوص الكراميل فوق كيك طري وكريمة كثيفة." },
            { id: "q-nuts", image: "images/plates/q-nuts.jpg", name: "قشطوطة مكسرات", en: "Qashtouta Mokassarat", desc: "مكسرات محمصة: فستق، لوز وجوز، فوق الكريمة البلجيكية." },
            { id: "q-kinder", image: "images/plates/q-kinder.jpg", name: "قشطوطة كيندر", en: "Qashtouta Kinder", desc: "كريمة شوكولاتة كيندر ناعمة تسيل على الكيك المتشرب بالحليب." },
            { id: "q-banana", image: "images/plates/q-banana.jpg", name: "قشطوطة موز وكراميل", en: "Qashtouta Banane & Caramel", desc: "شرائح موز طري وكراميل دافئ يسيل على الكريمة البلجيكية." },
            { id: "q-fraise", image: "images/plates/q-fraise.jpg", name: "قشطوطة فراولة وشوكولاتة", en: "Qashtouta Chocolat & Fraise", desc: "فراولة طرية وشوكولاتة بلجيكية داكنة فوق الكيك والكريمة." },
            { id: "q-choco", image: "images/plates/q-choco.jpg", name: "قشطوطة شوكولاتة", en: "Qashtouta Chocolate", desc: "شوكولاتة بلجيكية كثيفة تسيل على جوانب الكيك الذهبي." },
            { id: "q-sada", image: "images/plates/q-sada.jpg", name: "قشطوطة سادة", en: "Qashtouta Sada", desc: "الأصل بلا زيادة: كيك متشرب بالحليب 24 ساعة وكريمة بلجيكية صافية." }
        ]
    },
    {
        id: "conut",
        title: "قسم الكونوت العصري",
        en: "Conut Line",
        coming: "📍 قريباً بفرع الدروة - خصم 20%",
        image: "images/conut.jpg",
        items: [
            { id: "c-one", name: "ذا ون", en: "The One — Caramel & Strawberry", desc: "كونوت بالكراميل والفراولة — التوقيع العصري." },
            { id: "c-pistachio", name: "كونوت بكريمة الفستق", en: "Pistachio Cream Conut", desc: "طبقات هشة محشوة بكريمة الفستق." },
            { id: "c-triple", name: "شوكولاتة ثلاثية وبراونيز", en: "Triple Chocolate & Brownies Conut", desc: "شوكولاتة ثلاثية مع قطع براونيز." },
            { id: "c-lemon", name: "تشيزكيك ليمون بوسطن", en: "Lemon Boston Cheesecake Conut", desc: "كونوت بنكهة تشيزكيك الليمون البوسطن." }
        ]
    },
    {
        id: "cake",
        title: "قسم سان سيباستيان والكيك",
        en: "San Sebastian & Cakes",
        coming: "📍 قريباً بفرع الدروة - خصم 20%",
        image: "images/cake.jpg",
        items: [
            { id: "ck-kunafa", name: "كيك كنافة بصوص الفستق", en: "Kunafa Pistachio Cake", desc: "كيك كنافة مع صوص فستق يغمر كل قطعة." },
            { id: "ck-seb-choco", name: "تري سيباستيان شوكولاتة", en: "San Sebastian Chocolate", desc: "سان سيباستيان محروق السطح بنكهة الشوكولاتة." },
            { id: "ck-seb-pist", name: "تري سيباستيان فستق", en: "San Sebastian Pistachio", desc: "سان سيباستيان كريمي بقلب فستق." },
            { id: "ck-seb-lotus", name: "تري سيباستيان لوتس", en: "San Sebastian Lotus", desc: "سان سيباستيان بصوص اللوتس الكراميل." }
        ]
    }
];

const cart = new Map();

function pad(n) {
    return String(n).padStart(2, "0");
}

function tickCountdown() {
    const now = Date.now();
    let diff = Math.max(0, LAUNCH_AT.getTime() - now);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000);
    diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);
    document.getElementById("cdDays").textContent = pad(days);
    document.getElementById("cdHours").textContent = pad(hours);
    document.getElementById("cdMins").textContent = pad(mins);
    document.getElementById("cdSecs").textContent = pad(secs);
}

function plateSrc(cat, item) {
    const src = (item.image || cat.image).replace(/\.jpe?g$/i, ".webp");
    return item.image ? src + "?v=fast" : src;
}

function findItem(id) {
    for (const cat of CATEGORIES) {
        const item = cat.items.find((it) => it.id === id);
        if (item) return { ...item, image: plateSrc(cat, item) };
    }
    return null;
}

function normalizePhone(value) {
    let digits = String(value).replace(/[\s.-]/g, "");
    if (digits.startsWith("+212")) digits = "0" + digits.slice(4);
    else if (digits.startsWith("00212")) digits = "0" + digits.slice(5);
    else if (digits.startsWith("212")) digits = "0" + digits.slice(3);
    return digits;
}

function isMoroccanPhone(value) {
    return /^0[5-7]\d{8}$/.test(normalizePhone(value));
}

function renderMenu() {
    const root = document.getElementById("menuGrid");
    root.innerHTML = CATEGORIES.map((cat) => `
        <section class="cat-block" id="${cat.id}">
            <div class="cat-head">
                <h3>${cat.title}</h3>
                <span>${cat.en}</span>
                ${cat.coming ? `<p class="cat-soon">${cat.coming}</p>` : ""}
                ${cat.blurb ? `<p class="cat-blurb">${cat.blurb}<span lang="${cat.blurbLang || "fr"}">${cat.blurbFr}</span></p>` : ""}
            </div>
            <div class="grid${cat.id === "qashtota" ? " grid-pack" : ""}">
                ${cat.items.map((item) => {
                    const qty = cart.get(item.id)?.qty || 0;
                    const shape = cat.id === "qashtota" ? " card-pack" : (cat.id === "koshari" || cat.id === "icecream") ? " card-bowl" : "";
                    return `
                    <article class="card${shape}">
                        <div class="plate">
                            <img src="${plateSrc(cat, item)}" alt="${item.name} — ${item.en}" width="${cat.id === "qashtota" ? "800" : "600"}" height="${cat.id === "qashtota" ? "600" : "600"}" loading="lazy" decoding="async">
                            <span class="mark">قريباً</span>
                        </div>
                        <h4>${item.name}</h4>
                        <p class="en" lang="en">${item.en}</p>
                        <p class="desc">${item.desc}</p>
                        <p class="offer-chip">قريباً · خصم 20%<span lang="en" dir="ltr">20% OFF</span></p>
                        <button class="btn btn-reserve" type="button" data-add="${item.id}">${qty ? `في الحجز ×${qty}` : "قريباً — احجز خصم 20%<small lang=\"en\">Coming soon · 20% OFF</small>"}</button>
                    </article>
                `;
                }).join("")}
            </div>
        </section>
    `).join("");
}

function cartList() {
    return [...cart.values()];
}

function renderCart() {
    const count = cartList().reduce((sum, line) => sum + line.qty, 0);
    document.getElementById("cartCount").textContent = count;
    const box = document.getElementById("cartItems");
    if (!cart.size) {
        box.innerHTML = "<p>السلّة فارغة.</p>";
    } else {
        box.innerHTML = cartList().map((line) => `
            <div class="cart-line">
                <div>
                    <strong>${line.name}</strong>
                    <div class="qty">
                        <button type="button" data-dec="${line.id}" aria-label="إنقاص ${line.name}">−</button>
                        <span>${line.qty}</span>
                        <button type="button" data-inc="${line.id}" aria-label="زيادة ${line.name}">+</button>
                    </div>
                </div>
                <button class="link-btn" type="button" data-remove="${line.id}">حذف</button>
            </div>
        `).join("");
    }
    const summary = document.getElementById("pickedSummary");
    summary.classList.remove("is-warn");
    summary.textContent = cart.size
        ? "اختيارك: " + cartList().map((line) => `${line.name} ×${line.qty}`).join(" · ")
        : "السلّة فارغة — زد حلويات من المنيو.";
}

function addItem(id) {
    const item = findItem(id);
    if (!item) return;
    const current = cart.get(id);
    cart.set(id, { ...item, qty: current ? current.qty + 1 : 1 });
    renderCart();
    renderMenu();
    hideFormError();
}

function changeQty(id, delta) {
    const current = cart.get(id);
    if (!current) return;
    const qty = current.qty + delta;
    if (qty < 1) cart.delete(id);
    else cart.set(id, { ...current, qty });
    renderCart();
    renderMenu();
}

function removeItem(id) {
    cart.delete(id);
    renderCart();
    renderMenu();
}

function readUsers() {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    } catch (error) {
        return [];
    }
}

function writeUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function currentUser() {
    try {
        const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
        if (!session?.userId) return null;
        return readUsers().find((user) => user.id === session.userId) || null;
    } catch (error) {
        return null;
    }
}

function setSession(userId) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ userId }));
}

function ensureDiscount(user) {
    user.codes = [...new Set([...(user.codes || []), DISCOUNT_CODE])];
    return user;
}

function saveUser(user) {
    const users = readUsers();
    const index = users.findIndex((item) => item.id === user.id);
    if (index >= 0) users[index] = user;
    else users.push(user);
    writeUsers(users);
    return user;
}

function initials(name) {
    const parts = String(name || "أ").trim().split(/\s+/).slice(0, 2);
    return parts.map((part) => part.charAt(0)).join("") || "أ";
}

function fillLeadFromUser(user) {
    if (!user) return;
    const form = document.getElementById("leadForm");
    if (form.name && !form.name.value) form.name.value = user.name || "";
    if (form.phone && !form.phone.value && user.phone) form.phone.value = user.phone;
}

async function hashPass(password) {
    const data = new TextEncoder().encode("omq-v1:" + password);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function decodeJwt(token) {
    const payload = token.split(".")[1] || "";
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodeURIComponent([...json].map((char) =>
        "%" + char.charCodeAt(0).toString(16).padStart(2, "0")
    ).join("")));
}

function loginIdentity({ name, email, picture, provider, phone }) {
    email = String(email || "").trim().toLowerCase();
    let user = readUsers().find((item) => item.email === email);
    if (!user) {
        user = ensureDiscount({
            id: "u_" + Date.now().toString(36),
            name: name || email.split("@")[0],
            email,
            picture: picture || "",
            provider,
            phone: phone || "",
            reservations: [],
            createdAt: new Date().toISOString()
        });
    } else {
        user = ensureDiscount({
            ...user,
            name: name || user.name,
            picture: picture || user.picture,
            phone: phone || user.phone
        });
    }
    saveUser(user);
    setSession(user.id);
    fillLeadFromUser(user);
    renderAuthChrome();
    openAuth("profile");
    return user;
}

function renderAuthChrome() {
    const user = currentUser();
    const btnLabel = document.getElementById("authBtnLabel");
    const face = document.getElementById("authFace");
    const navAuth = document.getElementById("navAuth");
    if (!user) {
        btnLabel.textContent = "تسجيل الدخول";
        navAuth.textContent = "تسجيل الدخول";
        face.hidden = true;
        face.textContent = "";
        face.replaceChildren();
        return;
    }
    btnLabel.textContent = user.name.split(/\s+/)[0];
    navAuth.textContent = "حسابي";
    face.hidden = false;
    if (user.picture) {
        const img = document.createElement("img");
        img.src = user.picture;
        img.alt = "";
        face.replaceChildren(img);
    } else {
        face.replaceChildren();
        face.textContent = initials(user.name);
    }
}

function renderProfile() {
    const user = currentUser();
    if (!user) return;
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("profileEmail").textContent = user.email;
    document.getElementById("profileCode").textContent = (user.codes && user.codes[0]) || DISCOUNT_CODE;
    const avatar = document.getElementById("profileAvatar");
    if (user.picture) {
        const img = document.createElement("img");
        img.src = user.picture;
        img.alt = "";
        avatar.replaceChildren(img);
    } else {
        avatar.replaceChildren();
        avatar.textContent = initials(user.name);
    }
    const box = document.getElementById("profileReservations");
    const bookings = user.reservations || [];
    box.innerHTML = bookings.length
        ? bookings.map((row) => {
            const items = (row.items || []).map((item) => `${item.name} ×${item.qty}`).join(" · ");
            return `<p>${items || "كود الافتتاح"} — ${DISCOUNT_CODE}</p>`;
        }).join("")
        : "<p>ما كاين حتى حجز تذوق بعد. اختار من المنيو واحفظ الكود.</p>";
}

function openAuth(view) {
    const modal = document.getElementById("authModal");
    const gate = document.getElementById("authGate");
    const profile = document.getElementById("authProfile");
    const logged = Boolean(currentUser());
    const showProfile = view === "profile" || (view !== "login" && view !== "signup" && view !== "google" && logged);
    gate.hidden = showProfile;
    profile.hidden = !showProfile;
    modal.hidden = false;
    if (showProfile) renderProfile();
    else {
        setAuthTab(view === "signup" ? "signup" : view === "google" ? "google" : "login");
        loadGoogleIdentity();
    }
}

function closeAuth() {
    document.getElementById("authModal").hidden = true;
}

function showAuthError(message) {
    const box = document.getElementById("authError");
    box.hidden = false;
    box.textContent = message;
}

function hideAuthError() {
    const box = document.getElementById("authError");
    box.hidden = true;
    box.textContent = "";
}

let authTab = "login";

function setAuthTab(tab) {
    authTab = tab;
    const title = document.getElementById("authTitle");
    const submit = document.getElementById("authSubmit");
    const nameRow = document.getElementById("authNameRow");
    const passRow = document.getElementById("authPassRow");
    const passInput = passRow.querySelector("input");
    document.querySelectorAll("[data-auth-tab]").forEach((button) => {
        if (button.dataset.authTab === tab) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
    });
    hideAuthError();
    if (tab === "signup") {
        title.textContent = "إنشاء حساب";
        submit.textContent = "إنشاء حساب";
        nameRow.hidden = false;
        passRow.hidden = false;
        passInput.required = true;
        passInput.autocomplete = "new-password";
    } else if (tab === "google") {
        title.textContent = "متابعة بحساب Google";
        submit.textContent = "متابعة";
        nameRow.hidden = false;
        passRow.hidden = true;
        passInput.required = false;
        passInput.value = "";
    } else {
        title.textContent = "تسجيل الدخول";
        submit.textContent = "دخول";
        nameRow.hidden = true;
        passRow.hidden = false;
        passInput.required = true;
        passInput.autocomplete = "current-password";
    }
}

function loadGoogleIdentity() {
    if (!GOOGLE_CLIENT_ID) return;
    const mount = () => {
        if (!window.google?.accounts?.id) return;
        window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: (response) => {
                const payload = decodeJwt(response.credential);
                loginIdentity({
                    name: payload.name,
                    email: payload.email,
                    picture: payload.picture,
                    provider: "google"
                });
            },
            ux_mode: "popup",
            auto_select: false
        });
        const gsi = document.getElementById("googleGsi");
        gsi.hidden = false;
        gsi.innerHTML = "";
        window.google.accounts.id.renderButton(gsi, {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "continue_with",
            shape: "pill",
            locale: "ar",
            width: 320
        });
    };
    if (window.google?.accounts?.id) {
        mount();
        return;
    }
    if (document.getElementById("gsiClient")) return;
    const script = document.createElement("script");
    script.id = "gsiClient";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = mount;
    document.head.appendChild(script);
}

function saveLead(lead) {
    const key = "omQashtotaLeads";
    try {
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        prev.push(lead);
        localStorage.setItem(key, JSON.stringify(prev));
    } catch (error) {
        console.warn("lead storage skipped", error);
    }
    const user = currentUser();
    if (!user) return;
    user.phone = user.phone || lead.phone;
    user.name = user.name || lead.name;
    ensureDiscount(user);
    user.reservations = user.reservations || [];
    user.reservations.push({
        items: lead.items || [],
        code: DISCOUNT_CODE,
        at: lead.at
    });
    saveUser(user);
    renderAuthChrome();
}

function showFormError(message) {
    const box = document.getElementById("formError");
    box.hidden = false;
    box.textContent = message;
}

function hideFormError() {
    const box = document.getElementById("formError");
    box.hidden = true;
    box.textContent = "";
}

document.getElementById("menuGrid").addEventListener("click", (event) => {
    const id = event.target.dataset.add;
    if (id) addItem(id);
});

document.getElementById("cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.remove) removeItem(button.dataset.remove);
    if (button.dataset.inc) changeQty(button.dataset.inc, 1);
    if (button.dataset.dec) changeQty(button.dataset.dec, -1);
});

document.getElementById("openCart").addEventListener("click", () => {
    document.getElementById("cartDrawer").hidden = false;
});
document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartDrawer").hidden = true;
});
document.getElementById("cartDrawer").addEventListener("click", (event) => {
    if (event.target.id === "cartDrawer") event.currentTarget.hidden = true;
});
document.getElementById("goReserve").addEventListener("click", () => {
    document.getElementById("cartDrawer").hidden = true;
});

const CONFIRM_COPY = "🎉 تم حجز كود الخصم (QASHTOTA20) بنجاح! يسعدنا استقبالكم قريباً في فرعنا الجديد بمدينة الدروة!";

function openConfirm(items) {
    document.getElementById("confirmText").textContent = CONFIRM_COPY;
    document.getElementById("confirmItems").textContent = items.length
        ? items.map((line) => `${line.name} ×${line.qty}`).join(" · ")
        : "";
    document.getElementById("copyState").textContent = "";
    document.getElementById("confirmModal").hidden = false;
}

document.getElementById("leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = normalizePhone(data.get("phone") || "");
    hideFormError();
    if (name.length < 2) {
        showFormError("كتب الاسم.");
        form.name.focus();
        return;
    }
    if (!isMoroccanPhone(phone)) {
        showFormError("دخل رقم هاتف مغربي صحيح، بحال 06XXXXXXXX.");
        form.phone.focus();
        return;
    }
    if (!cart.size) {
        const summary = document.getElementById("pickedSummary");
        summary.classList.add("is-warn");
        summary.textContent = "زيد حلويات من المنيو قبل تأكيد الحجز.";
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        return;
    }
    const items = cartList().map((line) => ({ id: line.id, name: line.name, qty: line.qty }));
    const user = currentUser();
    saveLead({
        name,
        phone,
        city: "الدروة",
        items,
        code: DISCOUNT_CODE,
        userId: user?.id || "",
        at: new Date().toISOString()
    });
    openConfirm(items);
    form.reset();
    cart.clear();
    renderCart();
    renderMenu();
});

document.getElementById("vipForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = normalizePhone(data.get("phone") || "");
    const error = document.getElementById("vipError");
    error.hidden = true;
    if (name.length < 2) {
        error.hidden = false;
        error.textContent = "كتب الاسم.";
        form.name.focus();
        return;
    }
    if (!isMoroccanPhone(phone)) {
        error.hidden = false;
        error.textContent = "دخل رقم هاتف مغربي صحيح، بحال 06XXXXXXXX.";
        form.phone.focus();
        return;
    }
    const user = currentUser();
    saveLead({
        name,
        phone,
        city: "الدروة",
        source: "vip",
        items: [],
        code: DISCOUNT_CODE,
        userId: user?.id || "",
        at: new Date().toISOString()
    });
    openConfirm([]);
    form.reset();
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("confirmModal").hidden = true;
});
document.getElementById("confirmModal").addEventListener("click", (event) => {
    if (event.target.id === "confirmModal") event.currentTarget.hidden = true;
});
document.getElementById("copyCode").addEventListener("click", async () => {
    const state = document.getElementById("copyState");
    try {
        await navigator.clipboard.writeText(DISCOUNT_CODE);
        state.textContent = "تم نسخ الكود: " + DISCOUNT_CODE;
    } catch (error) {
        state.textContent = "الكود: " + DISCOUNT_CODE;
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.getElementById("cartDrawer").hidden = true;
    document.getElementById("confirmModal").hidden = true;
    document.getElementById("authModal").hidden = true;
});

function openAuthForUser() {
    openAuth(currentUser() ? "profile" : "login");
}

document.getElementById("authBtn").addEventListener("click", openAuthForUser);
document.getElementById("navAuth").addEventListener("click", openAuthForUser);
document.getElementById("closeAuth").addEventListener("click", closeAuth);
document.getElementById("authModal").addEventListener("click", (event) => {
    if (event.target.id === "authModal") closeAuth();
});
document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.addEventListener("click", () => setAuthTab(button.dataset.authTab));
});
document.getElementById("googleSignIn").addEventListener("click", () => {
    if (GOOGLE_CLIENT_ID && window.google?.accounts?.id) {
        window.google.accounts.id.prompt();
        return;
    }
    setAuthTab("google");
    document.querySelector("#authForm [name=email]").focus();
});
document.getElementById("authForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    hideAuthError();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthError("كتب بريد إلكتروني صحيح.");
        form.email.focus();
        return;
    }
    if (authTab === "google") {
        if (name.length < 2) {
            showAuthError("كتب الاسم.");
            form.name.focus();
            return;
        }
        loginIdentity({ name, email, provider: "google" });
        form.reset();
        return;
    }
    if (authTab === "signup") {
        if (name.length < 2) {
            showAuthError("كتب الاسم.");
            form.name.focus();
            return;
        }
        if (password.length < 6) {
            showAuthError("كلمة السر تكون 6 حروف على الأقل.");
            form.password.focus();
            return;
        }
        if (readUsers().some((user) => user.email === email)) {
            showAuthError("هاد البريد مسجّل. جرّب تسجيل الدخول.");
            setAuthTab("login");
            form.email.value = email;
            return;
        }
        const passHash = await hashPass(password);
        loginIdentity({ name, email, provider: "email" });
        const user = currentUser();
        user.passHash = passHash;
        saveUser(user);
        form.reset();
        return;
    }
    const user = readUsers().find((item) => item.email === email);
    if (!user || !user.passHash) {
        showAuthError("ما كاينش حساب بهاد البريد. أنشئ حساب أو دخل بـ Google.");
        return;
    }
    const passHash = await hashPass(password);
    if (passHash !== user.passHash) {
        showAuthError("كلمة السر غلط.");
        form.password.focus();
        return;
    }
    setSession(user.id);
    fillLeadFromUser(user);
    renderAuthChrome();
    openAuth("profile");
    form.reset();
});
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    renderAuthChrome();
    setAuthTab("login");
    openAuth("login");
});
document.getElementById("copyProfileCode").addEventListener("click", async () => {
    const state = document.getElementById("profileCopyState");
    const code = document.getElementById("profileCode").textContent || DISCOUNT_CODE;
    try {
        await navigator.clipboard.writeText(code);
        state.textContent = "تم نسخ الكود: " + code;
    } catch (error) {
        state.textContent = "الكود: " + code;
    }
});

function initHeroSlider() {
    const slides = [...document.querySelectorAll(".hero-slide")];
    const dotsBox = document.getElementById("heroDots");
    const caption = document.getElementById("heroCaption");
    if (!slides.length || !dotsBox || !caption) return;
    let index = 0;
    let timer;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    dotsBox.innerHTML = slides.map((_, n) =>
        `<button type="button" role="tab" aria-label="شريحة ${n + 1}" data-slide="${n}"></button>`
    ).join("");
    const dots = [...dotsBox.querySelectorAll("button")];

    function go(n) {
        index = (n + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
        dots.forEach((dot, i) => {
            if (i === index) dot.setAttribute("aria-current", "true");
            else dot.removeAttribute("aria-current");
        });
        caption.textContent = slides[index].dataset.caption || "";
        const img = slides[index].querySelector("img");
        if (img && !reduce) {
            img.style.animation = "none";
            void img.offsetWidth;
            img.style.animation = "";
        }
    }

    function play() {
        clearInterval(timer);
        if (reduce) return;
        timer = setInterval(() => go(index + 1), 6500);
    }

    document.getElementById("heroPrev").addEventListener("click", () => {
        go(index - 1);
        play();
    });
    document.getElementById("heroNext").addEventListener("click", () => {
        go(index + 1);
        play();
    });
    dotsBox.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-slide]");
        if (!btn) return;
        go(Number(btn.dataset.slide));
        play();
    });
    go(0);
    play();
}

renderMenu();
renderCart();
renderAuthChrome();
initHeroSlider();
tickCountdown();
setInterval(tickCountdown, 1000);
