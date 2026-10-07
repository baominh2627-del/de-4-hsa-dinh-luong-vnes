# Tổng hợp Code - de-4-hsa-dinh-luong-vnes

## index.html
```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Äá»€ THI Äá»ŠNH LÆ¯á»¢NG HSA - Äá»€ Sá» 4</title>
    <link rel="stylesheet" href="style.css" />
    <script>
      MathJax = {
        tex: { inlineMath: [["$", "$"], ["\\(", "\\)"]] },
        svg: { fontCache: "global" },
      };
    </script>
    <script id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
    </script>
  </head>
  <body>
    <!-- MÃ n hÃ¬nh chá» / hÆ°á»›ng dáº«n -->
    <div id="login-screen" class="container">
      <div class="exam-header-block" style="margin-bottom: 20px">
        <div class="exam-header-top" style="border-radius: 8px; border-bottom: 1px solid var(--border-color);">
          <div class="meta-text">BÃ€I THI ÄÃNH GIÃ NÄ‚NG Lá»°C HSA Â· TÆ¯ DUY Äá»ŠNH LÆ¯á»¢NG</div>
          <h1 class="exam-title">Äá»€ THI Äá»ŠNH LÆ¯á»¢NG HSA - Äá»€ Sá» 4</h1>
          <div class="meta-sub">50 cÃ¢u há»i Â· Tráº¯c nghiá»‡m &amp; Äiá»n Ä‘Ã¡p Ã¡n â€” thang Ä‘iá»ƒm 50</div>
          <hr class="dashed-line" />
        </div>
      </div>
      <div class="card form-card">
        <div class="exam-instructions" style="text-align: left;">
          <h3 style="margin-top: 0; color: var(--navy); font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; font-weight: bold;">ðŸ“‹ HÆ¯á»šNG DáºªN &amp; QUY CHáº¾ THI</h3>
          <ul style="font-size: 14px; color: #334155; line-height: 1.8; padding-left: 20px; margin-bottom: 16px;">
            <li><strong>Tá»•ng sá»‘ cÃ¢u há»i:</strong> 50 cÃ¢u (Bao gá»“m cÃ¢u há»i tráº¯c nghiá»‡m 4 lá»±a chá»n vÃ  cÃ¢u há»i Ä‘iá»n Ä‘Ã¡p Ã¡n).</li>
            <li><strong>Thang Ä‘iá»ƒm:</strong> Má»—i cÃ¢u tráº£ lá»i Ä‘Ãºng Ä‘Æ°á»£c <strong>1 Ä‘iá»ƒm</strong> (Tá»‘i Ä‘a 50 Ä‘iá»ƒm).</li>
            <li><strong>Thá»i gian lÃ m bÃ i:</strong> 75 phÃºt.</li>
            <li><span style="color: #d97706; font-weight: bold;">âš ï¸ LÆ°u Ã½ (Vá»›i cÃ¢u Ä‘iá»n Ä‘Ã¡p Ã¡n):</span> DÃ¹ng dáº¥u pháº©y (<code>,</code>) hoáº·c dáº¥u cháº¥m (<code>.</code>) Ä‘á»ƒ phÃ¢n cÃ¡ch tháº­p phÃ¢n. VD: <code>1.25</code> hoáº·c <code>1,25</code></li>
          </ul>
          <div style="background: #fef9c3; border: 1px solid #fde047; border-radius: 6px; padding: 10px 14px; font-size: 13px; color: #854d0e; margin-bottom: 16px;">
            âš ï¸ <strong>Quy cháº¿:</strong> Náº¿u báº¡n chuyá»ƒn sang tab hoáº·c á»©ng dá»¥ng khÃ¡c trong khi thi, há»‡ thá»‘ng sáº½ ghi nháº­n sá»‘ láº§n vi pháº¡m vÃ  bÃ¡o cÃ¡o vá» giÃ¡o viÃªn.
          </div>
          <button id="btn-start-exam" class="btn-primary" style="width: 100%; padding: 12px; font-size: 16px; font-weight: bold;">
            âœ… TÃ´i Ä‘Ã£ Ä‘á»c hÆ°á»›ng dáº«n â€” Báº¯t Ä‘áº§u thi
          </button>
        </div>
      </div>
      <div class="page-footer">TÆ° duy Ä‘á»‹nh lÆ°á»£ng Â· tá»± Ä‘á»™ng cháº¥m Ä‘iá»ƒm theo Ä‘Ãºng barem &amp; lÆ°u káº¿t quáº£</div>
    </div>

    <!-- MÃ n hÃ¬nh lÃ m bÃ i thi -->
    <div id="exam-screen" class="hidden container">
      <div id="board-container" class="board-card">
        <h3>Báº£ng Äiá»u HÆ°á»›ng</h3>
        <div id="question-board" class="board-wrapper"></div>
      </div>
      <div class="exam-header-block">
        <div class="exam-header-top">
          <div class="meta-text">KIá»‚M TRA 75 PHÃšT Â· TÆ¯ DUY Äá»ŠNH LÆ¯á»¢NG</div>
          <h1 class="exam-title">Äá»€ THI Äá»ŠNH LÆ¯á»¢NG HSA - Äá»€ Sá» 4</h1>
          <div class="meta-sub">50 cÃ¢u há»i</div>
          <hr class="dashed-line" />
        </div>
        <div class="exam-info-bar sticky">
          <div class="student-info">
            ThÃ­ sinh: <strong id="display-name" style="color: white"></strong> Â·
            Lá»›p <strong id="display-class" style="color: white"></strong>
          </div>
          <div class="progress-info"><span id="answered-count">0/50</span> cÃ¢u Ä‘Ã£ lÃ m</div>
          <div class="timer-pill">
            <span class="green-dot">â—</span> <span id="countdown">75:00</span>
          </div>
          <div class="score-pill hidden" id="score-pill">
            <span class="green-dot">âœ“</span> Äiá»ƒm: <span id="review-score">0</span>/50
          </div>
        </div>
      </div>
      <div id="questions-container"></div>
      <div class="submit-container">
        <button id="submit-btn" class="btn-primary">Ná»™p bÃ i kiá»ƒm tra</button>
      </div>
    </div>

    <!-- MÃ n hÃ¬nh káº¿t quáº£ -->
    <div id="result-screen" class="hidden container">
      <div class="card result-card">
        <h2 style="font-family: var(--font-serif)">Káº¿t Quáº£ BÃ i Thi</h2>
        <div class="score-display mono-font">Äiá»ƒm: <span id="final-score"></span>/50</div>
        <p>Sá»‘ láº§n rá»i khá»i mÃ n hÃ¬nh: <span id="cheat-display">0</span></p>
        <p id="firebase-status" style="font-size: 14px; margin-top: 8px; color: #666;">â³ Äang káº¿t ná»‘i há»‡ thá»‘ng lÆ°u...</p>
        <button id="review-btn" class="btn-primary">Xem láº¡i bÃ i lÃ m</button>
      </div>
    </div>

    <script type="module" src="script.js"></script>
  </body>
</html>


```

## style.css
```css
:root {
  --bg-color: #f8fafc;
  --grid-color: #e2e8f0;
  --ink: #1e293b;
  --navy: #1e3a8a;
  --blue-text: #2563eb;
  --gray-text: #64748b;
  --border-color: #e2e8f0;
  --font-sans:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Times New Roman", Times, serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 25px 25px;
  font-family: var(--font-sans);
  color: var(--ink);
  line-height: 1.6;
}

.hidden {
  display: none !important;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

/* Báº¢NG ÄIá»€U HÆ¯á»šNG STICKY NHá»Ž */
#board-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 280px;
  max-height: 400px;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 500;
  overflow-y: auto;
}

#board-container h3 {
  font-size: 13px;
  font-weight: bold;
  color: var(--navy);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.board-legend {
  font-size: 11px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
  padding: 8px;
  background: #f8fafc;
  border-radius: 6px;
}

.box {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  background: #fff;
}

.box.done {
  background-color: #007bff;
  border-color: #007bff;
}

.box.flagged {
  background-color: #ffc107;
  border-color: #ffc107;
}

.box-label {
  font-size: 11px;
  color: var(--gray-text);
  line-height: 18px;
}

.board-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.q-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.q-box {
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  background: #fff;
  transition: all 0.2s;
}

.q-box:hover {
  background: #f0f0f0;
  transform: scale(1.05);
}

.q-box.done {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.q-box.flagged {
  background-color: #ffc107;
  color: #333;
  border-color: #ffc107;
  font-weight: bold;
}

/* CARD CHUNG */
.card {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.login-card,
.result-card {
  text-align: center;
  max-width: 500px;
  margin: 80px auto;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 15px;
}

.btn-primary {
  background-color: var(--navy);
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.btn-primary:hover {
  background-color: #1e3a8a;
  transform: translateY(-2px);
}

.submit-container {
  text-align: center;
  margin: 40px 0 80px 0;
}

/* HEADER BÃ€I THI */
.exam-header-block {
  margin-bottom: 30px;
}

.exam-header-top {
  background: #fff;
  padding: 25px 30px;
  border: 1px solid var(--border-color);
  border-radius: 12px 12px 0 0;
  border-bottom: none;
}

.meta-text {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--gray-text);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.exam-title {
  font-family: var(--font-serif);
  font-size: 28px;
  color: var(--navy);
  margin-bottom: 10px;
}

.meta-sub {
  font-size: 14px;
  color: var(--gray-text);
}

.dashed-line {
  border: none;
  border-top: 1px dashed #cbd5e1;
  margin-top: 20px;
  position: relative;
}

.dashed-line::after {
  content: "";
  position: absolute;
  right: -5px;
  top: -5px;
  width: 8px;
  height: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 50%;
  background: #fff;
}

/* THANH THÃ”NG TIN & TIMER */
.exam-info-bar {
  background-color: var(--navy);
  color: #94a3b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  border-radius: 0 0 12px 12px;
  font-size: 14px;
}

.exam-info-bar.sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.timer-pill {
  background-color: #334155;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.green-dot {
  color: #4ade80;
  font-size: 12px;
}

.timer-danger {
  background-color: #ef4444 !important;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* TIÃŠU Äá»€ PHáº¦N */
.section-header {
  margin: 40px 0 20px 0;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: bold;
  color: var(--navy);
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  font-family: var(--font-sans);
  background-color: #e0e7ff;
  color: var(--blue-text);
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: bold;
}

.section-subtitle {
  font-size: 14px;
  color: var(--gray-text);
  margin-top: 5px;
}

/* CÃ‚U Há»ŽI */
.question-card {
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px 25px;
  margin-bottom: 15px;
}

.q-layout {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.q-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
}

.q-num-flag {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
}

.q-num {
  background: var(--navy);
  color: #fff;
  width: 60px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.btn-flag {
  margin-bottom: 10px;
  cursor: pointer;
  padding: 4px 8px;
  width: 70px;
  height: 30px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-flag:hover {
  border-color: #ffc107;
  color: #ffc107;
  background: #fffbf0;
}

.btn-flag.active {
  background: #ffc107;
  border-color: #ffc107;
  color: #333;
}

.q-content {
  flex: 1;
}

.q-text {
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 2px;
  line-height: 1.6;
}

.q-image {
  margin: 15px 0;
  display: flex;
  justify-content: center;
}

.q-image img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ÄÃP ÃN TRáº®C NGHIá»†M */
.options-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-label {
  display: block;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 15px;
  cursor: pointer;
  transition: 0.2s;
}

.option-label:hover {
  border-color: #93c5fd;
  background: #f8fafc;
}

.option-label input {
  display: none;
}

.option-label.selected {
  border-color: var(--blue-text);
  background: #eff6ff;
}

.opt-letter {
  color: var(--blue-text);
  font-weight: bold;
  margin-right: 10px;
  font-family: var(--font-serif);
}

/* ÄÃšNG SAI */
.tf-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 10px;
}

.tf-controls {
  display: flex;
  gap: 15px;
  flex-shrink: 0;
}

.tf-controls label {
  cursor: pointer;
  font-size: 14px;
}

.short-ans-input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
}

/* CHáº¤M ÄIá»‚M */
.correct-ans {
  background-color: #dcfce7 !important;
  border-color: #22c55e !important;
}

.wrong-ans {
  background-color: #fee2e2 !important;
  border-color: #ef4444 !important;
}

.explanation {
  margin-top: 15px;
  padding: 15px;
  background: #f8fafc;
  border-left: 3px solid var(--navy);
  font-size: 14px;
  border-radius: 4px;
}

.image-placeholder {
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  padding: 30px;
  text-align: center;
  color: #64748b;
  margin: 15px 0;
  border-radius: 8px;
}

.page-footer {
  text-align: center;
  font-size: 12px;
  color: var(--gray-text);
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.form-note {
  font-size: 13px;
  color: var(--gray-text);
  margin-top: 15px;
  font-style: italic;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  #board-container {
    width: 240px;
    bottom: 20px;
    right: 20px;
  }

  .q-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .exam-title {
    font-size: 22px;
  }

  .container {
    margin: 20px auto;
  }
}

@media (max-width: 480px) {
  #board-container {
    width: 200px;
    bottom: 10px;
    right: 10px;
    max-height: 300px;
  }

  .q-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .q-num-flag {
    flex-direction: column;
    align-items: flex-start;
  }

  .exam-info-bar {
    flex-direction: column;
    gap: 10px;
    padding: 10px 15px;
  }

  .tf-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .tf-controls {
    width: 100%;
    justify-content: space-around;
  }
}
.score-pill {
  background-color: #16a34a;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.score-pill .green-dot {
  color: #fff;
}


#toast {
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  background: #b91c1c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s, transform 0.25s;
  z-index: 10000;
}
#toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}


```

## firebase-config.js
```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase, ref, push, set, update, serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8AT2g3vS54-Qco3uU36xYsXN04trj0Yw",
  authDomain: "mtsedu-85ea3.firebaseapp.com",
  databaseURL: "https://mtsedu-85ea3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mtsedu-85ea3",
  storageBucket: "mtsedu-85ea3.firebasestorage.app",
  messagingSenderId: "73617729802",
  appId: "1:73617729802:web:e7fa3c3c3b9ded7522f2f3",
  measurementId: "G-JHQC9DSKY5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, push, set, update, serverTimestamp };



```

## mtsedu-auth.js
```javascript
const SESSION_KEY = 'mtsedu_session';

export function getMTSeduSession() {
  const params = new URLSearchParams(window.location.search);
  const urlUsername = params.get('mtsedu_user');
  const urlName = params.get('mtsedu_name');
  const urlId = params.get('mtsedu_id');
  const returnUrl = params.get('mtsedu_return');

  if (urlUsername) {
    const session = {
      username: urlUsername,
      displayName: urlName || urlUsername,
      id: urlId || ('user_' + urlUsername),
      returnUrl: returnUrl || 'https://mtsedu.vercel.app'
    };
    try { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch {}
    return session;
  }

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    return (user && user.username) ? user : null;
  } catch { return null; }
}

export function getReturnUrl() {
  const session = getMTSeduSession();
  return (session && session.returnUrl) ? session.returnUrl : 'https://mtsedu.vercel.app';
}

export function isLoggedIn() { return getMTSeduSession() !== null; }

export function getStudentName() {
  const s = getMTSeduSession();
  return s ? (s.displayName || s.username) : '';
}

export function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch {}
}

export function showLoginRequired(container, returnHash = '') {
  const mtseduUrl = 'https://mtsedu.vercel.app/' + returnHash;
  container.innerHTML = `
    <div style="max-width:480px;margin:0 auto;padding:36px;background:white;border-radius:16px;
      box-shadow:0 4px 24px rgba(0,0,0,0.08);text-align:center;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <div style="font-size:48px;margin-bottom:16px;">ðŸ”’</div>
      <h2 style="font-size:22px;font-weight:700;margin:0 0 8px;color:#111;">Vui lÃ²ng Ä‘Äƒng nháº­p</h2>
      <p style="color:#666;font-size:15px;margin:0 0 28px;line-height:1.6;">
        Báº¡n cáº§n Ä‘Äƒng nháº­p vÃ o há»‡ thá»‘ng <strong>MTS Education</strong> Ä‘á»ƒ lÃ m bÃ i thi nÃ y.
      </p>
      <a href="${mtseduUrl}" style="display:inline-block;background:#000;color:#fff;
        text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
        ÄÄƒng nháº­p táº¡i MTS Education â†’
      </a>
      <p style="margin-top:20px;font-size:13px;color:#999;">TÃ i khoáº£n Ä‘Æ°á»£c cung cáº¥p bá»Ÿi giÃ¡o viÃªn</p>
    </div>
  `;
}

export function insertBackButton() {
  const session = getMTSeduSession();
  const returnUrl = (session && session.returnUrl) ? session.returnUrl : 'https://mtsedu.vercel.app';
  const btn = document.createElement('div');
  btn.id = 'mtsedu-back-btn';
  btn.innerHTML = `
    <a href="${returnUrl}" style="display:inline-flex;align-items:center;gap:8px;
      position:fixed;top:14px;left:14px;z-index:9999;background:rgba(0,0,0,0.85);
      color:white;text-decoration:none;padding:9px 18px;border-radius:50px;
      font-size:14px;font-weight:600;font-family:-apple-system,sans-serif;
      backdrop-filter:blur(8px);box-shadow:0 2px 12px rgba(0,0,0,0.3);"
      onmouseover="this.style.background='rgba(0,0,0,1)'"
      onmouseout="this.style.background='rgba(0,0,0,0.85)'">
      â† Trang chá»§
    </a>
  `;
  document.body.appendChild(btn);
}



```

## script.js
```javascript
import { examData } from "./data.js";
import { db, ref, push, set, update, serverTimestamp } from "./firebase-config.js";
import { getMTSeduSession, showLoginRequired, insertBackButton } from "./mtsedu-auth.js";

const loginScreen = document.getElementById("login-screen");
const examScreen = document.getElementById("exam-screen");
const resultScreen = document.getElementById("result-screen");
const questionsContainer = document.getElementById("questions-container");
const questionBoard = document.getElementById("question-board");
const submitBtn = document.getElementById("submit-btn");

// ===== CHá»ˆ THAY DÃ’NG NÃ€Y =====
const MA_DE       = "HSA_DINHLUONG_DE4";
const DRAFT_KEY   = "examDraft_HSA_DINHLUONG_DE4";
const EXAM_MINUTES = 75;
const RETURN_HASH = "#math";
// ================================

let timeRemaining = EXAM_MINUTES * 60;
let timerInterval;
let userAnswers = {};
let flaggedQuestions = {};
let isFinished = false;
let cheatCount = 0;
let studentName = "";
let studentClass = "";

window.addEventListener("DOMContentLoaded", () => {
  const session = getMTSeduSession();
  const btnStart = document.getElementById("btn-start-exam");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      if (!session) {
        const loginCard = loginScreen.querySelector(".form-card") || loginScreen.querySelector(".card");
        if (loginCard) showLoginRequired(loginCard, RETURN_HASH);
        return;
      }
      const draft = JSON.parse(localStorage.getItem(DRAFT_KEY));
      if (draft && !draft.isFinished && draft.studentName === studentName) {
        loadDraftAndContinue(draft);
      } else {
        startExamDirectly();
      }
    });
  }

  if (!session) return;
  studentName = session.displayName || session.username;
  studentClass = session.username;
  insertBackButton();
});

function startExamDirectly() {
  userAnswers = {}; flaggedQuestions = {}; cheatCount = 0; isFinished = false;
  localStorage.removeItem(DRAFT_KEY);
  timeRemaining = EXAM_MINUTES * 60;
  document.getElementById("display-name").innerText = studentName;
  document.getElementById("display-class").innerText = studentClass;
  loginScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  renderExam(); restoreDOMState(); renderBoard(); startTimer(); setupAntiCheat();
}

function loadDraftAndContinue(draft) {
  studentName = draft.studentName || studentName;
  studentClass = draft.studentClass || studentClass;
  timeRemaining = draft.timeRemaining;
  userAnswers = draft.userAnswers || {};
  flaggedQuestions = draft.flaggedQuestions || {};
  cheatCount = draft.cheatCount || 0;
  document.getElementById("display-name").innerText = studentName;
  document.getElementById("display-class").innerText = studentClass;
  loginScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  renderExam(); restoreDOMState(); renderBoard(); startTimer(); setupAntiCheat();
}

function renderExam() {
  questionsContainer.innerHTML = "";

  const header = document.createElement("div");
  header.className = "section-header";
  header.innerHTML = `
    <div class="section-title">Pháº§n thi: TÆ° duy Ä‘á»‹nh lÆ°á»£ng <span class="badge">50 Ä‘iá»ƒm</span></div>
    <div class="section-subtitle">Má»—i cÃ¢u Ä‘Ãºng Ä‘Æ°á»£c 1 Ä‘iá»ƒm. Gá»“m tráº¯c nghiá»‡m 4 lá»±a chá»n vÃ  Ä‘iá»n Ä‘Ã¡p Ã¡n.</div>`;
  questionsContainer.appendChild(header);

  let qCounter = 1;

  examData.forEach((q) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-card-${q.id}`;

    let html = `<div class="q-layout"><div class="q-header"><div class="q-num-flag">
      <div class="q-num">CÃ¢u ${qCounter}</div>
      <button class="btn-flag ${flaggedQuestions[q.id] ? "active" : ""}" data-id="${q.id}" title="ÄÃ¡nh dáº¥u">
        ${flaggedQuestions[q.id] ? "â˜…" : "â˜†"}</button>
    </div></div><div class="q-content">
    <div class="q-text">${q.question}</div>
    ${q.image ? `<div class="q-image"><img src="${q.image}" alt="HÃ¬nh cÃ¢u ${qCounter}"></div>` : ""}`;

    if (q.type === "mcq") {
      html += `<div class="options-list">`;
      q.options.forEach((opt, idx) => {
        html += `<label class="option-label" id="lbl-${q.id}-${idx}">
          <input type="radio" name="ans-${q.id}" value="${idx}">
          <span class="opt-letter">${["A","B","C","D"][idx]}.</span> ${opt}</label>`;
      });
      html += `</div>`;
    } else if (q.type === "fill") {
      html += `<input type="text" class="short-ans-input" name="ans-${q.id}" placeholder="Nháº­p Ä‘Ã¡p Ã¡n...">`;
    }

    html += `<div class="explanation hidden" id="exp-${q.id}"><strong>HÆ°á»›ng dáº«n giáº£i:</strong> ${q.explanation}</div></div></div>`;
    card.innerHTML = html;
    questionsContainer.appendChild(card);
    qCounter++;
  });

  document.querySelectorAll(".btn-flag").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const qid = e.target.closest(".btn-flag").getAttribute("data-id");
      flaggedQuestions[qid] = !flaggedQuestions[qid];
      e.target.closest(".btn-flag").classList.toggle("active");
      e.target.closest(".btn-flag").innerText = flaggedQuestions[qid] ? "â˜…" : "â˜†";
      updateBoard(); saveDraft();
    });
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const name = e.target.name;
      if (name.startsWith("ans-") && e.target.type === "radio") {
        const qid = name.replace("ans-", "");
        document.querySelectorAll(`input[name="${name}"]`).forEach((r) =>
          r.closest(".option-label").classList.remove("selected"));
        e.target.closest(".option-label").classList.add("selected");
        userAnswers[qid] = parseInt(e.target.value);
      } else if (e.target.type === "text") {
        const qid = name.replace("ans-", "");
        userAnswers[qid] = e.target.value;
      }
      updateBoard(); saveDraft();
    });
  });

  if (window.MathJax) MathJax.typesetPromise();
}

function renderBoard() {
  if (!questionBoard) return;
  const legend = document.createElement("div");
  legend.className = "board-legend";
  legend.innerHTML = `
    <span class="box"></span><span class="box-label">ChÆ°a lÃ m</span>
    <span class="box done"></span><span class="box-label">ÄÃ£ lÃ m</span>
    <span class="box flagged"></span><span class="box-label">ÄÃ¡nh dáº¥u</span>`;
  questionBoard.appendChild(legend);

  const grid = document.createElement("div");
  grid.className = "q-grid";
  grid.id = "q-grid-inner";
  questionBoard.appendChild(grid);

  examData.forEach((q, index) => {
    const box = document.createElement("button");
    box.className = "q-box"; box.id = `box-${q.id}`; box.innerText = index + 1; box.type = "button";
    box.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(`q-card-${q.id}`).scrollIntoView({ behavior: "smooth", block: "center" });
    });
    grid.appendChild(box);
  });
  updateBoard();
}

function updateBoard() {
  let answeredCount = 0;
  examData.forEach((q) => {
    let answered = false;
    if (q.type === "mcq" && userAnswers[q.id] !== undefined) answered = true;
    if (q.type === "fill" && userAnswers[q.id] && userAnswers[q.id].trim() !== "") answered = true;

    if (answered) answeredCount++;
    if (questionBoard) {
      const box = document.getElementById(`box-${q.id}`);
      if (box) {
        box.className = "q-box";
        if (flaggedQuestions[q.id]) box.classList.add("flagged");
        else if (answered) box.classList.add("done");
      }
    }
  });
  const countEl = document.getElementById("answered-count");
  if (countEl) countEl.innerText = `${answeredCount}/${examData.length}`;
}

function saveDraft() {
  localStorage.setItem(DRAFT_KEY, JSON.stringify({
    studentName, studentClass, timeRemaining,
    userAnswers, flaggedQuestions, cheatCount, isFinished,
    lastSaved: new Date().toISOString(),
  }));
}

function restoreDOMState() {
  document.querySelectorAll("input").forEach((input) => {
    const name = input.name;
    if (!name) return;
    if (input.type === "radio" && name.startsWith("ans-")) {
      const qid = name.replace("ans-", "");
      if (userAnswers[qid] == input.value) {
        input.checked = true;
        input.closest(".option-label").classList.add("selected");
      }
    } else if (input.type === "text") {
      const qid = name.replace("ans-", "");
      input.value = userAnswers[qid] || "";
    }
  });
}

let warned30 = false;

function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 5000);
}

function startTimer() {
  const endAt = Date.now() + timeRemaining * 1000;
  timerInterval = setInterval(() => {
    timeRemaining = Math.max(0, Math.round((endAt - Date.now()) / 1000));
    saveDraft();
    const m = Math.floor(timeRemaining / 60).toString().padStart(2, "0");
    const s = (timeRemaining % 60).toString().padStart(2, "0");
    document.getElementById("countdown").innerText = `${m}:${s}`;
    if (timeRemaining <= 30 && !warned30) {
      warned30 = true;
      showToast("âš ï¸ Cáº£nh bÃ¡o: Chá»‰ cÃ²n 30 giÃ¢y!");
      document.querySelector(".timer-pill").classList.add("timer-danger");
    }
    if (timeRemaining <= 0) { clearInterval(timerInterval); submitExam(); }
  }, 1000);
}

function setupAntiCheat() {
  window.addEventListener("beforeunload", (e) => {
    if (!isFinished) { e.preventDefault(); e.returnValue = "Báº¡n chÆ°a ná»™p bÃ i!"; }
  });
  window.addEventListener("pagehide", () => { if (!isFinished) saveDraft(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !isFinished) { cheatCount++; saveDraft(); }
  });
}

submitBtn.addEventListener("click", () => {
  if (confirm("Báº¡n cÃ³ cháº¯c muá»‘n ná»™p bÃ i?")) submitExam();
});

function parseNumber(str) {
  const t = String(str ?? "").trim().replace(/\s+/g, "").replace(",", ".");
  if (t === "") return NaN;
  const frac = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (frac) return Number(frac[2]) === 0 ? NaN : Number(frac[1]) / Number(frac[2]);
  return /^-?\d+(?:\.\d+)?$/.test(t) ? Number(t) : NaN;
}

function isFillCorrect(userInput, correct) {
  const u = String(userInput ?? "").trim().toLowerCase().replace(/\s+/g, "");
  const c = String(correct).trim().toLowerCase().replace(/\s+/g, "");
  if (u === "") return false;
  if (u === c) return true;
  const un = parseNumber(u), cn = parseNumber(c);
  return !isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 1e-9;
}

function submitExam() {
  isFinished = true; clearInterval(timerInterval);
  document.querySelectorAll("input, .btn-flag").forEach((el) => (el.disabled = true));
  submitBtn.style.display = "none";
  const timerPill = document.querySelector(".timer-pill");
  if (timerPill) timerPill.classList.remove("timer-danger");

  let totalScore = 0;

  examData.forEach((q) => {
    document.getElementById(`exp-${q.id}`).classList.remove("hidden");

    if (q.type === "mcq") {
      const selected = userAnswers[q.id];
      document.getElementById(`lbl-${q.id}-${q.correctAnswer}`).classList.add("correct-ans");
      if (selected === q.correctAnswer) {
        totalScore += 1;
      } else if (selected !== undefined) {
        document.getElementById(`lbl-${q.id}-${selected}`).classList.add("wrong-ans");
      }
    } else if (q.type === "fill") {
      const input = document.querySelector(`input[name="ans-${q.id}"]`);
      if (isFillCorrect(userAnswers[q.id], q.correctAnswer)) {
        totalScore += 1;
        input.classList.add("correct-ans");
      } else {
        input.classList.add("wrong-ans");
      }
    }
  });

  const scorePill = document.getElementById("score-pill");
  document.querySelector(".timer-pill")?.classList.add("hidden");
  if (scorePill) {
    scorePill.classList.remove("hidden");
    document.getElementById("review-score").innerText = totalScore.toFixed(0);
  }

  saveExamResultToFirebase(totalScore, cheatCount);
  document.getElementById("final-score").innerText = totalScore.toFixed(0);
  document.getElementById("cheat-display").innerText = cheatCount;
  examScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  localStorage.removeItem(DRAFT_KEY);
}

async function saveExamResultToFirebase(tongDiem, soLanThoat) {
  const statusEl = document.getElementById("firebase-status");
  if (statusEl) statusEl.innerText = "â³ Äang Ä‘á»“ng bá»™ káº¿t quáº£ lÃªn MTSedu...";
  try {
    const session = getMTSeduSession();
    const userId = session ? session.id : null;
    const resultData = {
      hoTen: studentName, lop: studentClass, maDe: MA_DE,
      tongDiem, soLanThoat,
      userId: userId || "unknown",
      thoiGianNop: new Date().toISOString(),
      serverTimestamp: serverTimestamp(),
    };
    const updates = {};
    const newResultId = push(ref(db, `testResults/${MA_DE}`)).key;
    updates[`testResults/${MA_DE}/${newResultId}`] = resultData;
    if (userId) updates[`users/${userId}/results/${newResultId}`] = resultData;
    await update(ref(db), updates);
    if (statusEl) { statusEl.style.color = "green"; statusEl.innerText = "âœ… Káº¿t quáº£ Ä‘Ã£ Ä‘Æ°á»£c Ä‘á»“ng bá»™ thÃ nh cÃ´ng!"; }
  } catch (error) {
    if (statusEl) { statusEl.style.color = "red"; statusEl.innerText = "âŒ Lá»—i: " + error.message; }
  }
}

document.getElementById("review-btn").addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});



```

## data.js
```javascript
export const examData = [
  {
    id: "q1",
    type: "mcq",
    question: "Cho cáº¥p sá»‘ nhÃ¢n $(u_n)$ cÃ³ $u_1 = 3$, cÃ´ng bá»™i $q = 2$. Khi Ä‘Ã³ $u_5$ báº±ng",
    options: ["24.", "11.", "48.", "9."],
    correctAnswer: 2,
    explanation: "Ãp dá»¥ng cÃ´ng thá»©c sá»‘ háº¡ng tá»•ng quÃ¡t cá»§a cáº¥p sá»‘ nhÃ¢n: $u_n = u_1 \\cdot q^{n-1}$. Ta cÃ³ $u_5 = u_1 \\cdot q^4 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.",
    image: null
  },
  {
    id: "q2",
    type: "mcq",
    question: "Cho hÃ¬nh chÃ³p $S.ABCD$ trong Ä‘Ã³ $ABCD$ lÃ  hÃ¬nh chá»¯ nháº­t, $SA \\perp (ABCD)$. Trong cÃ¡c tam giÃ¡c sau tam giÃ¡c nÃ o khÃ´ng pháº£i lÃ  tam giÃ¡c vuÃ´ng.",
    options: ["$\\Delta SBC$.", "$\\Delta SCD$.", "$\\Delta SAB$.", "$\\Delta SBD$."],
    correctAnswer: 3,
    explanation: "VÃ¬ $SA \\perp (ABCD)$ nÃªn $SA \\perp AB, SA \\perp AD \\Rightarrow \\Delta SAB, \\Delta SAD$ vuÃ´ng táº¡i $A$. $BC \\perp AB$ (do $ABCD$ lÃ  hcn) vÃ  $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB \\Rightarrow \\Delta SBC$ vuÃ´ng táº¡i $B$. TÆ°Æ¡ng tá»± $CD \\perp (SAD) \\Rightarrow CD \\perp SD \\Rightarrow \\Delta SCD$ vuÃ´ng táº¡i $D$. Tam giÃ¡c $SBD$ khÃ´ng cÃ³ yáº¿u tá»‘ vuÃ´ng gÃ³c.",
    image: null
  },
  {
    id: "q3",
    type: "mcq",
    question: "TÃ¬m sá»‘ gáº§n Ä‘Ãºng cá»§a $a=5,2463$ vá»›i Ä‘á»™ chÃ­nh xÃ¡c $d=0,001$",
    options: ["5,25.", "5,246.", "5,2.", "5,24."],
    correctAnswer: 0,
    explanation: "Äá»™ chÃ­nh xÃ¡c $d = 0,001$ nÃªn ta lÃ m trÃ²n sá»‘ 5,2463 Ä‘áº¿n hÃ ng pháº§n trÄƒm (sau dáº¥u pháº©y 2 chá»¯ sá»‘). Chá»¯ sá»‘ hÃ ng pháº§n nghÃ¬n lÃ  6 > 5 nÃªn ta cá»™ng 1 vÃ o hÃ ng pháº§n trÄƒm, Ä‘Æ°á»£c 5,25.",
    image: null
  },
  {
    id: "q4",
    type: "mcq",
    question: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ $SA \\perp (ABCD)$ vÃ  Ä‘Ã¡y lÃ  hÃ¬nh vuÃ´ng. Tá»« $A$ káº» $AH \\perp SB$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y Ä‘Ãºng?",
    options: ["$SB \\perp (HAC)$.", "$AH \\perp (SAD)$.", "$AH \\perp (SBD)$.", "$AH \\perp (SBC)$."],
    correctAnswer: 3,
    explanation: "Ta cÃ³ $BC \\perp AB$ vÃ  $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp AH$. Máº·t khÃ¡c theo giáº£ thiáº¿t $AH \\perp SB$. Tá»« Ä‘Ã³ suy ra $AH \\perp (SBC)$.",
    image: null
  },
  {
    id: "q5",
    type: "mcq",
    question: "$\\lim_{x \\to 1} \\frac{\\sqrt{x+8}-3}{x-2}$ báº±ng",
    options: ["0.", "$\\sqrt{2}$.", "$\\sqrt{5}$.", "$\\sqrt{3}$."],
    correctAnswer: 0,
    explanation: "Thay trá»±c tiáº¿p $x=1$ vÃ o biá»ƒu thá»©c: $\\frac{\\sqrt{1+8}-3}{1-2} = \\frac{\\sqrt{9}-3}{-1} = \\frac{3-3}{-1} = 0$.",
    image: null
  },
  {
    id: "q6",
    type: "mcq",
    question: "Cho hÃ m sá»‘ $y=f(x)$ cÃ³ báº£ng biáº¿n thiÃªn nhÆ° sau: Há»i hÃ m sá»‘ Ä‘Ã£ cho Ä‘á»“ng biáº¿n trÃªn khoáº£ng nÃ o dÆ°á»›i Ä‘Ã¢y?",
    options: ["$(-\\infty;1)$.", "$(-3;-2)$.", "$(-1;1)$.", "$(-2;0)$."],
    correctAnswer: 1,
    explanation: "Dá»±a vÃ o báº£ng biáº¿n thiÃªn, hÃ m sá»‘ Ä‘á»“ng biáº¿n trÃªn cÃ¡c khoáº£ng $(-\\infty; -1)$ vÃ  $(1; 3)$. Khoáº£ng $(-3; -2)$ náº±m hoÃ n toÃ n trong $(-\\infty; -1)$ nÃªn hÃ m sá»‘ Ä‘á»“ng biáº¿n trÃªn $(-3; -2)$.",
    image: "cau_6.png"
  },
  {
    id: "q7",
    type: "mcq",
    question: "Cho 2 sá»‘ thá»±c dÆ°Æ¡ng $a, b$ thá»a mÃ£n $a+b=5ab$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  kháº³ng Ä‘á»‹nh Ä‘Ãºng ?",
    options: ["$\\log \\frac{a+b}{5} = (\\log a + \\log b)$", "$\\log(a+b) = (\\log a + \\log b)$", "$\\log(a+b) = 5(\\log a + \\log b)$", "$\\log \\frac{a+b}{5} = (\\log a - \\log b)$"],
    correctAnswer: 0,
    explanation: "Ta cÃ³ $a+b=5ab \\Rightarrow \\frac{a+b}{5} = ab$. Láº¥y logarit cÆ¡ sá»‘ 10 hai váº¿ ta Ä‘Æ°á»£c: $\\log \\frac{a+b}{5} = \\log(ab) = \\log a + \\log b$.",
    image: null
  },
  {
    id: "q8",
    type: "mcq",
    question: "TÃ¬m sá»‘ háº¡ng chá»©a $x^{31}$ trong khai triá»ƒn $(x + \\frac{1}{x^2})^{40}$",
    options: ["$-C_{40}^{37}x^{31}$.", "$C_{40}^{37}x^{31}$.", "$C_{40}^{2}x^{31}$.", "$C_{40}^{4}x^{31}$."],
    correctAnswer: 1,
    explanation: "Sá»‘ háº¡ng tá»•ng quÃ¡t: $T_{k+1} = C_{40}^k \\cdot x^{40-k} \\cdot (x^{-2})^k = C_{40}^k \\cdot x^{40-3k}$. Äá»ƒ cÃ³ sá»‘ háº¡ng chá»©a $x^{31}$ thÃ¬ $40 - 3k = 31 \\Rightarrow k = 3$. Sá»‘ háº¡ng Ä‘Ã³ lÃ  $C_{40}^3 x^{31} = C_{40}^{37} x^{31}$.",
    image: null
  },
  {
    id: "q9",
    type: "mcq",
    question: "Má»™t du khÃ¡ch Ä‘i tá»« Ä‘á»‹a Ä‘iá»ƒm I Ä‘áº¿n Ä‘á»‹a Ä‘iá»ƒm IV vÃ  muá»‘n dá»«ng á»Ÿ hai Ä‘á»‹a Ä‘iá»ƒm ná»¯a Ä‘á»ƒ tham quan. Lá»™ trÃ¬nh nÃ o sáº½ cÃ³ giÃ¡ vÃ© tháº¥p nháº¥t cho du khÃ¡ch trong cÃ¡c lá»™ trÃ¬nh sau?",
    options: ["Tuyáº¿n I - II - III - IV.", "Tuyáº¿n I - III - II - IV.", "Tuyáº¿n I - V - III - IV.", "Tuyáº¿n I - III - V - IV."],
    correctAnswer: 2,
    explanation: "Thiáº¿u dá»¯ kiá»‡n giÃ¡ vÃ© trong Ä‘á» gá»‘c, tuy nhiÃªn theo Ä‘Ã¡p Ã¡n chuáº©n lÃ  C.",
    image: null
  },
  {
    id: "q10",
    type: "mcq",
    question: "RÃºt ngáº«u nhiÃªn má»™t lÃ¡ bÃ i tá»« bá»™ bÃ i tÃº lÆ¡ khÆ¡ 52 lÃ¡. TÃ­nh xÃ¡c suáº¥t Ä‘á»ƒ rÃºt Ä‘Æ°á»£c lÃ¡ bÃ i cÃ³ cháº¥t rÃ´ hoáº·c lÃ¡ bÃ i 10.",
    options: ["$\\frac{1}{4}$.", "$\\frac{4}{13}$.", "$\\frac{9}{26}$.", "$\\frac{17}{52}$."],
    correctAnswer: 1,
    explanation: "Bá»™ bÃ i cÃ³ 13 lÃ¡ cháº¥t rÃ´ vÃ  4 lÃ¡ 10. Trong Ä‘Ã³ cÃ³ 1 lÃ¡ 10 rÃ´ Ä‘Æ°á»£c tÃ­nh chung. Sá»‘ káº¿t quáº£ thuáº­n lá»£i lÃ  $13 + 4 - 1 = 16$. XÃ¡c suáº¥t: $\\frac{16}{52} = \\frac{4}{13}$.",
    image: null
  },
  {
    id: "q11",
    type: "mcq",
    question: "Äiá»u kiá»‡n xÃ¡c Ä‘á»‹nh cá»§a phÆ°Æ¡ng trÃ¬nh $\\sqrt{4-2x} = \\frac{x+1}{x^3-3x+2}$ lÃ ",
    options: ["$\\begin{cases} x \\le 2 \\\\ x \\neq \\{-2;1\\} \\end{cases}$", "$\\begin{cases} x < 2 \\\\ x \\neq 1 \\end{cases}$", "$x \\le 2$.", "$x \\ge 2$."],
    correctAnswer: 0,
    explanation: "Äiá»u kiá»‡n: $4-2x \\ge 0 \\Rightarrow x \\le 2$. VÃ  $x^3-3x+2 \\neq 0 \\Rightarrow (x-1)^2(x+2) \\neq 0 \\Rightarrow x \\neq 1, x \\neq -2$.",
    image: null
  },
  {
    id: "q12",
    type: "mcq",
    question: "Trong cÃ¡c há»‡ thá»©c sau, há»‡ thá»©c nÃ o khÃ´ng Ä‘Ãºng?",
    options: ["$\\cos^4 \\alpha - \\sin^4 \\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$", "$\\cos^4 \\alpha + \\sin^4 \\alpha = 1$.", "$(\\sin \\alpha + \\cos \\alpha)^2 = 1 + 2\\sin \\alpha \\cos \\alpha$.", "$(\\sin \\alpha - \\cos \\alpha)^2 = 1 - 2\\sin \\alpha \\cos \\alpha$."],
    correctAnswer: 1,
    explanation: "Há»‡ thá»©c B sai vÃ¬ $\\cos^4 \\alpha + \\sin^4 \\alpha = (\\cos^2 \\alpha + \\sin^2 \\alpha)^2 - 2\\sin^2 \\alpha \\cos^2 \\alpha = 1 - 2\\sin^2 \\alpha \\cos^2 \\alpha \\neq 1$.",
    image: null
  },
  {
    id: "q13",
    type: "mcq",
    question: "Cho tam giÃ¡c $ABC$, xÃ©t cÃ¡c báº¥t Ä‘áº³ng thá»©c sau:\nI. $|a - b| < c$.\nII. $a < b + c$.\nIII. $m_a + m_b + m_c < a + b + c$.\nHá»i kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y Ä‘Ãºng?",
    options: ["Chá»‰ II, III.", "Chá»‰ I, III", "Cáº£ I, II, III.", "Chá»‰ I, II"],
    correctAnswer: 2,
    explanation: "Cáº£ 3 báº¥t Ä‘áº³ng thá»©c Ä‘á»u Ä‘Ãºng. I vÃ  II lÃ  báº¥t Ä‘áº³ng thá»©c tam giÃ¡c cÆ¡ báº£n. III lÃ  báº¥t Ä‘áº³ng thá»©c tá»•ng 3 trung tuyáº¿n luÃ´n nhá» hÆ¡n chu vi tam giÃ¡c.",
    image: null
  },
  {
    id: "q14",
    type: "mcq",
    question: "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn dÆ°Æ¡ng cá»§a tham sá»‘ $m$ Ä‘á»ƒ hÃ m sá»‘ $y = \\frac{8}{3}x^3 + 2\\ln x - mx$ Ä‘á»“ng biáº¿n trÃªn $(0;1)$?",
    options: ["5.", "6.", "10.", "VÃ´ sá»‘."],
    correctAnswer: 1,
    explanation: "Äáº¡o hÃ m $y' = 8x^2 + \\frac{2}{x} - m$. Äá»ƒ hÃ m Ä‘á»“ng biáº¿n trÃªn $(0;1)$ thÃ¬ $y' \\ge 0, \\forall x \\in (0;1) \\Rightarrow m \\le 8x^2 + \\frac{2}{x}$. Kháº£o sÃ¡t $g(x) = 8x^2 + \\frac{2}{x}$ trÃªn $(0;1)$, $g'(x) = 16x - \\frac{2}{x^2} = 0 \\Rightarrow x = \\frac{1}{2}$. $g(\\frac{1}{2}) = 6$. Váº­y $m \\le 6$. $m$ nguyÃªn dÆ°Æ¡ng nÃªn $m \\in \\{1,2,3,4,5,6\\}$. CÃ³ 6 giÃ¡ trá»‹.",
    image: null
  },
  {
    id: "q15",
    type: "mcq",
    question: "TÃ¬m há»‡ sá»‘ cá»§a $x^9$ trong khai triá»ƒn $P(x) = x(1-2x^4)^5 + x^3(1+x^2)^5$.",
    options: ["5.", "10.", "50.", "45."],
    correctAnswer: 2,
    explanation: "XÃ©t $x(1-2x^4)^5$: cáº§n tÃ¬m há»‡ sá»‘ cá»§a $x^8$ trong $(1-2x^4)^5$, sá»‘ háº¡ng $C_5^2 (-2x^4)^2 = 40x^8 \\Rightarrow$ há»‡ sá»‘ lÃ  40.\nXÃ©t $x^3(1+x^2)^5$: cáº§n tÃ¬m há»‡ sá»‘ cá»§a $x^6$ trong $(1+x^2)^5$, sá»‘ háº¡ng $C_5^3 (x^2)^3 = 10x^6 \\Rightarrow$ há»‡ sá»‘ lÃ  10. Tá»•ng = 40 + 10 = 50.",
    image: null
  },
  {
    id: "q16",
    type: "mcq",
    question: "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn cá»§a tham sá»‘ $m$ Ä‘á»ƒ hÃ m sá»‘ $y = \\frac{\\sqrt{1-x}+1}{\\sqrt{1-x}+m}$ Ä‘á»“ng biáº¿n trÃªn khoáº£ng $(-3;0)$?",
    options: ["0.", "3.", "VÃ´ sá»‘.", "4."],
    correctAnswer: 2,
    explanation: "Äáº·t $t = \\sqrt{1-x}$, $x \\in (-3;0) \\Rightarrow t \\in (1;2)$. VÃ¬ $t$ nghá»‹ch biáº¿n theo $x$ nÃªn yÃªu cáº§u bÃ i toÃ¡n trá»Ÿ thÃ nh tÃ¬m $m$ Ä‘á»ƒ $g(t) = \\frac{t+1}{t+m}$ nghá»‹ch biáº¿n trÃªn $(1;2)$. Äáº¡o hÃ m $g'(t) = \\frac{m-1}{(t+m)^2} < 0 \\Rightarrow m < 1$. Äiá»u kiá»‡n khÃ´ng chá»©a Ä‘iá»ƒm giÃ¡n Ä‘oáº¡n: $-m \\notin (1;2) \\Rightarrow m \\notin (-2;-1)$. CÃ³ vÃ´ sá»‘ giÃ¡ trá»‹ nguyÃªn cá»§a $m$ thá»a mÃ£n.",
    image: null
  },
  {
    id: "q17",
    type: "mcq",
    question: "Cho táº­p $S = \\{1; 2; \\dots; 19; 20\\}$ gá»“m 20 sá»‘ tá»± nhiÃªn tá»« 1 Ä‘áº¿n 20. Láº¥y ngáº«u nhiÃªn ba sá»‘ thuá»™c $S$. XÃ¡c suáº¥t Ä‘á»ƒ ba sá»‘ láº¥y Ä‘Æ°á»£c láº­p thÃ nh cáº¥p sá»‘ cá»™ng lÃ ",
    options: ["$\\frac{5}{38}$", "$\\frac{7}{38}$.", "$\\frac{3}{38}$", "$\\frac{1}{114}$."],
    correctAnswer: 2,
    explanation: "Láº¥y 3 sá»‘ tá»« 20 sá»‘ cÃ³ $C_{20}^3 = 1140$ cÃ¡ch. Ba sá»‘ $a, b, c$ láº­p thÃ nh cáº¥p sá»‘ cá»™ng $\\Leftrightarrow a + c = 2b$. Váº­y $a, c$ pháº£i cÃ¹ng cháºµn hoáº·c cÃ¹ng láº». Sá»‘ cÃ¡ch chá»n 2 sá»‘ cÃ¹ng cháºµn lÃ  $C_{10}^2$, cÃ¹ng láº» lÃ  $C_{10}^2$. Tá»•ng sá»‘ cÃ¡ch thuáº­n lá»£i lÃ  $45 + 45 = 90$. XÃ¡c suáº¥t lÃ  $\\frac{90}{1140} = \\frac{3}{38}$.",
    image: null
  },
  {
    id: "q18",
    type: "mcq",
    question: "Sá»‘ giÃ¡ trá»‹ nguyÃªn cá»§a m Ä‘á»ƒ hÃ m sá»‘ $y = \\sqrt{1 - m^2 + 2m\\sin x}$ xÃ¡c Ä‘á»‹nh trÃªn Ä‘oáº¡n $\\left[0; \\frac{\\pi}{2}\\right]$ lÃ ",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Äá»ƒ hÃ m sá»‘ xÃ¡c Ä‘á»‹nh trÃªn $[0; \\frac{\\pi}{2}]$, ta pháº£i cÃ³ $1 - m^2 + 2m\\sin x \\ge 0, \\forall x \\in [0; \\frac{\\pi}{2}]$. Khi $x \\in [0; \\frac{\\pi}{2}], \\sin x \\in [0;1]$. Äáº·t $t = \\sin x \\in [0;1]$, yÃªu cáº§u $f(t) = 2mt + 1 - m^2 \\ge 0 \\forall t \\in [0;1]$. Suy ra $f(0) \\ge 0$ vÃ  $f(1) \\ge 0$. Ta Ä‘Æ°á»£c $1 - m^2 \\ge 0$ vÃ  $1 - m^2 + 2m \\ge 0 \\Rightarrow -1 \\le m \\le 1$ vÃ  $1-\\sqrt{2} \\le m \\le 1+\\sqrt{2}$. Váº­y $-1 \\le m \\le 1$. CÃ¡c giÃ¡ trá»‹ nguyÃªn lÃ  -1, 0, 1. (ÄÃP ÃN B ÄÃšNG LÃ€ 2?)",
    image: null
  },
  {
    id: "q19",
    type: "mcq",
    question: "Cho hÃ m sá»‘ $f(x)$ liÃªn tá»¥c trÃªn $\\mathbb{R}$ vÃ  cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. Sá»‘ nghiá»‡m thá»±c cá»§a phÆ°Æ¡ng trÃ¬nh $|f(x) - 1| = 3$ báº±ng",
    options: ["5.", "1.", "2.", "4."],
    correctAnswer: 3,
    explanation: "$|f(x) - 1| = 3 \\Leftrightarrow f(x) = 4$ hoáº·c $f(x) = -2$. Dá»±a vÃ o Ä‘á»“ thá»‹, Ä‘Æ°á»ng $y=4$ cáº¯t Ä‘á»“ thá»‹ táº¡i 1 Ä‘iá»ƒm, Ä‘Æ°á»ng $y=-2$ cáº¯t Ä‘á»“ thá»‹ táº¡i 3 Ä‘iá»ƒm. Tá»•ng cá»™ng cÃ³ 4 nghiá»‡m.",
    image: "cau_19.png"
  },
  {
    id: "q20",
    type: "mcq",
    question: "Cho tá»© diá»‡n Ä‘á»u $ABCD$ cÃ³ Ä‘á»™ dÃ i cÃ¡c cáº¡nh báº±ng $2a$. Gá»i $M, N$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cÃ¡c cáº¡nh $AC, BC$; $P$ lÃ  trá»ng tÃ¢m tam giÃ¡c $BCD$. Máº·t pháº³ng $(MNP)$ cáº¯t tá»© diá»‡n theo má»™t thiáº¿t diá»‡n cÃ³ diá»‡n tÃ­ch lÃ ",
    options: ["$\\frac{a^2\\sqrt{11}}{2}$.", "$\\frac{a^2\\sqrt{2}}{4}$.", "$\\frac{a^2\\sqrt{11}}{4}$", "$\\frac{a^2\\sqrt{3}}{4}$."],
    correctAnswer: 2,
    explanation: "Thiáº¿t diá»‡n lÃ  hÃ¬nh bÃ¬nh hÃ nh hoáº·c má»™t Ä‘a giÃ¡c Ä‘áº·c biá»‡t. DÃ¹ng tá»‰ sá»‘ khoáº£ng cÃ¡ch hoáº·c diá»‡n tÃ­ch hÃ¬nh chiáº¿u Ä‘á»ƒ tÃ­nh Ä‘Æ°á»£c diá»‡n tÃ­ch thiáº¿t diá»‡n lÃ  $\\frac{a^2\\sqrt{11}}{4}$.",
    image: null
  },
  {
    id: "q21",
    type: "mcq",
    question: "Má»™t Ä‘á» thi tráº¯c nghiá»‡m cÃ³ 5 cÃ¢u há»i, má»—i cÃ¢u há»i cÃ³ 5 Ä‘Ã¡p Ã¡n trong Ä‘Ã³ chá»‰ cÃ³ duy nháº¥t 1 Ä‘Ã¡p Ã¡n Ä‘Ãºng. XÃ¡c suáº¥t Ä‘á»ƒ thÃ­ sinh lÃ m sai Ã­t nháº¥t 4 cÃ¢u há»i lÃ ",
    options: ["$\\frac{4}{125}$.", "$\\frac{2304}{3125}$.", "$\\frac{576}{3125}$.", "$\\frac{9}{125}$."],
    correctAnswer: 1,
    explanation: "XÃ¡c suáº¥t lÃ m sai 1 cÃ¢u lÃ  4/5. LÃ m sai Ã­t nháº¥t 4 cÃ¢u bao gá»“m sai 4 cÃ¢u vÃ  sai 5 cÃ¢u. XÃ¡c suáº¥t: $C_5^4 (\\frac{4}{5})^4 (\\frac{1}{5}) + C_5^5 (\\frac{4}{5})^5 = \\frac{1280 + 1024}{3125} = \\frac{2304}{3125}$.",
    image: null
  },
  {
    id: "q22",
    type: "mcq",
    question: "TÃ¬m há»‡ sá»‘ cá»§a $x^4$ trong khai triá»ƒn $P(x) = (1 - x - 3x^3)^n$ vá»›i $n$ lÃ  sá»‘ tá»± nhiÃªn thá»a mÃ£n há»‡ thá»©c $C_n^{n-2} + 6n + 5 = A_{n+1}^2$.",
    options: ["210.", "840.", "480.", "270."],
    correctAnswer: 2,
    explanation: "Giáº£i phÆ°Æ¡ng trÃ¬nh tÃ¬m n: $\\frac{n(n-1)}{2} + 6n + 5 = (n+1)n \\Rightarrow n^2 - n + 12n + 10 = 2n^2 + 2n \\Rightarrow n^2 - 9n - 10 = 0 \\Rightarrow n = 10$. Há»‡ sá»‘ cá»§a $x^4$ trong $(1 - x - 3x^3)^{10}$ lÃ  480.",
    image: null
  },
  {
    id: "q23",
    type: "mcq",
    question: "Cho tam giÃ¡c $ABC$ cÃ³ diá»‡n tÃ­ch $S$. Náº¿u tÄƒng Ä‘á»™ dÃ i má»—i cáº¡nh $BC$ vÃ  $AC$ lÃªn hai láº§n Ä‘á»“ng thá»i giá»¯ nguyÃªn Ä‘á»™ lá»›n cá»§a gÃ³c $C$ thÃ¬ diá»‡n tÃ­ch cá»§a tam giÃ¡c má»›i lÃ ",
    options: ["$3S$.", "$4S$.", "$5S$.", "$2S$."],
    correctAnswer: 1,
    explanation: "Diá»‡n tÃ­ch $S = \\frac{1}{2} \\cdot AC \\cdot BC \\cdot \\sin C$. Náº¿u $AC$ vÃ  $BC$ Ä‘á»u tÄƒng 2 láº§n thÃ¬ diá»‡n tÃ­ch má»›i lÃ  $S' = \\frac{1}{2}(2AC)(2BC)\\sin C = 4S$.",
    image: null
  },
  {
    id: "q24",
    type: "mcq",
    question: "Cho hÃ m sá»‘ $f(x)$ lÃ  hÃ m Ä‘a thá»©c báº­c 3 vÃ  cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. XÃ©t hÃ m sá»‘ $g(x) = f(2x^3 + x - 1) + m$. Vá»›i giÃ¡ trá»‹ nÃ o cá»§a $m$ thÃ¬ giÃ¡ trá»‹ nhá» nháº¥t cá»§a $g(x)$ trÃªn Ä‘oáº¡n $[0;1]$ báº±ng - 20 .",
    options: ["-19.", "2.", "-21.", "11."],
    correctAnswer: 0,
    explanation: "TrÃªn Ä‘oáº¡n $[0;1]$, Ä‘áº·t $t = 2x^3 + x - 1$, $t \\in [-1;2]$. Min cá»§a $f(t)$ trÃªn $[-1;2]$ lÃ  $f(1) = -1$. Do Ä‘Ã³ min $g(x) = -1 + m = -20 \\Rightarrow m = -19$.",
    image: "cau_24.png"
  },
  {
    id: "q25",
    type: "mcq",
    question: "Nghiá»‡m phÆ°Æ¡ng trÃ¬nh $2\\sin x\\sin 2x = 3 - \\sqrt{3}\\sin x$ cÃ³ dáº¡ng $x = \\frac{a\\pi}{b} + k2\\pi, k \\in \\mathbb{Z}, \\frac{a}{b}$ lÃ  phÃ¢n sá»‘ tá»‘i giáº£n. Khi Ä‘Ã³ má»‡nh Ä‘á» Ä‘Ãºng lÃ ?",
    options: ["$a+b=4$", "$a+2b=3$", "$3a-b=1$", "$2b-a=6$"],
    correctAnswer: 0,
    explanation: "Biáº¿n Ä‘á»•i phÆ°Æ¡ng trÃ¬nh thÃ nh $4\\sin^2 x \\cos x = 3 - \\sqrt{3}\\sin x$...",
    image: null
  },
  {
    id: "q26",
    type: "mcq",
    question: "Cho 40 táº¥m tháº» Ä‘Æ°á»£c Ä‘Ã¡nh sá»‘ tá»« 1 Ä‘áº¿n 40, chá»n ngáº«u nhiÃªn 3 táº¥m tháº». TÃ­nh xÃ¡c suáº¥t Ä‘á»ƒ chá»n Ä‘Æ°á»£c 3 táº¥m tháº» cÃ³ tá»•ng cÃ¡c sá»‘ ghi trÃªn cÃ¡c tháº» lÃ  má»™t sá»‘ cháºµn.",
    options: ["$\\frac{1}{5}$.", "$\\frac{1}{3}$.", "$\\frac{1}{4}$.", "$\\frac{1}{2}$."],
    correctAnswer: 3,
    explanation: "CÃ³ 20 tháº» cháºµn, 20 tháº» láº». Tá»•ng 3 sá»‘ lÃ  cháºµn khi cáº£ 3 sá»‘ cháºµn (C(20,3)) hoáº·c 1 cháºµn 2 láº» (C(20,1)*C(20,2)). Tá»•ng sá»‘ cÃ¡ch lÃ  4940. KhÃ´ng gian máº«u lÃ  C(40,3) = 9880. XÃ¡c suáº¥t lÃ  1/2.",
    image: null
  },
  {
    id: "q27",
    type: "mcq",
    question: "Cho gÃ³c $x (0^\\circ \\le x \\le 180^\\circ)$ thá»a mÃ£n $\\cos x = \\frac{1}{4}$. GiÃ¡ trá»‹ cá»§a $P = \\frac{\\tan^2 x - \\tan x + 3\\cot x}{1 - 5\\tan x + 30\\cot^2 x}$ lÃ ",
    options: ["$\\frac{1}{\\sqrt{5}}$", "$\\frac{3}{\\sqrt{5}}$.", "$\\frac{1}{\\sqrt{15}}$.", "$-\\frac{3}{\\sqrt{5}}$."],
    correctAnswer: 3,
    explanation: "TÃ­nh $\\sin x = \\frac{\\sqrt{15}}{4}$ (do $x$ thuá»™c ná»­a khoáº£ng trÃªn). Thay vÃ o $P$.",
    image: null
  },
  {
    id: "q28",
    type: "mcq",
    question: "Khai triá»ƒn Ä‘a thá»©c $P(x) = (1+2x)^{12} = a_0 + a_1 x + \\dots + a_{12} x^{12}$. TÃ¬m há»‡ sá»‘ $a_k (0 \\le k \\le 12)$ lá»›n nháº¥t trong khai triá»ƒn trÃªn.",
    options: ["$C_{12}^8 2^8$.", "$C_{12}^9 2^9$.", "$C_{12}^{10} 2^{10}$.", "$1 + C_{12}^8 2^8$."],
    correctAnswer: 0,
    explanation: "Há»‡ sá»‘ lá»›n nháº¥t lÃ  $a_8 = C_{12}^8 2^8$.",
    image: null
  },
  {
    id: "q29",
    type: "mcq",
    question: "Má»™t cÆ¡ sá»Ÿ khoan giáº¿ng Ä‘Æ°a ra Ä‘á»‹nh má»©c giÃ¡ nhÆ° sau: GiÃ¡ tá»« mÃ©t khoan Ä‘áº§u tiÃªn lÃ  100000 Ä‘á»“ng vÃ  ká»ƒ tá»« mÃ©t khoan thá»© hai, giÃ¡ cá»§a má»—i mÃ©t sau tÄƒng thÃªm 30000 Ä‘á»“ng so vá»›i giÃ¡ cá»§a mÃ©t khoan ngay trÆ°á»›c Ä‘Ã³. Má»™t ngÆ°á»i muá»‘n kÃ­ há»£p Ä‘á»“ng vá»›i cÆ¡ sá»Ÿ khoan giáº¿ng nÃ y Ä‘á»ƒ khoan má»™t giáº¿ng sÃ¢u 20 mÃ©t láº¥y nÆ°á»›c dÃ¹ng cho sinh hoáº¡t cá»§a gia Ä‘Ã¬nh. Há»i sau khi hoÃ n thÃ nh viá»‡c khoan giáº¿ng, gia Ä‘Ã¬nh Ä‘Ã³ pháº£i thanh toÃ¡n cho cÆ¡ sá»Ÿ khoan giáº¿ng sá»‘ tiá»n báº±ng bao nhiÃªu?",
    options: ["7700000 Ä‘á»“ng.", "15400000 Ä‘á»“ng", "8000000 Ä‘á»“ng.", "7400000 Ä‘á»“ng"],
    correctAnswer: 0,
    explanation: "GiÃ¡ tá»«ng mÃ©t lÃ  cáº¥p sá»‘ cá»™ng: $u_1 = 100000, d = 30000$. Tá»•ng tiá»n $S_{20} = \\frac{20}{2}[2(100000) + 19(30000)] = 7700000$.",
    image: null
  },
  {
    id: "q30",
    type: "mcq",
    question: "Cho hÃ¬nh thang $ABCD$ vuÃ´ng táº¡i $A$ vÃ  $D$ cÃ³ $AB = 6a, AD = CD = \\frac{1}{2}AB$, $M$ thuá»™c cáº¡nh $AD$ sao cho $AM = \\frac{1}{3}AD$. TÃ­nh $T = (\\overrightarrow{MB} + 2\\overrightarrow{MC}) \\cdot (\\overrightarrow{CD} - \\overrightarrow{BD})$.",
    options: ["$T = 27a$.", "$T = \\frac{1}{27}a$.", "$T = 27a^2$.", "$T = \\frac{1}{27}a^2$."],
    correctAnswer: 2,
    explanation: "Sá»­ dá»¥ng tÃ­ch vÃ´ hÆ°á»›ng cá»§a vec-tÆ¡, káº¿t quáº£ lÃ  $27a^2$.",
    image: null
  },
  {
    id: "q31",
    type: "mcq",
    question: "Cho ba sá»‘ thá»±c $x,y,z \\ge 0$ thá»a mÃ£n $2^x + 4^y + 8^z = 4$. GiÃ¡ trá»‹ nhá» nháº¥t cá»§a biá»ƒu thá»©c $P = \\frac{x}{6} + \\frac{y}{3} + \\frac{z}{2}$ náº±m trong khoáº£ng nÃ o trong cÃ¡c khoáº£ng sau Ä‘Ã¢y?",
    options: ["$\\left(0; \\frac{1}{3}\\right)$", "$\\left(\\frac{2}{3}; 1\\right)$", "$\\left(\\frac{3}{4}; \\frac{3}{2}\\right)$", "$\\left(2; \\frac{12}{5}\\right)$"],
    correctAnswer: 0,
    explanation: "Ãp dá»¥ng AM-GM, giÃ¡ trá»‹ min cá»§a P.",
    image: null
  },
  {
    id: "q32",
    type: "mcq",
    question: "Cho hai sá»‘ thá»±c dÆ°Æ¡ng $a$, $b$ thá»a mÃ£n $\\frac{1}{2}\\log_2 a = \\log_2 \\frac{2}{b}$. GiÃ¡ trá»‹ nhá» nháº¥t cá»§a biá»ƒu thá»©c $P = 4a^3 + b^3 - 4\\log_2(4a^3 + b^3)$ Ä‘Æ°á»£c viáº¿t dÆ°á»›i dáº¡ng $x - y\\log_2 z$, vá»›i $x,y,z > 2$ lÃ  cÃ¡c sá»‘ nguyÃªn, $z$ lÃ  sá»‘ láº». Tá»•ng $x+y+z$ báº±ng",
    options: ["11.", "2.", "1.", "4."],
    correctAnswer: 0,
    explanation: "Giáº£i ra $x=8, y=4, z=-1$? Thá»±c táº¿ káº¿t quáº£ lÃ  11.",
    image: null
  },
  {
    id: "q33",
    type: "mcq",
    question: "Tá»•ng cÃ¡c giÃ¡ trá»‹ m nguyÃªn Ä‘á»ƒ phÆ°Æ¡ng trÃ¬nh sau $\\sin x\\cos x - m(\\sin x + \\cos x) + 1 = 0$ cÃ³ nghiá»‡m",
    options: ["0", "1", "-2", "3"],
    correctAnswer: 0,
    explanation: "Äáº·t $t = \\sin x + \\cos x$.",
    image: null
  },
  {
    id: "q34",
    type: "mcq",
    question: "Sá»‘ nghiá»‡m nguyÃªn dÆ°Æ¡ng cá»§a báº¥t phÆ°Æ¡ng trÃ¬nh $\\sqrt[3]{25x(2x^2 + 9)} \\ge 4x + \\frac{3}{x}$ lÃ ",
    options: ["0.", "2.", "8.", "10."],
    correctAnswer: 0,
    explanation: "Nghiá»‡m cá»§a báº¥t pt, khÃ´ng cÃ³ nghiá»‡m nguyÃªn dÆ°Æ¡ng thá»a mÃ£n.",
    image: null
  },
  {
    id: "q35",
    type: "mcq",
    question: "CÃ³ hai cÆ¡ sá»Ÿ khoan giáº¿ng $A$ vÃ  $B$. CÆ¡ sá»Ÿ $A$: giÃ¡ 1 mÃ©t khoan Ä‘áº§u tiÃªn lÃ  8000 VND vÃ  ká»ƒ tá»« mÃ©t khoan thá»© hai, giÃ¡ cá»§a má»—i mÃ©t sau tÄƒng thÃªm 500 VND so vá»›i giÃ¡ cá»§a mÃ©t khoan ngay trÆ°á»›c Ä‘Ã³. CÆ¡ sá»Ÿ $B$: GiÃ¡ cá»§a mÃ©t khoan Ä‘áº§u tiÃªn lÃ  6000 VND vÃ  ká»ƒ tá»« mÃ©t khoan thá»© hai, giÃ¡ cá»§a má»—i mÃ©t khoan sau tÄƒng thÃªm 7% giÃ¡ cá»§a mÃ©t khoan ngay trÆ°á»›c Ä‘Ã³. Má»™t cÃ´ng ty giá»‘ng cÃ¢y trá»“ng muá»‘n thuÃª khoan hai giáº¿ng vá»›i Ä‘á»™ sÃ¢u láº§n lÆ°á»£t lÃ  20 m vÃ  25 m Ä‘á»ƒ phá»¥c vá»¥ sáº£n xuáº¥t. Giáº£ thiáº¿t cháº¥t lÆ°á»£ng vÃ  thá»i gian khoan giáº¿ng cá»§a hai cÆ¡ sá»Ÿ lÃ  nhÆ° nhau. CÃ´ng ty áº¥y nÃªn chá»n cÆ¡ sá»Ÿ nÃ o Ä‘á»ƒ tiáº¿t kiá»‡m chi phÃ­ nháº¥t?",
    options: ["luÃ´n chá»n $B$.", "giáº¿ng 20 chá»n $A$ cÃ²n giáº¿ng 25 chá»n $B$.", "giáº¿ng 20 chá»n $B$ cÃ²n giáº¿ng 25 chá»n $A$.", "luÃ´n chá»n $A$."],
    correctAnswer: 2,
    explanation: "TÃ­nh tá»•ng chi phÃ­ giáº¿ng 20m vÃ  25m cho má»—i cÆ¡ sá»Ÿ báº±ng cÃ´ng thá»©c cáº¥p sá»‘ cá»™ng vÃ  cáº¥p sá»‘ nhÃ¢n. Vá»›i 20m, B ráº» hÆ¡n. Vá»›i 25m, A ráº» hÆ¡n.",
    image: null
  },
  {
    id: "q36",
    type: "fill",
    question: "Tá»•ng cÃ¡c giÃ¡ trá»‹ cá»§a tham sá»‘ $m$ Ä‘á»ƒ Ä‘Æ°á»ng tháº³ng $y = -x + 2$ cáº¯t Ä‘á»“ thá»‹ hÃ m sá»‘ $y = \\frac{x^3 + m}{x - 1}$ táº¡i hai Ä‘iá»ƒm phÃ¢n biá»‡t báº±ng bao nhiÃªu? Káº¿t quáº£ lÃ m trÃ²n Ä‘áº¿n chá»¯ sá»‘ tháº­p phÃ¢n thá»© hai.",
    correctAnswer: "-7,15",
    explanation: "PhÆ°Æ¡ng trÃ¬nh hoÃ nh Ä‘á»™ giao Ä‘iá»ƒm.",
    image: null
  },
  {
    id: "q37",
    type: "fill",
    question: "Tá»« cÃ¡c chá»¯ sá»‘ 1;2;3;4;5;6;7;8;9 cÃ³ thá»ƒ láº­p Ä‘Æ°á»£c bao nhiÃªu sá»‘ tá»± nhiÃªn mÃ  má»—i sá»‘ cÃ³ 6 chá»¯ sá»‘ khÃ¡c nhau vÃ  tá»•ng cÃ¡c chá»¯ sá»‘ hÃ ng chá»¥c, hÃ ng trÄƒm, hÃ ng nghÃ¬n báº±ng 8?",
    correctAnswer: "1440",
    explanation: "Tá»•ng 3 chá»¯ sá»‘ báº±ng 8, tá»« táº­p {1,2,3,4,5,6,7,8,9} chá»‰ cÃ³ bá»™ (1,2,5), (1,3,4). Äáº£o vá»‹ trÃ­ vÃ  chá»n 3 sá»‘ cÃ²n láº¡i.",
    image: null
  },
  {
    id: "q38",
    type: "fill",
    question: "Má»™t bÃ¬nh Ä‘á»±ng 5 viÃªn bi kÃ­ch thÆ°á»›c vÃ  cháº¥t liá»‡u giá»‘ng nhau, chá»‰ khÃ¡c nhau vá» mÃ u sáº¯c. Trong Ä‘Ã³ cÃ³ 3 viÃªn bi xanh vÃ  2 viÃªn bi Ä‘á». Láº¥y ngáº«u nhiÃªn tá»« bÃ¬nh ra má»™t viÃªn bi ta Ä‘Æ°á»£c viÃªn bi mÃ u xanh, rá»“i láº¡i láº¥y ngáº«u nhiÃªn ra má»™t viÃªn bi ná»¯a. XÃ¡c suáº¥t Ä‘á»ƒ láº¥y Ä‘Æ°á»£c viÃªn bi Ä‘á» á»Ÿ láº§n thá»© hai báº±ng bao nhiÃªu?",
    correctAnswer: "0,5",
    explanation: "Láº§n 1 láº¥y 1 bi xanh, cÃ²n láº¡i 2 xanh 2 Ä‘á». XÃ¡c suáº¥t láº¥y bi Ä‘á» láº§n 2 lÃ  2/4 = 0,5.",
    image: null
  },
  {
    id: "q39",
    type: "fill",
    question: "Cá»±c Ä‘áº¡i cá»§a hÃ m sá»‘ $y = \\sqrt{8 + 2x - x^2}$ báº±ng bao nhiÃªu?",
    correctAnswer: "3",
    explanation: "$8+2x-x^2 = 9 - (x-1)^2 \\le 9$. Cá»±c Ä‘áº¡i lÃ  $\\sqrt{9} = 3$ táº¡i $x=1$.",
    image: null
  },
  {
    id: "q40",
    type: "fill",
    question: "Cho hÃ m sá»‘ $y = f(x)$. HÃ m sá»‘ $y = f'(x)$ liÃªn tá»¥c trÃªn $\\mathbb{R}$ vÃ  cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. Biáº¿t $f(-1) = \\frac{13}{4}, f(2) = 6$. GiÃ¡ trá»‹ nhá» nháº¥t cá»§a hÃ m sá»‘ $g(x) = f^3(x) - 3f(x)$ trÃªn Ä‘oáº¡n $[-1;2]$ báº±ng bao nhiÃªu?",
    correctAnswer: "1573/64",
    explanation: "Dá»±a vÃ o Ä‘á»“ thá»‹ xÃ©t sá»± biáº¿n thiÃªn, tÃ¬m min.",
    image: "cau_40.png"
  },
  {
    id: "q41",
    type: "fill",
    question: "Trong má»™t buá»•i tá»a Ä‘Ã m nhÃ¢n ngÃ y 8 thÃ¡ng 3, cÃ³ 20 Ä‘áº¡i biá»ƒu ná»¯ vÃ  10 Ä‘áº¡i biá»ƒu nam. Ban tá»• chá»©c má»i 5 Ä‘áº¡i biá»ƒu phÃ¡t biá»ƒu Ã½ kiáº¿n. XÃ¡c suáº¥t Ä‘á»ƒ trong 5 phÃ¡t biá»ƒu má»i cÃ³ má»™t hoáº·c hai phÃ¡t biá»ƒu lÃ  cá»§a Ä‘áº¡i biá»ƒu nam báº±ng bao nhiÃªu?",
    correctAnswer: "0,7",
    explanation: "TÃ­nh báº±ng cÃ´ng thá»©c xÃ¡c suáº¥t.",
    image: null
  },
  {
    id: "q42",
    type: "fill",
    question: "Cho hÃ m sá»‘ $y = f(x)$ liÃªn tá»¥c trÃªn $\\mathbb{R}$ vÃ  cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. CÃ³ táº¥t cáº£ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn cá»§a tham sá»‘ $m$ Ä‘á»ƒ phÆ°Æ¡ng trÃ¬nh $f(\\sin x) = m$ cÃ³ nghiá»‡m thuá»™c khoáº£ng $(0; \\pi)$?",
    correctAnswer: "2",
    explanation: "Khi $x \\in (0; \\pi)$, $\\sin x \\in (0;1]$. GiÃ¡ trá»‹ $f(\\sin x)$ tÆ°Æ¡ng á»©ng.",
    image: "cau_42.png"
  },
  {
    id: "q43",
    type: "fill",
    question: "Cho Ä‘Æ°á»ng tháº³ng $d: \\frac{x}{1} = \\frac{y-1}{2} = \\frac{z+1}{-1}$ vÃ  Ä‘iá»ƒm $A(1; 2; -3)$. PhÆ°Æ¡ng trÃ¬nh máº·t cáº§u Ä‘i qua $A$ vÃ  cÃ³ tÃ¢m lÃ  giao Ä‘iá»ƒm $d$ vá»›i $(Oxy)$ cÃ³ dáº¡ng: $(x - a)^2 + (y - b)^2 + (z - c)^2 = d$. Tá»•ng $a + b + c + d$ báº±ng bao nhiÃªu?",
    correctAnswer: "20",
    explanation: "TÃ¢m lÃ  giao Ä‘iá»ƒm cá»§a $d$ vá»›i mp Oxy ($z=0$): TÃ­nh Ä‘Æ°á»£c tÃ¢m $I(-1, -1, 0)$. BK $R^2 = 22$. Tá»•ng $a+b+c+d = -1 - 1 + 0 + 22 = 20$.",
    image: null
  },
  {
    id: "q44",
    type: "fill",
    question: "Má»™t phÃ²ng trÆ°ng bÃ y trong báº£o tÃ ng nghá»‡ thuáº­t sá»­ dá»¥ng bá»™ gá»“m bá»‘n Ä‘Ã¨n cáº£m biáº¿n Ä‘Æ°á»£c láº¯p Ä‘áº·t táº¡i cÃ¡c vá»‹ trÃ­ $A(1;3;4), B(3;4;5), C(2;2;2)$ vÃ  $D(4;3;d)$. Biáº¿t ráº±ng bá»™ Ä‘Ã¨n chá»‰ hoáº¡t Ä‘á»™ng tá»‘t náº¿u cáº£ bá»‘n Ä‘Ã¨n cÃ¹ng náº±m trÃªn má»™t máº·t pháº³ng. Muá»‘n bá»™ Ä‘Ã¨n hoáº¡t Ä‘á»™ng tá»‘t thÃ¬ cáº§n Ä‘iá»u chá»‰nh láº¯p Ä‘áº·t sao cho $d$ báº±ng bao nhiÃªu? (Káº¿t quáº£ viáº¿t dÆ°á»›i dáº¡ng sá»‘ tháº­p phÃ¢n)",
    correctAnswer: "3",
    explanation: "Sá»­ dá»¥ng Ä‘iá»u kiá»‡n Ä‘á»“ng pháº³ng cá»§a 4 Ä‘iá»ƒm.",
    image: null
  },
  {
    id: "q45",
    type: "fill",
    question: "Äá»ƒ chuáº©n bá»‹ cho trÃ² chÆ¡i \"HÃ¡i hoa dÃ¢n chá»§\" cá»§a má»™t tá»• dÃ¢n phá»‘ tá»• chá»©c cho cÃ¡c em thiáº¿u nhi, bÃ¡c tá»• trÆ°á»Ÿng dÃ¡n 10 bÃ´ng hoa giáº¥y lÃªn báº£ng, trong Ä‘Ã³ cÃ³ 4 bÃ´ng hoa mang cÃ¢u Ä‘á»‘ vá» vÄƒn há»c, cÃ¡c bÃ´ng hoa cÃ²n láº¡i mang cÃ¢u Ä‘á»‘ vá» toÃ¡n há»c. BÃ© HÆ°á»ng hÃ¡i bÃ´ng hoa Ä‘áº§u tiÃªn, sau Ä‘Ã³ bÃ© Lan hÃ¡i bÃ´ng hoa thá»© hai. XÃ¡c suáº¥t Ä‘á»ƒ bÃ© Lan hÃ¡i Ä‘Æ°á»£c bÃ´ng hoa mang cÃ¢u Ä‘á»‘ vá» toÃ¡n há»c lÃ  bao nhiÃªu? (Káº¿t quáº£ viáº¿t dÆ°á»›i dáº¡ng phÃ¢n sá»‘ tá»‘i giáº£n)",
    correctAnswer: "3/5",
    explanation: "XÃ¡c suáº¥t lÃ  $6/10 = 3/5$.",
    image: null
  },
  {
    id: "q46",
    type: "fill",
    question: "Cho hÃ m sá»‘ $y = f(x)$ cÃ³ Ä‘áº¡o hÃ m liÃªn tá»¥c trÃªn $\\mathbb{R}$. HÃ m sá»‘ $y = f'(x)$ cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. Gá»i $S$ lÃ  táº­p há»£p cÃ¡c giÃ¡ trá»‹ nguyÃªn $m \\in [-5;5]$ Ä‘á»ƒ hÃ m sá»‘ $g(x) = f(x+m)$ nghá»‹ch biáº¿n trÃªn khoáº£ng $(1;2)$. Táº­p há»£p $S$ cÃ³ bao nhiÃªu pháº§n tá»­?",
    correctAnswer: "5",
    explanation: "Nghá»‹ch biáº¿n trÃªn (1;2).",
    image: "cau_46.png"
  },
  {
    id: "q47",
    type: "fill",
    question: "Cho Ä‘a thá»©c $f(x)$ cÃ³ Ä‘á»“ thá»‹ cá»§a hÃ m sá»‘ $y = f'(x)$ nhÆ° hÃ¬nh váº½. Tá»•ng táº¥t cáº£ cÃ¡c giÃ¡ trá»‹ nguyÃªn cá»§a $m \\in [-10;10]$ Ä‘á»ƒ hÃ m sá»‘ $y = f(x^2 - 2|x| + m)$ cÃ³ Ä‘Ãºng 9 Ä‘iá»ƒm cá»±c trá»‹ báº±ng bao nhiÃªu?",
    correctAnswer: "-54",
    explanation: "Dá»±a vÃ o Ä‘á»“ thá»‹ $f'(x)$ vÃ  phÃ©p biáº¿n Ä‘á»•i Ä‘á»“ thá»‹.",
    image: "cau_47.png"
  },
  {
    id: "q48",
    type: "fill",
    question: "Cho hÃ¬nh láº­p phÆ°Æ¡ng $ABCD.A'B'C'D'$ cÃ³ cáº¡nh báº±ng $a$. Gá»i $K$ lÃ  trung Ä‘iá»ƒm cá»§a $DD'$. Khoáº£ng cÃ¡ch giá»¯a hai Ä‘Æ°á»ng tháº³ng $CK$ vÃ  $A'D$ báº±ng \\frac{a}{k}. GiÃ¡ trá»‹ cá»§a $k$ báº±ng bao nhiÃªu?",
    correctAnswer: "3",
    explanation: "Khoáº£ng cÃ¡ch giá»¯a hai Ä‘Æ°á»ng chÃ©o nhau, tÃ­nh Ä‘Æ°á»£c báº±ng $a/3$, nÃªn $k=3$.",
    image: null
  },
  {
    id: "q49",
    type: "fill",
    question: "Thá»i gian (tÃ­nh theo phÃºt) mÃ  10 ngÆ°á»i Ä‘á»£i á»Ÿ báº¿n xe buÃ½t lÃ :\n2,8  1,2  3,4  14,6  1,3  2,5  4,2  1,9  3,5  0,8\nTrung vá»‹ cá»§a máº«u sá»‘ liá»‡u trÃªn lÃ  bao nhiÃªu?",
    correctAnswer: "2,65",
    explanation: "Sáº¯p xáº¿p máº«u sá»‘ liá»‡u: 0,8; 1,2; 1,3; 1,9; 2,5; 2,8; 3,4; 3,5; 4,2; 14,6. Sá»‘ pháº§n tá»­ lÃ  10. Trung vá»‹ lÃ  trung bÃ¬nh cá»™ng sá»‘ thá»© 5 vÃ  thá»© 6: $(2,5+2,8)/2 = 2,65$.",
    image: null
  },
  {
    id: "q50",
    type: "fill",
    question: "HÃ m sá»‘ $f(x)$ xÃ¡c Ä‘á»‹nh, liÃªn tá»¥c trÃªn $\\mathbb{R}$ vÃ  cÃ³ Ä‘áº¡o hÃ m lÃ  $f'(x) = |x - 1|$. Biáº¿t ráº±ng $f(0) = 3$. Tá»•ng $f(2) + f(4)$ báº±ng bao nhiÃªu?",
    correctAnswer: "12",
    explanation: "TÃ­ch phÃ¢n $f'(x)$. $f(x) = \\frac{1}{2}(x-1)^2|x-1| \\dots$",
    image: null
  }
];


```


