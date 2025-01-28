/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors:{
        primaryhead: 'rgba(var(--primaryhead))',
        secondaryhead: 'rgba(var(--secondaryhead))',
        primarytext: 'rgba(var(--primarytext))',
        secondarytext: 'rgba(var(--secondarytext))',
        primarybg: 'rgba(var(--primarybg))',
        cardbg: 'rgba(var(--cardbg))',
        cardbghover: 'rgba(var(--cardbghover))',
        glassyedge: 'rgba(var(--glassy-edge),0.125)',
        opaqueglass:'rgba(var(--opaque-glass))',
      },
    },
  },
  plugins: [],
}

