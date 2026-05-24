// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  themecanary — Cloudflare Worker
//  curl -fsSL https://theme.olsite.dev | zsh
//  wget -qO- https://theme.olsite.dev | zsh
//  bash <(curl -fsSL https://theme.olsite.dev)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SCRIPT = String.raw`#!/usr/bin/env zsh
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#  themecanary — theme.olsite.dev
#  curl -fsSL https://theme.olsite.dev | zsh
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

exec </dev/tty

reset=$'\033[0m'
bold=$'\033[1m'
dim=$'\033[2m'

set_palette() {
  local idx=$1 hex=$2
  local r=$((16#${hex:0:2}))
  local g=$((16#${hex:2:2}))
  local b=$((16#${hex:4:2}))
  printf '\033]4;%d;rgb:%02x/%02x/%02x\033\\' "$idx" "$r" "$g" "$b"
}
set_fg()     { printf '\033]10;#%s\033\\' "$1"; }
set_bg()     { printf '\033]11;#%s\033\\' "$1"; }
set_cursor() { printf '\033]12;#%s\033\\' "$1"; }

apply_catppuccin_macchiato() {
  set_palette  0 "494d64"; set_palette  1 "ed8796"; set_palette  2 "a6da95"
  set_palette  3 "eed49f"; set_palette  4 "8aadf4"; set_palette  5 "f5bde6"
  set_palette  6 "8bd5ca"; set_palette  7 "b8c0e0"; set_palette  8 "5b6078"
  set_palette  9 "ed8796"; set_palette 10 "a6da95"; set_palette 11 "eed49f"
  set_palette 12 "8aadf4"; set_palette 13 "f5bde6"; set_palette 14 "8bd5ca"
  set_palette 15 "a5adcb"
  set_bg "24273a"; set_fg "cad3f5"; set_cursor "f4dbd6"
  OMP_THEME="catppuccin_macchiato"
}
apply_catppuccin_mocha() {
  set_palette  0 "45475a"; set_palette  1 "f38ba8"; set_palette  2 "a6e3a1"
  set_palette  3 "f9e2af"; set_palette  4 "89b4fa"; set_palette  5 "f5c2e7"
  set_palette  6 "94e2d5"; set_palette  7 "bac2de"; set_palette  8 "585b70"
  set_palette  9 "f38ba8"; set_palette 10 "a6e3a1"; set_palette 11 "f9e2af"
  set_palette 12 "89b4fa"; set_palette 13 "f5c2e7"; set_palette 14 "94e2d5"
  set_palette 15 "a6adc8"
  set_bg "1e1e2e"; set_fg "cdd6f4"; set_cursor "f5e0dc"
  OMP_THEME="catppuccin_mocha"
}
apply_catppuccin_latte() {
  set_palette  0 "acb0be"; set_palette  1 "d20f39"; set_palette  2 "40a02b"
  set_palette  3 "df8e1d"; set_palette  4 "1e66f5"; set_palette  5 "ea76cb"
  set_palette  6 "179299"; set_palette  7 "acb0be"; set_palette  8 "bcc0cc"
  set_palette  9 "d20f39"; set_palette 10 "40a02b"; set_palette 11 "df8e1d"
  set_palette 12 "1e66f5"; set_palette 13 "ea76cb"; set_palette 14 "179299"
  set_palette 15 "dce0e8"
  set_bg "eff1f5"; set_fg "4c4f69"; set_cursor "dc8a78"
  OMP_THEME="catppuccin_latte"
}
apply_tokyo_night() {
  set_palette  0 "15161e"; set_palette  1 "f7768e"; set_palette  2 "9ece6a"
  set_palette  3 "e0af68"; set_palette  4 "7aa2f7"; set_palette  5 "bb9af7"
  set_palette  6 "7dcfff"; set_palette  7 "a9b1d6"; set_palette  8 "414868"
  set_palette  9 "f7768e"; set_palette 10 "9ece6a"; set_palette 11 "e0af68"
  set_palette 12 "7aa2f7"; set_palette 13 "bb9af7"; set_palette 14 "7dcfff"
  set_palette 15 "c0caf5"
  set_bg "1a1b26"; set_fg "c0caf5"; set_cursor "c0caf5"
  OMP_THEME="tokyo"
}
apply_dracula() {
  set_palette  0 "21222c"; set_palette  1 "ff5555"; set_palette  2 "50fa7b"
  set_palette  3 "f1fa8c"; set_palette  4 "bd93f9"; set_palette  5 "ff79c6"
  set_palette  6 "8be9fd"; set_palette  7 "f8f8f2"; set_palette  8 "6272a4"
  set_palette  9 "ff6e6e"; set_palette 10 "69ff94"; set_palette 11 "ffffa5"
  set_palette 12 "d6acff"; set_palette 13 "ff92df"; set_palette 14 "a4ffff"
  set_palette 15 "ffffff"
  set_bg "282a36"; set_fg "f8f8f2"; set_cursor "f8f8f2"
  OMP_THEME="dracula"
}
apply_nord() {
  set_palette  0 "3b4252"; set_palette  1 "bf616a"; set_palette  2 "a3be8c"
  set_palette  3 "ebcb8b"; set_palette  4 "81a1c1"; set_palette  5 "b48ead"
  set_palette  6 "88c0d0"; set_palette  7 "e5e9f0"; set_palette  8 "4c566a"
  set_palette  9 "bf616a"; set_palette 10 "a3be8c"; set_palette 11 "ebcb8b"
  set_palette 12 "81a1c1"; set_palette 13 "b48ead"; set_palette 14 "8fbcbb"
  set_palette 15 "eceff4"
  set_bg "2e3440"; set_fg "d8dee9"; set_cursor "d8dee9"
  OMP_THEME="nord"
}
apply_gruvbox() {
  set_palette  0 "282828"; set_palette  1 "cc241d"; set_palette  2 "98971a"
  set_palette  3 "d79921"; set_palette  4 "458588"; set_palette  5 "b16286"
  set_palette  6 "689d6a"; set_palette  7 "a89984"; set_palette  8 "928374"
  set_palette  9 "fb4934"; set_palette 10 "b8bb26"; set_palette 11 "fabd2f"
  set_palette 12 "83a598"; set_palette 13 "d3869b"; set_palette 14 "8ec07c"
  set_palette 15 "ebdbb2"
  set_bg "282828"; set_fg "ebdbb2"; set_cursor "ebdbb2"
  OMP_THEME="gruvbox"
}
apply_hotdog_stand() {
  for i in {0..15}; do
    (( i % 2 == 0 )) && set_palette $i "ff0000" || set_palette $i "ffff00"
  done
  set_bg "ff0000"; set_fg "ffff00"; set_cursor "ffff00"
  OMP_THEME=""
}

typeset -A THEMES=(
  [1]="Catppuccin Macchiato"
  [2]="Catppuccin Mocha"
  [3]="Catppuccin Latte"
  [4]="Tokyo Night"
  [5]="Dracula"
  [6]="Nord"
  [7]="Gruvbox"
  [8]="Hotdog Stand 🌭"
)
typeset -A PREVIEWS=(
  [1]="24273a|cad3f5|ed8796|a6da95|8aadf4"
  [2]="1e1e2e|cdd6f4|f38ba8|a6e3a1|89b4fa"
  [3]="eff1f5|4c4f69|d20f39|40a02b|1e66f5"
  [4]="1a1b26|c0caf5|f7768e|9ece6a|7aa2f7"
  [5]="282a36|f8f8f2|ff5555|50fa7b|bd93f9"
  [6]="2e3440|d8dee9|bf616a|a3be8c|81a1c1"
  [7]="282828|ebdbb2|fb4934|b8bb26|83a598"
  [8]="ff0000|ffff00|ff0000|ffff00|ff0000"
)

swatch() {
  local r=$((16#${1:0:2})) g=$((16#${1:2:2})) b=$((16#${1:4:2}))
  printf "\033[48;2;${r};${g};${b}m   \033[0m"
}
hfg() {
  local r=$((16#${1:0:2})) g=$((16#${1:2:2})) b=$((16#${1:4:2}))
  printf "\033[38;2;${r};${g};${b}m"
}

clear
printf "\n"
printf "  $(hfg c6a0f6)${bold}🐦 themecanary${reset}\n"
printf "  $(hfg 5b6078)${dim}pick a vibe for your terminal${reset}\n"
printf "\n"

for i in {1..8}; do
  local p="${PREVIEWS[$i]}"
  local bg="${p%%|*}"; local r="${p#*|}"
  local fg="${r%%|*}"; local r="${r#*|}"
  local a1="${r%%|*}"; local r="${r#*|}"
  local a2="${r%%|*}"; local a3="${r##*|}"
  printf "  $(hfg 5b6078)${dim}[${reset}$(hfg c6a0f6)${bold}%d${reset}$(hfg 5b6078)${dim}]${reset} " "$i"
  swatch "$bg"; swatch "$fg"; swatch "$a1"; swatch "$a2"; swatch "$a3"
  printf " $(hfg cad3f5)%s${reset}\n" "${THEMES[$i]}"
done

printf "\n"
printf "  $(hfg 5b6078)${dim}enter number + return, or q to quit:${reset} "

while true; do
  read -r choice
  [[ "$choice" == "q" || "$choice" == "Q" ]] && {
    printf "\n  $(hfg 5b6078)${dim}no changes made. bye!${reset}\n\n"; exit 0
  }
  [[ "$choice" =~ ^[1-8]$ ]] && break
  printf "  $(hfg ed8796)invalid — enter 1–8 or q:${reset} "
done

case $choice in
  1) apply_catppuccin_macchiato ;;
  2) apply_catppuccin_mocha     ;;
  3) apply_catppuccin_latte     ;;
  4) apply_tokyo_night          ;;
  5) apply_dracula              ;;
  6) apply_nord                 ;;
  7) apply_gruvbox              ;;
  8) apply_hotdog_stand         ;;
esac

printf "\n  ✓ $(hfg a6da95)${bold}${THEMES[$choice]}${reset}$(hfg a6da95) applied!${reset}\n"

if [[ -n "$OMP_THEME" ]] && (( $+commands[oh-my-posh] )); then
  local omp_path="$(brew --prefix oh-my-posh 2>/dev/null)/themes/${OMP_THEME}.omp.json"
  [[ -f "$omp_path" ]] && {
    printf "  $(hfg c6a0f6)oh-my-posh prompt — add to zshrc:${reset}\n"
    printf "\n  $(hfg 5b6078)${dim}eval \"\$(oh-my-posh init zsh --config ${omp_path})\"${reset}\n"
  }
fi

printf "\n  $(hfg 5b6078)${dim}colours apply to this session only.${reset}\n"
printf "  $(hfg 5b6078)${dim}to persist, update your Ghostty config.${reset}\n"
printf "  $(hfg 5b6078)${dim}re-run: curl -fsSL https://theme.olsite.dev | zsh${reset}\n\n"
`;

export default {
  async fetch(request) {
    const ua = request.headers.get("user-agent") ?? "";
    const url = new URL(request.url);

    // Redirect browsers to a simple info page
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

    // Serve the shell script for curl/wget/etc
    return new Response(SCRIPT, {
      headers: {
        "content-type": "text/plain;charset=utf-8",
        "cache-control": "no-cache",
        "x-content-type-options": "nosniff",
      },
    });
  },
};

// ── Browser landing page ──────────────────────────────────────────────
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

    .card {
      max-width: 480px;
      width: 100%;
    }

    .title {
      font-size: 1.1rem;
      color: #c6a0f6;
      margin-bottom: 0.25rem;
      letter-spacing: 0.05em;
    }

    .sub {
      font-size: 0.8rem;
      color: #5b6078;
      margin-bottom: 2.5rem;
    }

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

    .cmd {
      font-size: 0.82rem;
      color: #a6da95;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

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

    .divider {
      border: none;
      border-top: 1px solid #363a4f;
      margin: 2rem 0;
    }

    .themes {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .swatch {
      height: 28px;
      border-radius: 4px;
      border: 1px solid rgba(255,255,255,0.06);
      position: relative;
      overflow: hidden;
    }

    .swatch-inner {
      position: absolute;
      inset: 0;
      display: flex;
    }

    .swatch-seg { flex: 1; }

    .swatch-label {
      font-size: 0.65rem;
      color: #5b6078;
      text-align: center;
      margin-top: 0.3rem;
    }

    .footer {
      font-size: 0.72rem;
      color: #494d64;
      text-align: center;
    }
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
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#24273a"></div>
          <div class="swatch-seg" style="background:#ed8796"></div>
          <div class="swatch-seg" style="background:#a6da95"></div>
          <div class="swatch-seg" style="background:#8aadf4"></div>
        </div></div>
        <div class="swatch-label">macchiato</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#1e1e2e"></div>
          <div class="swatch-seg" style="background:#f38ba8"></div>
          <div class="swatch-seg" style="background:#a6e3a1"></div>
          <div class="swatch-seg" style="background:#89b4fa"></div>
        </div></div>
        <div class="swatch-label">mocha</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#eff1f5"></div>
          <div class="swatch-seg" style="background:#d20f39"></div>
          <div class="swatch-seg" style="background:#40a02b"></div>
          <div class="swatch-seg" style="background:#1e66f5"></div>
        </div></div>
        <div class="swatch-label">latte</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#1a1b26"></div>
          <div class="swatch-seg" style="background:#f7768e"></div>
          <div class="swatch-seg" style="background:#9ece6a"></div>
          <div class="swatch-seg" style="background:#7aa2f7"></div>
        </div></div>
        <div class="swatch-label">tokyo night</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#282a36"></div>
          <div class="swatch-seg" style="background:#ff5555"></div>
          <div class="swatch-seg" style="background:#50fa7b"></div>
          <div class="swatch-seg" style="background:#bd93f9"></div>
        </div></div>
        <div class="swatch-label">dracula</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#2e3440"></div>
          <div class="swatch-seg" style="background:#bf616a"></div>
          <div class="swatch-seg" style="background:#a3be8c"></div>
          <div class="swatch-seg" style="background:#81a1c1"></div>
        </div></div>
        <div class="swatch-label">nord</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#282828"></div>
          <div class="swatch-seg" style="background:#fb4934"></div>
          <div class="swatch-seg" style="background:#b8bb26"></div>
          <div class="swatch-seg" style="background:#83a598"></div>
        </div></div>
        <div class="swatch-label">gruvbox</div>
      </div>
      <div>
        <div class="swatch"><div class="swatch-inner">
          <div class="swatch-seg" style="background:#ff0000"></div>
          <div class="swatch-seg" style="background:#ffff00"></div>
          <div class="swatch-seg" style="background:#ff0000"></div>
          <div class="swatch-seg" style="background:#ffff00"></div>
        </div></div>
        <div class="swatch-label">hotdog 🌭</div>
      </div>
    </div>

    <div class="footer">themecanary · theme.olsite.dev</div>
  </div>

  <script>
    function copy(el, text) {
      navigator.clipboard.writeText(text).then(() => {
        const btn = el.querySelector('.copy-btn');
        btn.textContent = 'copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    }
  </script>
</body>
</html>`;
