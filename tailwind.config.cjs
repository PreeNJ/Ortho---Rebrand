module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "pastel-tumors": '#E8F0FF',
        "pastel-anatomy": '#E8FCEC',
        "pastel-arthritis": '#F8EAF9',
        "pastel-casting": '#FFF4DB',
        "pastel-revision": '#FFF1F3',
        "pastel-pastpapers": '#EEF2FF',
        "pastel-reference": '#EAF8F4',
        "pastel-quick": '#F4F6F8'
      },
      spacing: {
        sidebar: '280px'
      }
    }
  },
  plugins: [],
}
