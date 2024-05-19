// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      yellow400: "#FFCB05",
        yellow300: "#FCDC64",
        yellow200: "#FFEB9E",
        yellow100: "#FEF1C2",
        green400: "#46C86E",
        green300: "#61EE8D",
        green200: "#94F5B2",
        green100: "#C3FFD6",
        gray400: "#636363",
        gray300: "#8A8A8A",
        gray200: "#D9D9D9",
        gray100: "#F1F1F1",
        blue400: "#283764",
        blue300: "#515E83",
        blue200: "#7C85A0",
        blue100: "#AEB3C3",
        white: "#ffffff",
        dashboard:"#f3f6fb"
    }
  },
  plugins: [],
};