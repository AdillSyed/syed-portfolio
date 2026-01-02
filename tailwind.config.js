module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },

      colors: {
        neon: {
          DEFAULT: "#00e5ff",
          cyan: "#00e5ff",
          violet: "#a78bfa",
          pink: "#ff4dff",
        },
      },

      boxShadow: {
        "neon-glow": "0 0 25px rgba(0, 229, 255, 0.6)",
        "purple-glow": "0 0 25px rgba(167, 139, 250, 0.5)",
        "soft-glow": "0 0 15px rgba(255, 255, 255, 0.1)",
      },

      backgroundImage: {
        "grid-glow":
          "linear-gradient(to right, rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(circle at center, rgba(0,229,255,0.18), transparent 60%)",
      },

      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "orbit": "orbit 10s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: 1, filter: "drop-shadow(0 0 6px #00e5ff)" },
          "50%": { opacity: 0.6, filter: "drop-shadow(0 0 2px #00e5ff)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(20px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(20px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
