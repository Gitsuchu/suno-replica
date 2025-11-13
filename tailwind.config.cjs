module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#f6f5ff',100:'#efeaff',300:'#cdb9ff',500:'#7c3aed',700:'#4b2f8a'
        },
        page: '#071127',
        warm: {
          500: '#f97316', // orange highlight
          400: '#fb923c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'deep': '0 18px 50px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}
