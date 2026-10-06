# 🚀 UIT Coding Club (UCC) - Official Website

Official website for **UIT Coding Club (UCC)**, the premier student-run developer community of **United Institute of Technology**.

> **Motto:** *CODE • CREATE • COLLABORATE • GROW*

---

## 🌟 Key Features

1. **Brand Identity & Aesthetic**
   - Official UCC Crest and College Badge with high-resolution circular branding.
   - Dynamic Cyber/Navy theme honoring official club colors with **Dark/Light Mode Toggle** (persisted via `localStorage`).
   - Ambient particle glows, responsive grid background, and modern glassmorphic interface cards.

2. **Interactive Hero Section**
   - Live typewriter effect cycling through club specializations.
   - Interactive tabbed terminal with code execution simulator (`UCC.js`, `DSA_Sprint.cpp`, `WebStack.html`).
   - Animated statistics counters (500+ Active Members, 40+ Workshops, 15+ Hackathons Won).

3. **Organizational Hierarchy & Leadership**
   - Dedicated tribute to the official leadership structure:
     - **President:** Gautam Kumar Maurya
     - **Vice-President:** Ansh Kumar Gupta
     - **Media & PR Lead:** Rohit Pal
     - **Design & Creative Lead:** Praveen Singh
     - **Operations & Logistics Lead:** Rahul Kushwaha
     - **Technical Team:** Core DSA & Core Web Development
   - **Interactive Tree View:** Clean CSS tree layout with connected branches, crown badge, and junior member application slots.
   - **Profile Cards View:** Filterable by Core Leadership, Community Wing, and Technical Teams.
   - **Blueprint Lightbox:** Fullscreen zoom view of the original hierarchy diagram (`ucc_team_hierarchy.png`).

4. **Club Domains & Specializations**
   - Technical Wing: Core DSA & Competitive Programming, Full-Stack Web Development.
   - Community & Engagement Wing: Media & PR, Design & Creative, Operations & Logistics.
   - Filterable track switcher with tech badges and curriculum outlines.

5. **Live Event Countdown & Flagship Hackathons**
   - 24-Hour Hackathon banner (**CodeSprint 2026**) with live JavaScript countdown clock.
   - Upcoming workshop cards with RSVP registration simulation.

6. **Interactive Problem of the Day (POTD)**
   - In-browser code runner simulation with starter templates for **C++ (STL)**, **Java 17**, **Python 3**, and **JavaScript (ES6)**.
   - Live test runner with simulated test case evaluation, execution time benchmarks, and mentor hints.

7. **Student Projects Showcase**
   - Featured projects built by UCC members (Campus Portal, AlgoVisualizer, Contest Tracker).

8. **Digital Membership Pass Generator**
   - Interactive registration modal.
   - Automatically generates a personalized **UCC Digital Membership Card** with custom ID (e.g. `UCC-2026-XXXX`), branch, and track verification.

---

## 📁 Project Directory Structure

```
ucc/
├── index.html                   # Main semantic HTML5 webpage
├── css/
│   └── style.css                # Modern responsive stylesheet with CSS custom properties
├── js/
│   └── main.js                  # Pure ES6 JavaScript interactivity & application logic
├── assets/
│   └── images/
│       ├── ucc_logo.jpg         # High-resolution original club insignia
│       ├── ucc_logo_transparent.png # Transparent circular badge
│       ├── ucc_team_hierarchy.png   # Full original organizational blueprint
│       └── team/
│           ├── gautam_avatar.png    # President Gautam Kumar Maurya
│           ├── ansh_avatar.png      # Vice-President Ansh Kumar Gupta
│           ├── rohit_avatar.png     # Media & PR Lead Rohit Pal
│           ├── praveen_avatar.png   # Design & Creative Lead Praveen Singh
│           └── rahul_avatar.png     # Operations & Logistics Lead Rahul Kushwaha
└── README.md                    # Project documentation
```

---

## ⚡ How to Run

### Method 1: Direct Browser Launch
Simply double-click `index.html` or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### Method 2: Local HTTP Server (Recommended)
If you have Python installed, open terminal in this folder and run:
```bash
python -m http.server 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Built With
- **HTML5** (Semantic structure & accessible landmarks)
- **CSS3** (Flexbox, CSS Grid, Glassmorphism, CSS Custom Properties)
- **JavaScript (ES6+)** (Vanilla JS, Zero external library overhead)
- **Font Awesome 6** (Modern tech & social icons)
- **Google Fonts** (Outfit, Inter, Fira Code)

---

*UIT Coding Club (UCC) • United Institute of Technology*
