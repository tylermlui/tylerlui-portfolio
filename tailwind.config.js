module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      // Include any other locations where you use Tailwind classes
    ],
    theme: {
      extend: {
        fontFamily: {
          'cormorant': ['Cormorant Garamond', 'serif'],
        },
      },
    },
    plugins: [],
  }