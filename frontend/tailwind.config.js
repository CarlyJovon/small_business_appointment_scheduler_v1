module.exports = {
  content: [
    "./frontend/index.html",                // Target the index.html file inside the frontend folder
    "./frontend/**/*.{js,ts,jsx,tsx,vue}",  // Include all JS/TS/JSX/TSX/Vue files inside frontend folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
