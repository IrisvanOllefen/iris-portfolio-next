module.exports = {
  purge: {
    content: ["./index.html", './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12', 'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        move: "move 2s ease-out"
      },
      keyframes: {
        move: {
        "0%": {
          width: "0px"
        },
        "100%": {
          width: "full"
        },
      },
      },
  },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}
