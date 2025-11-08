# ELECTRIC-XTRA ⚡

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://mostafahatemghonem.github.io/ELECTRIC-XTRA/) [![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE) [![HTML5](https://img.shields.io/badge/HTML5-%3E%3D5-orange)](#) [![No Libs](https://img.shields.io/badge/Vanilla-JS%20%26%20CSS-blueviolet)](#)

[Live Demo](https://mostafahatemghonem.github.io/ELECTRIC-XTRA/)

> **Electric Xtra** is a dynamic and futuristic HTML landing page template designed with a striking **cyberpunk aesthetic**. Perfect for **tech startups**, **gaming sites**, **digital agencies**, or **personal portfolios**, this template immerses visitors in a high-tech world with its **multi-layered animated background**, featuring a **moving grid**, **floating particles**, and **glowing geometric shapes**.

---

## ✨ Key Features

* ⚡ **Animated Cyberpunk Design** — glowing geometric shapes and grid animations.
* 🌀 **Text Rotator Effect** — animated glitch-style rotating headlines in the hero section.
* 🧩 **Pure Frontend Stack** — built with **HTML**, **CSS**, and **Vanilla JavaScript** only.
* 🚀 **Lightweight and Fast** — no external frameworks or libraries required.
* 🛠 **Easy Customization** — simple file structure and clean, commented code.

---

## 🧩 Tech Stack

* **HTML5**
* **CSS3** (with keyframe animations & gradients)
* **Vanilla JavaScript**

---

## ⚙️ Setup Instructions

1. Clone or download the repository:

   ```bash
   git clone https://github.com/MostafaHatemGhonem/ELECTRIC-XTRA.git
   cd ELECTRIC-XTRA
   ```
2. Open the `index.html` file directly in your browser.

✅ No build tools or dependencies required — it’s ready to run!

---

## 🌐 Deployment

You can host it easily using **GitHub Pages**, **Netlify**, or **Vercel**.

For GitHub Pages (if using npm):

```bash
npm run deploy
```

Make sure your `package.json` includes (optional for SPA wrapper):

```json
"homepage": "https://<USERNAME>.github.io/ELECTRIC-XTRA",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

## 📸 Screenshots / Previews

> **Placeholders:** لو تحب أضيف صور حقيقية، ارفع صور الـ screenshots هنا أو اكتب مساراتهم داخل مشروعك (`/assets/screenshots/`).

![screenshot-hero](assets/screenshots/hero.png)

**Suggested screenshots to include:**

* `assets/screenshots/hero.png` — الهيرو مع النص المتحرك.
* `assets/screenshots/features.png` — قسم المزايا والآيكونات.
* `assets/screenshots/footer.png` — الفوتر والأيقونات المتوهجة.

---

## 🔖 Badges (suggested)

Copy these في أعلى الـ README لو عايز تبدو احترافي:

```md
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://mostafahatemghonem.github.io/ELECTRIC-XTRA/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Built with HTML](https://img.shields.io/badge/Built%20with-HTML5-orange)](#)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS%20%26%20CSS-blueviolet)](#)
```

---

## 🔍 How It Works (visual breakdown)

هنا شرح مبسّط للـ layers و التأثيرات عشان أي حد يقدر يفهم ويعدّل بسرعة.

### 1) Layers of the animated background

* **Layer A — Grid layer:** شبكة متحركة تعمل انطباع العمق. يتم رسمها إما كـ `background-image` SVG أو خطوط CSS متكررة، ثم تُحرك باستخدام `background-position` أو `transform` مع `animation`.
* **Layer B — Particles layer:** جزيئات عائمة صغيرة (divs أو canvas) تتحرك بخفة باستخدام keyframes أو `requestAnimationFrame`.
* **Layer C — Glow shapes layer:** أشكال هندسية ناعمة بنور خارجي (`filter: blur()` + `box-shadow`) تُوضع فوق/تحت لتعطي إحساس التدفق.


## 🛠 Troubleshooting (common issues)

* **Fonts not loading on build** — تأكد إن المسار داخل `@font-face` صحيح وملف الخط موجود في `public` أو `assets`.
* **CSS build errors (Module not found)** — لو تستخدم Webpack أو CRA مع تخصيصات، تأكد من إعدادات `css-loader` و`postcss`، أو استخدم مسارات نسبية.
* **Animations choppy on mobile** — خفّف عدد الجزيئات أو استخدم `will-change: transform` و `translateZ(0)` لتحسين الأداء.

---

## 📋 Contributing

1. افتح Issue لوصف التحسين أو البق.
2. اعمل فرع `feature/your-thing` أو `fix/your-thing`.
3. ارسل Pull Request بعد عمل Commit مرتب وواضح.

---

## 👤 Author

**Mostafa Hatem** — Frontend Developer passionate about futuristic web design.

GitHub: [MostafaHatemGhonem](https://github.com/MostafaHatemGhonem)

---

## 📝 License

MIT License — free to use, modify, and distribute with attribution.

---

### Want me to:

* ✅ Add real screenshots (upload images or give paths)?
* ✅ Generate ready-to-copy hero HTML snippet and assets folder structure?
* ✅ Create a small demo `index.html` with the layers + scripts included so you can paste it directly?

قلّي أي حاجة من دول أعملها دلوقتي وأنا أضيفها مباشرة في المشروع.# ELECTRIC-XTRA ⚡

[Live Demo](https://mostafahatemghonem.github.io/ELECTRIC-XTRA/)

> **Electric Xtra** is a dynamic and futuristic HTML landing page template designed with a striking **cyberpunk aesthetic**. Perfect for **tech startups**, **gaming sites**, **digital agencies**, or **personal portfolios**, this template immerses visitors in a high-tech world with its **multi-layered animated background**, featuring a **moving grid**, **floating particles**, and **glowing geometric shapes**.

---

## ✨ Key Features

* **Animated Cyberpunk Design** — glowing geometric shapes and grid animations.
* **Text Rotator Effect** — animated glitch-style rotating headlines in the hero section.
* **Pure Frontend Stack** — built with **HTML**, **CSS**, and **Vanilla JavaScript** only.
* **Lightweight and Fast** — no external frameworks or libraries required.
* **Easy Customization** — simple file structure and clean, commented code.

---

## 🧩 Tech Stack

* HTML5
* CSS3 (with keyframe animations & gradients)
* Vanilla JavaScript

---

## ⚙️ Setup Instructions

1. Clone or download the repository:

   ```bash
   git clone https://github.com/MostafaHatemGhonem/ELECTRIC-XTRA.git
   cd ELECTRIC-XTRA
   ```
2. Open the `index.html` file directly in your browser.

That’s it — no build tools or dependencies required!

---

## 🌐 Deployment

You can host it easily using **GitHub Pages**, **Netlify**, or **Vercel**. For GitHub Pages:

```bash
npm run deploy
```

Make sure your `package.json` includes:

```json
"homepage": "https://<USERNAME>.github.io/ELECTRIC-XTRA",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

## 📸 Preview Sections

* **Hero Section** — animated glitch text & background grid.
* **About Section** — description with cyberpunk glow effects.
* **Features Section** — interactive icons with hover animations.
* **Footer** — minimalist glowing social icons.

---

## 🧠 Customization Tips

* Change text and colors easily in `style.css`.
* Update hero animation phrases in `script.js`.
* Replace background gradients or glow effects for different moods.

---

## 👤 Author

**Mostafa Hatem** — Frontend Developer passionate about futuristic web design.

GitHub: [MostafaHatemGhonem](https://github.com/MostafaHatemGhonem)

---

## 📝 License

MIT License — free to use, modify, and distribute with attribution.

---

> Want me to add screenshots, badges, or a visual breakdown (e.g., explaining how the animation layers work)? I can include them next.
