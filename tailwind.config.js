/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
    //   fontFamily: {
    //   display: ["Poppins"],
    // },
//     },
//   },
//   plugins: [],
// }

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      display: ["Poppins"],
    },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 200ms",
      },
    },
  },
  plugins: [],
};