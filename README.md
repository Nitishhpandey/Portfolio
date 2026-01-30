# Nitish Pandey - Personal Portfolio

A clean, modern, and fully responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI/UX
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML
- **Contact Form**: Functional contact form with validation
- **Dark Theme**: Beautiful dark mode design

## 📁 Project Structure

```
nitish-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── project-card.tsx
│   ├── projects-section.tsx
│   ├── section-header.tsx
│   ├── social-icons.tsx
│   └── social-links.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── resume.pdf (add your resume here)
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint
- **Formatting**: Prettier

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Nitishhpandey/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🚀 Deployment on Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your portfolio will be live!

Alternatively, you can deploy using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 Customization

### Update Personal Information

1. Edit \`components/hero.tsx\` to update your name and tagline
2. Edit \`components/about-section.tsx\` to update your bio and skills
3. Edit \`components/projects-section.tsx\` to add your projects
4. Edit \`components/social-links.tsx\` to update your social media links
5. Add your resume PDF to \`public/resume.pdf\`

### Update Theme Colors

Edit \`app/globals.css\` to customize the color scheme:

```css
@theme inline {
  --color-primary: #22d3ee; /* Change this to your preferred color */
  /* ... other colors */
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nitish Pandey**

- GitHub: [@Nitishhpandey](https://github.com/Nitishhpandey)
- LinkedIn: [Nitish Pandey](https://linkedin.com/in/nitishpandey)
```
