# AdminSys Started

This is a robust and scalable template for building modern applications using [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), and [Tailwind CSS 4](https://tailwindcss.com/). Developed with a focus on best practices, TypeScript, automatic formatting, and linting.

## ✨ Features

- Optimized structure with Next.js 15 (App Router)
- Full TypeScript support
- Styling with Tailwind CSS 4 and Shadcn/ui
- Optimized fonts using `next/font` (Geist and Geist Mono)
- Light/Dark theme system
- Reusable and modular components
- Responsive layout with mobile navigation
- Linting with Biome
- Git hooks with Husky for pre-commit validation
- Conventional commit messages enforced with commitlint

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- pnpm (recommended), npm, or yarn

### Installation

Install the dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                   # Application pages and layouts (App Router)
│   ├── (admin)/           # Group for authenticated admin routes
│   ├── (home)/            # Group for public home routes
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # Custom 404 page
│   ├── manifest.ts        # Web app manifest configuration
│   ├── robots.ts          # robots.txt configuration
│   └── sitemap.ts         # sitemap.xml configuration
├── components/
│   ├── auth/              # Authentication-related components
│   ├── dev/               # Development-specific components
│   ├── layout/            # Layout components (Navbar, Footer, Sidebar, etc.)
│   └── ui/                # Reusable UI components from Shadcn
├── config/                # Site and environment configurations
├── data/                  # Data fetching logic
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and libraries
├── styles/                # Global styles
└── types/                 # Global TypeScript types
```

## 🛠️ Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `preview`: Builds and starts the application in production mode for preview.
- `clean`: Removes `node_modules` and the `.next` directory.
- `format`: Formats the code using Biome.
- `lint`: Lints the code using Biome.
- `check`: Runs all Biome checks (lint, format, etc.).
- `typecheck`: Runs the TypeScript compiler to check for type errors.
- `ui:add`: Adds new Shadcn UI components to the project.

## ☁️ Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/), but you can use any Node.js-compatible service.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
