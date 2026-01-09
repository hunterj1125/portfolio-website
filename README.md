# Joshua Wehunt - Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/joshuawehunt/deploys)

A modern, responsive portfolio website showcasing my work as a Web Designer and Full-Stack Developer. Built with cutting-edge technologies and optimized for performance and SEO.

🌐 **Live Demo**: [https://joshuawehunt.netlify.app](https://joshuawehunt.netlify.app)

![Portfolio Preview](https://via.placeholder.com/1200x630/4F46E5/ffffff?text=Joshua+Wehunt+Portfolio)

## 🚀 Features

- ✨ **Modern Design**: Clean, professional interface with smooth animations
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 🌙 **Dark/Light Mode**: Toggle between themes with localStorage persistence
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Next.js 15**: Latest App Router with server-side rendering
- 🔧 **TypeScript**: Type-safe code for better development experience
- 🎭 **Smooth Animations**: Viewport-triggered entrance animations using Intersection Observer
- 📧 **Contact Form**: Validated form with real-time error handling
- 🔍 **SEO Optimized**: Comprehensive meta tags for search engines and social media
- ♿ **Accessible**: Built with web accessibility best practices

## 📂 Project Structure

```
Portfolio Web Page/
├── app/
│   ├── components/
│   │   └── Navigation.tsx       # Navigation bar with theme toggle
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with SEO meta tags
│   └── page.tsx                 # Main page with all sections
├── public/                      # Static assets
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot workspace instructions
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: Custom React components with modern design patterns

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm
- **Version Control**: Git

### Performance & SEO
- Server-side rendering (SSR)
- Automatic code splitting
- Optimized images and assets
- Comprehensive meta tags
- Semantic HTML structure

## 📋 Sections Overview

### 🏠 Hero Section
- Eye-catching introduction with animated background
- Professional title and description
- Call-to-action buttons with smooth scroll
- Fully responsive typography

### 💼 Projects Section
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Interactive project cards with hover effects
- Tech stack tags for each project
- Live demo and source code buttons
- Gradient image placeholders

### 🎯 Skills Section
- Organized by categories (Frontend, Backend, Tools)
- Custom icons for each category
- Animated progress bars showing proficiency levels
- Gradient color themes per category

### 📧 Contact Section
- Fully validated contact form
- Real-time error feedback
- Success/error message handling
- Responsive form layout
- Form state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🌐 Deploying to Netlify

### Method 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your portfolio repository

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18` (or higher)

4. **Environment variables** (if needed)
   - Add any required environment variables in Netlify dashboard

5. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site automatically
   - Every push to your main branch will trigger a new deployment

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify project**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   # Deploy to production
   netlify deploy --prod
   ```

### Method 3: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### Post-Deployment Checklist

- ✅ Update `metadataBase` URL in `app/layout.tsx` with your actual domain
- ✅ Update all placeholder links in projects section
- ✅ Add custom domain (optional)
- ✅ Enable HTTPS (automatic with Netlify)
- ✅ Configure redirects if needed (create `netlify.toml`)
- ✅ Test all sections and links
- ✅ Verify SEO meta tags with tools like [Meta Tags](https://metatags.io/)
- ✅ Test mobile responsiveness
- ✅ Check dark/light mode toggle
- ✅ Test contact form validation

## 🎨 Customization Guide

### Update Personal Information

1. **Name and Title**: Edit `app/page.tsx` (Hero section)
2. **SEO Meta Tags**: Update `app/layout.tsx` metadata
3. **Projects**: Modify project array in `app/page.tsx`
4. **Skills**: Update skill categories and levels in `app/page.tsx`

### Styling Customization

1. **Colors**: Edit `tailwind.config.ts` for theme colors
2. **Fonts**: Update `app/globals.css` font-family
3. **Animations**: Modify `app/globals.css` for custom animations
4. **Components**: Adjust styling in individual components

### Add New Sections

1. Add section in `app/page.tsx`
2. Add navigation link in `app/components/Navigation.tsx`
3. Add viewport animation ref if needed
4. Update smooth scroll behavior

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Joshua Wehunt**

- Website: [https://joshuawehunt.netlify.app](https://joshuawehunt.netlify.app)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Deployed on [Netlify](https://www.netlify.com/)

---

⭐ Star this repository if you found it helpful!
