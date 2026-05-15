module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Cormorant Garamond",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        times: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        void: "#050508",
        abyss: "#08080f",
        panel: "#0e0e16",
        panel2: "#14141f",
        stroke: "#2a2a38",
        mist: "#8f8d9a",
        bone: "#eae6de",
        signal: "#c9a227",
        blood: "#5c1a22",
        frost: "#6d8a92",
        github: "#050508",
        githubnav: "#0c0c14",
        githubComponents: "#12121c",
        surface: "#08080f",
        borderMuted: "#2a2a38",
        textMuted: "#8f8d9a",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(201, 162, 39, 0.25)",
        panel: "0 24px 80px rgba(0,0,0,0.55)",
        innerline: "inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      letterSpacing: {
        ultra: "0.35em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
