module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  content: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Signika', 'ui-sans-serif', 'system-ui'],
      'sans': ['Overpass', 'ui-sans-serif', 'system-ui'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: true,
    themes: [
      {
        'mytheme': {
          'primary': '#2a4f5f',
          'primary-focus': '#1f8489',
          'primary-content': '#9ef5ca',
          'secondary': '#9ef5ca',
          'secondary-focus': '#4ddb7d',
          'secondary-content': '#2a4f5f',
          'accent': '#f28879',
          'accent-focus': '#ef695b',
          'accent-content': '#ffffff',
          'neutral': '#3f494c',
          'neutral-focus': '#aaa694',
          'neutral-content': '#fff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#2a4f5f',
          'info': '#2094f3',
          'success': '#33aa83',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  }
}

