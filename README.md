# Hum Tum Aur Poonch - Premium Pet Grooming Website

This is a premium, modern, and responsive website built for **Hum Tum Aur Poonch**, a mobile pet grooming business in India.

## Features
- **Premium Design:** Clean, modern layout using Tailwind CSS and Framer Motion.
- **Conversion Focused:** Prominent CTAs for booking via WhatsApp and calling.
- **Dynamic Pricing:** Interactive pricing section for both Dog and Cat grooming services.
- **Mobile First:** Optimized for a seamless experience on all devices.
- **WhatsApp Integration:** Booking form that automatically generates a formatted message for WhatsApp.

## Tech Stack
- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository or download the files.
2. Open your terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
To run the project locally in development mode:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### Production Build
To create a production-ready build:
```bash
npm run build
```
The optimized files will be generated in the `dist/` directory.

### Preview Production Build
To preview the generated build locally:
```bash
npm run preview
```

## How to Update Content

Most of the website's content, including pricing, services, and business details, can be updated in a single file:

`src/constants/data.ts`

In this file, you can easily change:
- **Phone number and Email**
- **Service lists and descriptions**
- **Pricing for different dog sizes and cats**
- **Testimonials**
- **Working hours**

## Images
- The brand van image is located at `public/assets/humtum-bus.png`.
- Favicon is at `public/favicon.svg`.
- You can add more gallery images to `public/assets/` and update `src/constants/data.ts` to include them.

## Deployment
This project is ready to be deployed to platforms like **Vercel**, **Netlify**, or **GitHub Pages**. Simply connect your repository and set the build command to `npm run build` and the output directory to `dist`.
