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
    extend: {},
  },
  plugins: [],
}
