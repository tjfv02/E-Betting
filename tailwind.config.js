/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'fondo-morado': '#1F0644',
        'cuadro-morado-perfil': '#BF97F5',
        'color-amarillo': '#E8BC20',
        
      },
    },
  },
  plugins: [],
}
