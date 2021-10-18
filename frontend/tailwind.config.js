module.exports = {
  purge: {
    enabled: true,
    content: [
      "./components/**/*.tsx",
      "./pages/**/*.tsx",
      "./modules/**/*.tsx",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        "slide-top":
          "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  1.5s  both",
        "tracking-in-expand":
          "tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)  0.5s both",
        "fade-in":
          "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-text":
          "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s  both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "100%",
          },
        },
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      colors: {
        primary: "#5039bb",
        dark: "#4029aa",
        faded: "#F2F2F2",
        tertiary: "#333333",
        error: "#EB5757",
      },
    },
  },
  variants: {},
  plugins: [],
};
