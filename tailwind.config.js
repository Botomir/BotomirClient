module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ["light", "autumn", "winter", "lofi", "dark", "night", "black", "dracula", "aqua", "synthwave", "pastel", "cupcake", "cyberpunk", "forest"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
