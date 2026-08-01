export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: '#FBF9F4',
        canvas: '#F1EDE4',
        ink: '#241C17',
        graphite: '#463A31',
        muted: '#655648',
        line: '#DED6C7',
        espresso: '#2E211B',
        oxblood: '#7A3524',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        shell: '76rem',
      },
    },
  },
  plugins: [],
};
