/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled from the source design
        brand: {
          navy: '#004985',      // dark blue used in header bands & buttons
          navy2: '#143861',
          blue: '#1E5A91',      // mid blue for headings / link accents
          accent: '#2E78B0',    // icon / pill accent
          orange: '#F26B5E',    // primary CTA orange/coral
          orangeHover: '#E25A4D',
          red: '#E63946',       // logo red swoosh
          softblue: '#EAF2F9',  // pale blue card background
          softblue2: '#DCEAF5', // hero gradient
          softorange: '#FBE6E1',// pale coral pill background
          line: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 42, 71, 0.06), 0 4px 12px rgba(15, 42, 71, 0.05)',
      },
    },
  },
  plugins: [],
}
