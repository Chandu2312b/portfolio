# Professional Portfolio - React + Vite

A modern, industry-level professional portfolio website built with React, Vite, and Framer Motion. Features high-quality UI/UX, smooth animations, and full responsiveness across all devices.

## Features

- ✨ Modern, professional design
- 🎨 Smooth animations using Framer Motion
- 📱 Fully responsive for all devices
- 🚀 Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💫 Interactive UI elements
- 🌈 Gradient color schemes
- 📧 Contact form integration

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Modern styling with animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation component
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Projects.jsx     # Projects showcase
│   ├── Skills.jsx       # Skills section
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer component
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Customization

### Update Personal Information

Edit the following files to update your personal information:

- `src/components/Hero.jsx` - Update name, title, description, and social links
- `src/components/About.jsx` - Update education and experience details
- `src/components/Projects.jsx` - Update project information
- `src/components/Skills.jsx` - Update skills list
- `src/components/Contact.jsx` - Update contact email

### Styling

All component styles are in their respective CSS files in the `src/components/` directory. Global styles and CSS variables are defined in `src/index.css`.

### Colors

Update CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

