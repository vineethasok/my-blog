module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      montserrat: ['Montserrat Alternates', 'sans-serif'],
      montez: ['Montez', 'cursive']
    },
    animation: {
      'fill-right': 'fill-right 2s forwards 4s ease-in-out',
      'fill-top': 'fill-top 2s forwards 4s ease-in-out',
      'fill-left': 'fill-left 2s forwards 4s ease-in-out',
      'fade-in': 'fade-in 1.5s ease-in-out',
      'dash': 'dash 15s ease-in-out infinite',
    },
    extend: {
      keyframes: {
        'fill-right': {
          '100%': {
            right: '100%',
          },
        },
        'fill-top': {
          '100%': {
            height: '70%',
          },
        },
        'fill-left': {
          '100%': {
            left: '100%',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.1)',
          },
          '85%': {
            opacity: 1,
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        dash: {
          to: {
            'stroke-dashoffset': 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
