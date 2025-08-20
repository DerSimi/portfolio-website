![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Mantine](https://img.shields.io/badge/Mantine-8.2.4-blue)
![Vite](https://img.shields.io/badge/Vite-5.2.10-646cff)
![React](https://img.shields.io/badge/React-19.1.1-61dafb)


# Academic Portfolio Website

Looking for a simple yet complete personal website focused on projects and publications, without overengineered templates? You're in the right place! This project offers a clean, minimalist design, built with React and Mantine.

[Live Demo](https://rappenecker.me)

## ⭐ Key Features
- Clean and minimalist design, no unnecessary animations
- Fully configurable
- Dark mode support
- Responsive layout

## 💻 Installation
Make sure you have `npm` installed. If not, please visit the [official Node.js download page](https://nodejs.org/en/download) and select your platform.

Clone the repository and install all dependencies:
```sh
git clone https://github.com/DerSimi/personal-website
cd personal-website
npm install
```

Once all dependencies are installed, start the development server and open the link provided in your terminal:
```sh
npm run dev
```

Now it's time to make it your own! Enter your personal data in [`src/config.tsx`](src/config.tsx).

## 🚀 Deployment
To deploy the website on a static webspace (e.g., Apache or Nginx), first build the project:
```sh
npm run build
```
Upload the contents of the `dist/` folder to your web server. If the website is not hosted in the root directory of your web server (for example, at `example.com/test/` instead of `example.com/`), you need to set the base in `vite.config.mjs` to `/test/` before building.