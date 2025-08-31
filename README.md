# Regenerativa Website

A modern, responsive website for Regenerativa APS - a global initiative for integral regeneration and EcoCivilization 2030.

## 🎯 Overview

This website serves as the primary digital presence for Regenerativa, presenting the organization as a credible global initiative for integral regeneration. It converts visitors into subscribers, contributors, partners, and node leads through clear contribution paths and engaging content.

## ✨ Features

### Core Pages
- **Home** - Hero section, value explainer, network map preview, ways to engage, events, stories, partners
- **About** - Vision & principles, team, governance, impact & roadmap
- **Network** - Interactive H3 map, hex communities, active nodes, statistics
- **Join** - Newsletter signup with RegenMatch profile pre-registration
- **Events** - Lunation Protocol explainer, calendar, seasonal celebrations
- **Stake** - Receipt token staking with risk disclosure and FAQs
- **Contact** - Forms for partners, media, municipalities, general inquiries
- **Library** - Documents, media, how-to guides, toolkits

### Key Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - WCAG 2.2 AA compliant with proper focus states and keyboard navigation
- **SEO Optimized** - Semantic HTML, OpenGraph, structured data
- **Multilingual Ready** - Internationalization support (EN/IT)
- **Modern Tech Stack** - Next.js 14, TypeScript, shadcn/ui components

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Work Sans (UI), Fraunces (Display)

### Maps & Data
- **Mapping**: H3.js + MapLibre GL (planned)
- **Data**: Mock data for MVP, PostgreSQL + Prisma for production

### Design System
- **Typography**: Work Sans for UI, Fraunces for display
- **Colors**: Green primary palette (#059669)
- **Spacing**: 8pt grid system
- **Accessibility**: WCAG 2.2 AA standards

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── network/page.tsx   # Network page
│   ├── join/page.tsx      # Join page
│   ├── events/page.tsx    # Events page
│   ├── stake/page.tsx     # Stake page
│   ├── contact/page.tsx   # Contact page
│   ├── library/page.tsx   # Library page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Footer component
└── lib/                  # Utility functions
    └── utils.ts          # shadcn/ui utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd regenerativa-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📋 Implementation Status

### ✅ Completed (MVP)
- [x] Project setup with Next.js 14 + TypeScript
- [x] Design system implementation (Work Sans + Fraunces fonts)
- [x] Responsive navigation and footer
- [x] Home page with all sections
- [x] About page with team, governance, roadmap
- [x] Network page with statistics and featured nodes
- [x] Join page with newsletter signup form
- [x] Events page with Lunation Protocol
- [x] Stake page with receipt token staking
- [x] Contact page with multiple inquiry types
- [x] Library page with resource categories
- [x] Accessibility features (focus states, keyboard nav)
- [x] SEO optimization (meta tags, structured data)

### 🔄 In Progress
- [ ] Interactive H3 map integration
- [ ] Form submission handling
- [ ] Database integration
- [ ] Payment processing (Stripe)
- [ ] Email service integration

### 📅 Phase 2 Features
- [ ] Wallet connect for staking
- [ ] Timebank/mutual credit system
- [ ] RegenMatch beta platform
- [ ] Node lead application wizard
- [ ] Regenerative certification registry
- [ ] Multilingual content (Italian)

## 🎨 Design Principles

### Visual Identity
- **Tone**: Clear, invitational, credible, hopeful
- **Typography**: Work Sans for UI, Fraunces for display
- **Grid**: 12-column, 8pt spacing with generous white space
- **Imagery**: People + landscapes + diagrams (hexes, mycelial motifs)
- **Iconography**: Lucide outline icons + custom hex-based pictograms

### Content Guidelines
- **Hero**: 8-12 word value proposition + primary CTA
- **Social Proof**: 3-6 logos/quotes
- **Roadmap**: Timeline with 5 milestones
- **Copy**: Jargon-light with inline definitions
- **Numbers**: Use specific metrics (e.g., "28 Lunations completed")

## 📊 Key Performance Indicators

### Conversion Goals
- Newsletter signup rate: ≥ 6%
- Hex subscriber growth: ≥ 5% weekly
- Volunteer signups: ≥ 20/month
- Staking volume: +20% QoQ post-launch

### Technical Metrics
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Accessibility: WCAG 2.2 AA compliance
- SEO: Structured data, sitemap, canonical URLs

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
# Database
DATABASE_URL="postgresql://..."

# Email Service
EMAIL_SERVICE_API_KEY="..."

# Payment Processing
STRIPE_SECRET_KEY="..."
STRIPE_PUBLISHABLE_KEY="..."

# Analytics
PLAUSIBLE_DOMAIN="regenerativa.org"
```

### Tailwind Configuration
The project uses Tailwind CSS v4 with custom design tokens:
- Primary color: `#059669` (green)
- Font families: Work Sans, Fraunces
- Border radius: `0.5rem`
- Spacing: 8pt grid system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Use shadcn/ui components when possible
- Maintain accessibility standards
- Write semantic HTML
- Test responsive design across devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design System**: shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Work Sans, Fraunces)
- **Framework**: Next.js team
- **Community**: Regenerativa APS team and contributors

## 📞 Support

For questions or support:
- Email: hello@regenerativa.org
- Website: [regenerativa.org](https://regenerativa.org)
- Community: Join our Telegram/Matrix channels

---

Built with ❤️ for the regeneration movement.
