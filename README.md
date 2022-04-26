<h1 align="center">Contrast Ratio Checker</h1>
<p align="center">A simple React app that checks the color contrast of your design based on <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">Web Content Accessibility Guidelines</a> (WCAG). 🎨</p>
<div align="center">
  <a href="https://app.netlify.com/sites/color-contrast/deploys">
    <img src="https://api.netlify.com/api/v1/badges/576f7773-bf15-4f87-baf8-1a8f4ca45391/deploy-status" alt="Netlify Status">
  </a>
</div>

![Demo](./images/demo.png)

## Features

- Color pickers for color input
- Accepts HEX, RGB and HSL color formats
- Converts color format to HEX, RGB and HSL
- Checks against [WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) Level AA and Level AAA requirements
- Saves and loads themes from local storage
- Responsive design

## Development

```bash
# 1. Clone this repository to your local computer
git clone https://github.com/AnsonH/contrast-checker.git

# 2. Change directory to the root of the repo
cd contrast-checker

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

[Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) is also installed as a dev dependency to analyze the bundle size. To generate a treemap visualization:

```bash
# 1. Create a production build
npm run build

# 2. Generate a treemap report
npm run analyze
```
