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
