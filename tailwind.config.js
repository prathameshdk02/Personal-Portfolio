/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors:{
        primarybg: 'rgba(var(--primarybg))',
        primaryhead: 'rgba(var(--primaryhead))',
        secondaryhead: 'rgba(var(--secondaryhead))',
        glassyedge: 'rgba(var(--glassy-edge),0.125)',
        cardbghover: 'rgba(var(--cardbghover))',
        primarytext: 'rgba(var(--primarytext))',
        secondarytext: 'rgba(var(--secondarytext))'
      },
    },
  },
  plugins: [],
}

