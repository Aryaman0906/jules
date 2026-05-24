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
- **Vite 6**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Aryaman0906/jules.git
   ```
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

## Deployment

### Vercel / Netlify
1. Connect your GitHub repository to **Vercel** or **Netlify**.
2. Use the following build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Click **Deploy**.

## How to Update Content

Most of the website's content can be updated in a single file: `src/constants/data.ts`.

In this file, you can easily change:
- **Contact Info:** Phone number, Email, and Working hours.
- **Pricing:** Update rates for Small, Medium, Large dogs and Cats.
- **Services:** Modify service names and descriptions.
- **Testimonials:** Add or update client reviews.
- **Gallery:** Update placeholders with real client images.

## Assets
- **Brand Van Image:** Located at `public/assets/humtum-bus.png`.
- **Favicon:** Located at `public/favicon.svg`.
- **Icons:** Powered by Lucide React.
- **Animations:** Managed via Framer Motion.

## License
This project is for private use by Hum Tum Aur Poonch.
