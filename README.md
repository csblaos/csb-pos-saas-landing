# AstroPOS - SaaS Landing Page

A high-performance, Neo-Brutalist landing page for an Online POS system. Built with Astro, Tailwind CSS, and React.

## 🚀 Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## 🛠 Tech Stack

-   **Framework**: [Astro](https://astro.build/) (Static Site Generation)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 via Vite plugin)
-   **Interactivity**: React (Astro Islands)
-   **Icons**: Lucide React
-   **Content**: MDX (Content Collections)

## 📂 Project Structure

-   `src/pages/`: Route components (Home, Packages, Services, Demo, News).
-   `src/components/common/`: Reusable UI (Buttons, Cards, Badges).
-   `src/components/sections/`: Page sections (Hero, Features, Pricing).
-   `src/components/islands/`: Interactive React components (DemoPreview, PricingSelect).
-   `src/layouts/`: Global layouts (Base.astro).
-   `src/content/news/`: Blog posts in Markdown/MDX.

## 🌍 Deployment

This project is 100% static and can be deployed anywhere.

### Cloudflare Pages (Recommended)
1.  Connect your GitHub repo.
2.  Build command: `npm run build`
3.  Output directory: `dist`

### Vercel
1.  Import project.
2.  Framework preset: `Astro`
3.  Deploy.

## 🎨 Design System

-   **Style**: Neo-Brutalism
-   **Primary Color**: Lime (`#a3e635`)
-   **Secondary Color**: Pink (`#f472b6`)
-   **Borders**: 2px-4px solid black
-   **Shadows**: Hard black offsets

## 📝 SEO & Analytics

-   **Sitemap**: Automatically generated at `/sitemap-index.xml`.
-   **Robots.txt**: Included in `public/`.
-   **Schema.org**: Implemented via semantic HTML and head tags.
