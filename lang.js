/* زر تبديل اللغة عربي <-> English لكل الموقع.
   لإضافة ترجمة: أضف سطر "النص العربي": "English", داخل القاموس. */
(function () {
  var EN = {
    "حطين":"Hteen","مخبز حطين | Hteen Bakery":"Hteen Bakery","مخبز حطين - Hteen Bakery":"Hteen Bakery","مخبز حطين":"Hteen Bakery","شعار":"Logo",
    "الرئيسية":"Home","المتجر":"Shop","العروض":"Offers","من نحن":"About us","تواصل معنا":"Contact us","السلة":"Cart","تسجيل الدخول":"Sign in",
    "جميع الحقوق محفوظة":"All rights reserved",
    "خبز طازج":"Fresh bread","من قلب حطين":"from the heart of Hteen",
    "نخبز كل صباح بالقمح الأصيل وبنفس طعم زمان. اطلب الآن واختر من مخبوزاتنا المتنوعة.":"We bake every morning with authentic wheat and the taste of old. Order now and choose from our baked goods.",
    "تسوّق الآن":"Shop now","شاهد العروض":"See offers",
    "عجين يومي":"Daily dough","نحضّر العجين كل يوم ونخبزه على دفعات ليصلك ساخنًا.":"We prepare dough every day and bake in batches so it reaches you hot.",
    "مكونات طبيعية":"Natural ingredients","طحين مختار وزبدة وزيت زيتون بدون مواد حافظة.":"Selected flour, butter and olive oil, no preservatives.",
    "طلب بسهولة":"Easy ordering","أضف ما تريد إلى السلة وراجع الطلب قبل الإرسال.":"Add what you like to the cart and review your order before sending.",
    "الأسعار بالحبة بالدينار الأردني (نسخة أولية).":"Prices are per piece in Jordanian dinar (draft version).",
    "الكل":"All","خبز":"Bread","معجنات":"Pastries","حلويات":"Sweets","عرض":"Offer","أضف إلى السلة":"Add to cart","للحبة":"each","د.أ":"JOD",
    "خبز عربي":"Arabic bread","رغيف طازج ناعم":"Soft fresh loaf","خبز صاج":"Saj bread","رقيق على الصاج":"Thin, baked on the saj",
    "خبز توست":"Toast bread","كيس توست أبيض":"Bag of white toast","باغيت":"Baguette","مقرمش من الخارج":"Crispy outside",
    "كرواسون زبدة":"Butter croissant","بالزبدة الطبيعية":"Made with natural butter","مناقيش زعتر":"Zaatar manakish","زعتر وزيت زيتون":"Thyme and olive oil",
    "فطيرة جبنة":"Cheese pie","جبنة بيضاء":"White cheese","سمبوسك لحمة":"Meat sambousek","محشي لحم مفروم":"Filled with minced meat",
    "كعك بالسمسم":"Sesame ka'ak","مع السمسم المحمّص":"With toasted sesame","كيك شوكولاتة":"Chocolate cake","شريحة كيك غنية":"A rich slice of cake",
    "كوكيز":"Cookies","برقائق الشوكولاتة":"With chocolate chips","دونات":"Donuts","مغطاة بالسكر":"Sugar-glazed",
    "تمت الإضافة إلى السلة:":"Added to cart:",
    "سلة المشتريات":"Shopping cart","راجع منتجاتك قبل إتمام الطلب.":"Review your items before checkout.",
    "السلة فارغة. اختر منتجاتك من المتجر لتظهر هنا.":"Your cart is empty. Pick items from the shop and they will show here.","اذهب إلى المتجر":"Go to shop",
    "إنقاص":"Decrease","زيادة":"Increase","حذف":"Remove",
    "بيانات التوصيل والدفع":"Delivery and payment details","الاسم الكامل":"Full name","رقم الهاتف":"Phone number","عنوان التوصيل":"Delivery address",
    "طريقة الدفع":"Payment method","الدفع عند الاستلام":"Cash on delivery","ادفع نقدًا عندما يصلك الطلب":"Pay in cash when your order arrives",
    "بطاقة بنكية (فيزا / ماستركارد)":"Bank card (Visa / Mastercard)","دفع إلكتروني فوري":"Instant online payment",
    "حوالة كليك (CliQ) / محفظة إلكترونية":"CliQ transfer / e-wallet","حوّل المبلغ وأرسل لنا إشعار الحوالة":"Transfer the amount and send us the receipt",
    "اسم حامل البطاقة":"Cardholder name","رقم البطاقة":"Card number","تاريخ الانتهاء":"Expiry date","رمز الأمان":"Security code",
    "هذه نسخة تجريبية: لا يتم سحب أي مبلغ ولا حفظ بيانات البطاقة. للدفع الفعلي يجب ربط الموقع ببوابة دفع.":"This is a demo: no money is charged and no card data is saved. Real payments need a payment gateway.",
    "حوّل المبلغ الإجمالي إلى الاسم المستعار:":"Transfer the total to the alias:",
    "(عدّله ببياناتك الحقيقية)، ثم أرسل صورة الحوالة إلى رقم المخبز ليتم تأكيد طلبك.":"(edit with your real details), then send the transfer screenshot to the bakery number to confirm your order.",
    "المجموع:":"Total:","تأكيد الطلب":"Confirm order","تم تجهيز طلبك":"Your order is ready","رقم الطلب:":"Order no.:",
    "ستدفع نقدًا عند الاستلام.":"You will pay in cash on delivery.","الدفع بالبطاقة تجريبي حاليًا ولم يتم سحب أي مبلغ.":"Card payment is a demo for now; nothing was charged.",
    "حوّل المبلغ عبر كليك وأرسل صورة الحوالة.":"Transfer via CliQ and send the receipt.","جاري إرسال طلبك إلينا...":"Sending your order to us...",
    "متابعة التسوق":"Continue shopping","وصلنا طلبك وسنتواصل معك قريبًا.":"We got your order and will contact you soon.",
    "اضغط \"إرسال\" في نافذة واتساب التي فُتحت ليصلنا طلبك.":"Press \"Send\" in the WhatsApp window that opened so we receive your order.",
    "تعذّر إرسال الطلب.":"Couldn't send the order.","اتصل بنا على":"Call us on",
    "عروض هذا الأسبوع":"This week's offers","أسعار مخفّضة على أصناف مختارة لفترة محدودة.":"Reduced prices on selected items for a limited time.",
    "خصم 20%":"20% off","مخبوزات الصباح":"Morning bakes","على الكرواسون والمناقيش حتى الساعة 10 صباحًا.":"On croissants and manakish until 10 AM.",
    "5 + 1 مجانًا":"Buy 5 get 1 free","الخبز العربي":"Arabic bread","اشترِ 5 أكياس واحصل على كيس إضافي هدية.":"Buy 5 bags and get an extra bag as a gift.",
    "خصم 15%":"15% off","الحلويات":"Sweets","على كل طلب حلويات تتجاوز قيمته 5 دنانير.":"On every sweets order over 5 dinars.",
    "أسعار العروض تظهر تلقائيًا على المنتجات في المتجر.":"Offer prices show automatically on products in the shop.","تسوّق العروض":"Shop offers",
    "مخبز حطين، الخبز كما يجب أن يكون.":"Hteen Bakery, bread the way it should be.",
    "بدأ مخبز حطين بفكرة بسيطة: أن يصل الخبز الطازج والمخبوزات الأصيلة إلى مائدة كل بيت. شعارنا يجمع سنبلة القمح مع اسم حطين بالخط العربي، وهو يعبّر عن أصل الخبز وجذور المكان.":"Hteen Bakery started with a simple idea: fresh bread and authentic baked goods on every family's table. Our logo joins a wheat ear with the name Hteen in Arabic calligraphy, expressing the origin of bread and the roots of the place.",
    "نعتمد على مكونات طبيعية ونخبز على مدار اليوم، ونهتم بأن يكون كل رغيف وكل حبة معجنات بالجودة نفسها التي نقدّمها لأهلنا.":"We rely on natural ingredients and bake throughout the day, so every loaf and every pastry has the same quality we serve our own families.",
    "أصناف يومية":"daily items","كل صباح":"every morning","طازج":"Fresh","بيت":"Home","بطعم البيت":"with a homemade taste",
    "اكتب لنا رسالتك وسنرد عليك بأقرب وقت.":"Write us a message and we'll reply as soon as possible.","الاسم":"Name","الرسالة":"Message",
    "إرسال عبر واتساب":"Send via WhatsApp","العنوان:":"Address:","(أضف عنوان المخبز هنا)":"(add the bakery address here)","اتصل بنا:":"Call us:",
    "واتساب:":"WhatsApp:","راسلنا على واتساب":"Message us on WhatsApp","البريد:":"Email:","ساعات العمل:":"Opening hours:",
    "يوميًا من 6 صباحًا حتى 11 مساءً":"Daily from 6 AM to 11 PM","جاري الإرسال...":"Sending...",
    "وصلتنا رسالتك، سنتواصل معك قريبًا":"We got your message and will contact you soon","اضغط إرسال في واتساب ليصلنا":"Press send in WhatsApp so we receive it",
    "تعذّر الإرسال، اتصل بنا على":"Couldn't send, call us on",
    "أهلاً بك في مخبز حطين":"Welcome to Hteen Bakery","سجّل دخولك لتتابع طلباتك وتطلب خبزك الطازج أسرع.":"Sign in to follow your orders and get fresh bread faster.",
    "المتابعة مع جوجل":"Continue with Google","المتابعة مع ابل":"Continue with Apple","أو بالإيميل":"or with email",
    "دخول":"Sign in","حساب جديد":"New account","إنشاء الحساب":"Create account","الإيميل":"Email","كلمة السر":"Password",
    "تسجيل الخروج":"Sign out","مرحباً":"Welcome","10 أحرف على الأقل":"at least 10 characters",
    "عبّي الإيميل وكلمة السر.":"Enter your email and password.","كلمة السر لازم تكون 10 أحرف على الأقل.":"Password must be at least 10 characters.",
    "الإيميل غير صحيح.":"Invalid email.","الإيميل أو كلمة السر غير صحيحة.":"Incorrect email or password.",
    "ما قدرنا ننشئ الحساب بهالبيانات.":"We couldn't create an account with these details.","جلسة غير صالحة، حدّث الصفحة.":"Invalid session, refresh the page.",
    "تعذّر التحقق من حساب جوجل.":"Couldn't verify the Google account.","تعذّر التحقق من حساب ابل.":"Couldn't verify the Apple account.",
    "تسجيل جوجل غير مفعّل.":"Google sign-in is not enabled.","تسجيل ابل غير مفعّل.":"Apple sign-in is not enabled.",
    "ما وصلنا إيميل من الحساب.":"No email was returned by the account.","صار خطأ، جرّب مرة ثانية.":"Something went wrong, try again.",
    "تعذّر الاتصال بالسيرفر. تأكد إن ملفات PHP مرفوعة على استضافة تشغّل PHP وإن رابط API صحيح.":"Couldn't reach the server. Make sure the PHP files are on a PHP host and the API URL is correct.",
    "لسا ما ضبطت GOOGLE_CLIENT_ID داخل login.html.":"GOOGLE_CLIENT_ID is not set in login.html yet.","لسا ما ضبطت APPLE_CLIENT_ID داخل login.html.":"APPLE_CLIENT_ID is not set in login.html yet.",
    "تعذّر الدخول عن طريق ابل.":"Apple sign-in failed.","تعذّر تحميل زر جوجل. تأكد من الإنترنت وأن الموقع مسجّل بـ Authorized origins.":"Couldn't load the Google button. Check your connection and that the site is in Authorized origins.",
    "محاولات كثيرة. جرّب بعد 15 دقيقة.":"Too many attempts. Try again in 15 minutes."
  };
  var RULES = Object.keys(EN).sort(function (a, b) { return b.length - a.length; }).map(function (k) {
    var esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return { re: new RegExp("(^|[^\\u0600-\\u06FF])" + esc + "(?![\\u0600-\\u06FF])", "g"), v: EN[k] };
  });
  function tr(s) {
    if (!/[\u0600-\u06FF]/.test(s)) return s;
    RULES.forEach(function (r) { s = s.replace(r.re, function (m, p) { return p + r.v; }); });
    return s;
  }
  var lang = "ar";
  try { lang = localStorage.getItem("hteen_lang") === "en" ? "en" : "ar"; } catch (e) {}
  var ATTRS = ["placeholder", "title", "alt", "aria-label"], obs;
  function node(n) {
    if (n.nodeType === 3) {
      if (n.__ar === undefined || (n.nodeValue !== n.__en && n.nodeValue !== n.__ar)) { n.__ar = n.nodeValue; n.__en = tr(n.nodeValue); }
      var v = lang === "en" ? n.__en : n.__ar;
      if (n.nodeValue !== v) n.nodeValue = v;
    } else if (n.nodeType === 1 && !/^(SCRIPT|STYLE)$/.test(n.tagName)) {
      ATTRS.forEach(function (a) {
        if (!n.hasAttribute(a)) return;
        n.__a = n.__a || {};
        var cur = n.getAttribute(a);
        if (!n.__a[a] || (cur !== n.__a[a].en && cur !== n.__a[a].ar)) n.__a[a] = { ar: cur, en: tr(cur) };
        var v = lang === "en" ? n.__a[a].en : n.__a[a].ar;
        if (cur !== v) n.setAttribute(a, v);
      });
      for (var c = n.firstChild; c; c = c.nextSibling) node(c);
    }
  }
  function watch() { obs.observe(document.body, { childList: true, subtree: true, characterData: true }); }
  function apply() {
    obs.disconnect();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    if (!document.__t) document.__t = { ar: document.title, en: tr(document.title) };
    document.title = lang === "en" ? document.__t.en : document.__t.ar;
    node(document.body);
    var b = document.getElementById("langBtn");
    if (b) b.textContent = lang === "en" ? "عربي" : "EN";
    watch();
  }
  function init() {
    var b = document.createElement("button");
    b.id = "langBtn"; b.type = "button"; b.className = "lang-btn"; b.setAttribute("aria-label", "Language / اللغة");
    b.onclick = function () { lang = lang === "en" ? "ar" : "en"; try { localStorage.setItem("hteen_lang", lang); } catch (e) {} apply(); };
    var nav = document.getElementById("nav");
    if (nav) nav.appendChild(b); else { b.style.cssText = "position:fixed;top:10px;left:10px;z-index:99"; document.body.appendChild(b); }
    obs = new MutationObserver(function (m) {
      obs.disconnect();
      m.forEach(function (r) { r.type === "characterData" ? node(r.target) : r.addedNodes.forEach(node); });
      watch();
    });
    apply();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
