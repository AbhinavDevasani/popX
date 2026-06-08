# PopX Web Application

A premium, mobile-first, responsive React web application built with Vite and Tailwind CSS. The application replicates the provided mockup screens with client-side path routing, form inputs, dynamic state updates, and smooth CSS page slide transitions.

## Features

- **Welcome Screen**: Minimal landing page with action links.
- **Login Screen**: Secure user login with error validations.
- **Register Screen**: Detailed account creation form with styled Agency check buttons.
- **Profile Screen**: User settings overview screen featuring dynamic name/email display and a profile picture camera overlay badge.
- **Direct Photo Picker**: Clicking the camera badge triggers the device's native photo uploader to select and update the avatar locally.
- **Slide Page Transitions**: Custom CSS animation keyframes rendering elegant slide transitions when moving between views.

## File Structure

```text
popIndia/
├── src/
│   ├── components/
│   │   ├── Button.jsx       # Reusable button with custom PopX styling variants
│   │   └── Input.jsx        # Custom input field with labels overlapping the top borders
│   ├── pages/
│   │   ├── Welcome.jsx      # Welcome landing screen
│   │   ├── Login.jsx        # Signin form page
│   │   ├── Register.jsx     # Account registration page
│   │   └── Profile.jsx      # Settings dashboard displaying user details and camera badge uploader
│   ├── App.jsx              # Main App wrapper hosting routes
│   ├── main.jsx             # React DOM entry mount point
│   ├── index.css            # Tailwind directives, font configurations, and slide transitions
│   └── App.css              # Cleared unused styles
├── tailwind.config.js       # Tailwind theme colors and scope configurations
├── postcss.config.js        # PostCSS directives mapping Tailwind and Autoprefixer
├── index.html               # Main page layout containing viewport scaling and title (PopX)
├── package.json             # Dependecy registries and npm scripts
└── README.md                # Project documentation
```

## Setup & Running Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
Clone or open the directory and install dependencies:
```bash
npm install
```

### Run Locally
Start the development server:
```bash
npm run dev
```

### Build for Production
Bundle the assets into production-ready static outputs inside `/dist`:
```bash
npm run build
```
