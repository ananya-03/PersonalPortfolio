// tailwind.config.js
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js,css}"],
  safelist: [
    'hover:scale-115',
    'active:font-bold',
    'text-[#a0258b]',
    'bg-black',
    'sticky',
    'top-0',
    'z-50',
    'shadow-sm',
    'transition-transform',
    'duration-300',
    'ease-in-out',
    'gap-10',
    'px-4',
    'py-2',
    'flex',
    'justify-center',
    'items-center',
    'pr-5',
    'w-full',
    'bg-black'
    // Add more classes if you're unsure what might be missed
  ],
  theme: {
    extend: {
 width: {
        '15': '3.75rem',  // 60px
        '80': '20rem',    // 320px
        '100': '25rem',   // 400px
      },
      height: {
        '15': '3.75rem',  // 60px
        '50': '12.5rem',  // 200px
        '60': '15rem',    // 240px
        '130': '32.5rem', // 520px
        '150': '37.5rem', // 600px
      },
      scale: {
        '115': '1.15',
      },
      spacing: {
        '25': '6.25rem',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      dropShadow: {
        'custom': '3px 3px 0 white',
        'custom-md': '7px 7px 0 white',
      },
    },
  },
  plugins: [],
}
// module.exports = {
//   content: ["./**/*.{html,js}"],
//   theme: {
//     extend: {
//       scale: {
//         '115': '1.15',
//       },
//       spacing: {
//         '25': '6.25rem',
//       },
//       transitionDuration: {
//         '1500': '1500ms',
//       }
//     },
//   },
// }