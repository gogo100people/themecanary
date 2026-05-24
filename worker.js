// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  themecanary — Cloudflare Worker
//  curl -fsSL https://theme.olsite.dev | zsh
//  wget -qO- https://theme.olsite.dev | zsh
//  bash <(curl -fsSL https://theme.olsite.dev)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import SCRIPT from "./script.sh";

export default {
  async fetch(request) {
    const ua = request.headers.get("user-agent") ?? "";
    const url = new URL(request.url);

    const isBrowser =
      ua.includes("Mozilla") &&
      !ua.includes("curl") &&
      !ua.includes("Wget") &&
      !ua.includes("python");

    if (isBrowser && url.pathname === "/") {
      return new Response(BROWSER_PAGE, {
        headers: { "content-type": "text/html;charset=utf-8" },
      });
    }

    return new Response(SCRIPT, {
      headers: {
        "content-type": "text/plain;charset=utf-8",
        "cache-control": "no-cache",
        "x-content-type-options": "nosniff",
      },
    });
  },
};

const BROWSER_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>themecanary</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #24273a;
      color: #cad3f5;
      font-family: 'Berkeley Mono', 'Fira Code', 'JetBrains Mono', monospace;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .card { max-width: 480px; width: 100%; }
    .title { font-size: 1.1rem; color: #c6a0f6; margin-bottom: 0.25rem; letter-spacing: 0.05em; }
    .sub { font-size: 0.8rem; color: #5b6078; margin-bottom: 2.5rem; }
    .cmd-block {
      background: #1e2030;
      border: 1px solid #363a4f;
      border-radius: 8px;
      padding: 1rem 1.25rem;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .cmd-block:hover { border-color: #c6a0f6; }
    .cmd { font-size: 0.82rem; color: #a6da95; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .copy-btn {
      background: none;
      border: 1px solid #363a4f;
      border-radius: 4px;
      color: #5b6078;
      font-family: inherit;
      font-size: 0.7rem;
      padding: 0.2rem 0.6rem;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.15s;
    }
    .copy-btn:hover { border-color: #c6a0f6; color: #c6a0f6; }
    .copy-btn.copied { border-color: #a6da95; color: #a6da95; }
    .divider { border: none; border-top: 1px solid #363a4f; margin: 2rem 0; }
    .themes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 2rem; }
    .swatch { height: 28px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06); position: relative; overflow: hidden; }
    .swatch-inner { position: absolute; inset: 0; display: flex; }
    .swatch-seg { flex: 1; }
    .swatch-label { font-size: 0.65rem; color: #5b6078; text-align: center; margin-top: 0.3rem; }
    .footer { font-size: 0.72rem; color: #494d64; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="title">🐦 themecanary</div>
    <div class="sub">interactive terminal theme switcher</div>
    <div class="cmd-block" onclick="copy(this, 'curl -fsSL https://theme.olsite.dev | zsh')">
      <span class="cmd">curl -fsSL https://theme.olsite.dev | zsh</span>
      <button class="copy-btn">copy</button>
    </div>
    <div class="cmd-block" onclick="copy(this, 'wget -qO- https://theme.olsite.dev | zsh')">
      <span class="cmd">wget -qO- https://theme.olsite.dev | zsh</span>
      <button class="copy-btn">copy</button>
    </div>
    <div class="cmd-block" onclick="copy(this, 'bash <(curl -fsSL https://theme.olsite.dev)')">
      <span class="cmd">bash &lt;(curl -fsSL https://theme.olsite.dev)</span>
      <button class="copy-btn">copy</button>
    </div>
    <hr class="divider" />
    <div class="themes">
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#24273a"></div><div class="swatch-seg" style="background:#ed8796"></div><div class="swatch-seg" style="background:#a6da95"></div><div class="swatch-seg" style="background:#8aadf4"></div></div></div><div class="swatch-label">macchiato</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#1e1e2e"></div><div class="swatch-seg" style="background:#f38ba8"></div><div class="swatch-seg" style="background:#a6e3a1"></div><div class="swatch-seg" style="background:#89b4fa"></div></div></div><div class="swatch-label">mocha</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#eff1f5"></div><div class="swatch-seg" style="background:#d20f39"></div><div class="swatch-seg" style="background:#40a02b"></div><div class="swatch-seg" style="background:#1e66f5"></div></div></div><div class="swatch-label">latte</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#1a1b26"></div><div class="swatch-seg" style="background:#f7768e"></div><div class="swatch-seg" style="background:#9ece6a"></div><div class="swatch-seg" style="background:#7aa2f7"></div></div></div><div class="swatch-label">tokyo night</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#282a36"></div><div class="swatch-seg" style="background:#ff5555"></div><div class="swatch-seg" style="background:#50fa7b"></div><div class="swatch-seg" style="background:#bd93f9"></div></div></div><div class="swatch-label">dracula</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#2e3440"></div><div class="swatch-seg" style="background:#bf616a"></div><div class="swatch-seg" style="background:#a3be8c"></div><div class="swatch-seg" style="background:#81a1c1"></div></div></div><div class="swatch-label">nord</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#282828"></div><div class="swatch-seg" style="background:#fb4934"></div><div class="swatch-seg" style="background:#b8bb26"></div><div class="swatch-seg" style="background:#83a598"></div></div></div><div class="swatch-label">gruvbox</div></div>
      <div><div class="swatch"><div class="swatch-inner"><div class="swatch-seg" style="background:#ff0000"></div><div class="swatch-seg" style="background:#ffff00"></div><div class="swatch-seg" style="background:#ff0000"></div><div class="swatch-seg" style="background:#ffff00"></div></div></div><div class="swatch-label">hotdog 🌭</div></div>
    </div>
    <div class="footer">themecanary · theme.olsite.dev</div>
  </div>
  <script>
    function copy(el, text) {
      navigator.clipboard.writeText(text).then(() => {
        const btn = el.querySelector('.copy-btn');
        btn.textContent = 'copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 2000);
      });
    }
  </script>
</body>
</html>`;
