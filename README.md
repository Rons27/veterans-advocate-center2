# Veterans Advocate Center Website

A modern React application built with TypeScript, Vite, and Material UI to help veterans navigate VA disability claims and benefits.

## Features

- 🎨 **Modern Design**: Clean, responsive UI using Material-UI components
- 📱 **Mobile Responsive**: Optimized for all screen sizes
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔧 **TypeScript**: Full type safety and excellent developer experience
- 🧭 **Navigation**: Multi-page application with React Router
- ♿ **Accessible**: Following accessibility best practices

## Pages

- **Home**: Hero section with service overview and call-to-action
- **Services**: Detailed information about available services for veterans
- **Resources**: Educational materials, calculators, and helpful tools
- **Events**: Upcoming conferences, outreach programs, and community events
- **About**: Mission, vision, and what makes the organization unique
- **Contact**: Contact form and information

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 4
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Routing**: React Router v7
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material-UI Icons

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd veterans-advocate-center
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Layout/         # Layout components (Navbar, Footer)
├── pages/              # Page components
├── theme/              # Material-UI theme configuration
└── main.tsx           # Application entry point
```

## Design System

The application uses a custom Material-UI theme with:

- **Primary Color**: Blue (#1976d2) - Professional and trustworthy
- **Secondary Color**: Red (#dc004e) - Call-to-action elements
- **Typography**: Roboto font family with defined hierarchy
- **Spacing**: Consistent 8px grid system
- **Breakpoints**: Mobile-first responsive design

## Development Guidelines

### Component Structure

- Use TypeScript for all components
- Follow Material-UI design patterns
- Implement responsive design using Material-UI's Grid system
- Use the theme for consistent colors and spacing

### Styling

- Leverage Material-UI's `sx` prop for styling
- Use the custom theme for colors and typography
- Ensure responsive behavior on all screen sizes

### Accessibility

- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For questions or support, contact: info@veteransadvokatecenter.com