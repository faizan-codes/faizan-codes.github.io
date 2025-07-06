# Alex Johnson - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a professional design.

## Features

✨ **Complete Portfolio Sections**
- Profile picture and personal introduction
- Contact information display
- Education history
- Work experience timeline
- Featured projects showcase
- Skills and technologies
- Certifications
- Volunteer work
- Social platform links
- Working contact form with EmailJS integration

🎨 **Modern Design**
- Dark theme with beautiful gradients
- Smooth animations and transitions
- Glass-morphism effects
- Responsive design for all devices
- Professional color scheme

## EmailJS Setup

To make the contact form work, you need to:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Replace the placeholders in `src/pages/Index.tsx`:
   - `YOUR_PUBLIC_KEY` with your EmailJS public key
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID

## Customization

To personalize this portfolio:

1. **Replace the profile image**: Update `src/assets/profile-picture.jpg`
2. **Update personal information**: Edit the data in `src/pages/Index.tsx`
3. **Modify colors**: Adjust the design system in `src/index.css`
4. **Add your projects**: Update the `projects` array with your actual projects
5. **Update social links**: Replace placeholder URLs with your actual profiles

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Beautiful UI components
- **EmailJS** - Contact form integration
- **Lucide React** - Modern icons
- **Vite** - Fast development server

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Design System

The portfolio uses a custom design system with:
- **Primary Color**: Professional blue (#3B82F6)
- **Accent Color**: Purple (#A855F7)
- **Background**: Dark gradients
- **Animations**: Smooth transitions and hover effects
- **Typography**: Clean, readable fonts

## License

This project is open source and available under the MIT License.