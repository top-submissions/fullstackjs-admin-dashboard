# Admin Dashboard

A responsive admin dashboard built with HTML, CSS Grid, and vanilla JavaScript as part of The Odin Project's Intermediate HTML and CSS course.

## 📋 Project Overview

This project demonstrates mastery of CSS Grid layout techniques by creating a fully-functional admin dashboard interface. The dashboard features a modern design with a sidebar navigation, header with user controls, project cards, announcements section, and trending users panel.

## ✨ Features

- **Responsive Layout**: Built with CSS Grid for main structure and nested grids for components
- **SVG Icons**: All icons are loaded from external SVG files using the `<use>` tag
- **Modern Design**: Clean, professional interface with hover effects and transitions
- **Interactive Elements**: 
  - Navigation items with hover states
  - Project cards with action buttons
  - Functional search bar
  - Interactive buttons with hover effects
- **Mobile-Friendly**: Adapts to different screen sizes

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Grid, Flexbox, CSS Custom Properties
- **JavaScript (ES6)**: For interactive features
- **SVG**: Vector icons for all interface elements
- **Google Fonts**: Roboto font family

## 📁 Project Structure

```
admin-dashboard/
├── assets/
│   └── images/
│       └── icons/
│           ├── cards/           # Card action icons
│           │   ├── favorite.svg
│           │   ├── share.svg
│           │   └── views.svg
│           ├── sidebar/         # Navigation icons
│           │   ├── communities.svg
│           │   ├── dashboard.svg
│           │   ├── history.svg
│           │   ├── home.svg
│           │   ├── message.svg
│           │   ├── privacy.svg
│           │   ├── profile.svg
│           │   ├── settings.svg
│           │   ├── support.svg
│           │   └── tasks.svg
│           ├── notification.svg # Bell icon
│           └── profile-avatar.svg # User avatars
├── src/
│   ├── index.html              # Main HTML file
│   ├── styles.css              # All CSS styles
│   └── script.js               # JavaScript functionality
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS
- Git (optional, for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/admin-dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd admin-dashboard
   ```

3. Open the project in your preferred code editor

4. Open `src/index.html` in your browser to view the dashboard

### Alternative: Direct File Access

Simply open the `src/index.html` file directly in your web browser to view the dashboard.

## 🎨 Design Implementation

### Layout Structure

The dashboard uses a CSS Grid layout with the following structure:

1. **Main Container Grid** (2 columns, 2 rows):
   - Column 1: Sidebar (fixed width)
   - Column 2: Header + Main Content
   - Row 1: Sidebar spans full height
   - Row 2: Header + Main Content area

2. **Header Grid** (2x2 grid for search, user info, greeting, and actions)

3. **Main Content Grid** (2 columns for projects and right sidebar)

4. **Projects Grid** (responsive grid of project cards)

### Key CSS Features

- **CSS Grid**: For all major layout components
- **CSS Flexbox**: For aligning items within grid cells
- **CSS Variables**: For consistent colors and spacing
- **Media Queries**: For responsive design
- **Transitions**: For smooth hover effects

### Color Scheme

| Color | Usage | HEX Code |
|-------|-------|----------|
| Primary Blue | Sidebar, buttons | `#1992d4` |
| Accent Yellow | Card borders, avatars | `#f0b429` |
| Light Gray | Background | `#e2e8f0` |
| White | Cards, header | `#ffffff` |
| Dark Gray | Text | `#333333` |
| Medium Gray | Secondary text | `#666666` |

## 📱 Responsive Design

The dashboard is responsive across different screen sizes:

- **Desktop**: Full layout with sidebar
- **Tablet**: Stacked main content, smaller sidebar
- **Mobile**: Single column layout, hamburger menu (future enhancement) 

## 📚 Learning Outcomes

This project helped reinforce:

- Advanced CSS Grid techniques
- Nested grid layouts
- Responsive design principles
- SVG icon implementation
- JavaScript DOM manipulation
- Project structure and organization

## 🙏 Acknowledgments

- **The Odin Project** for the project specification and guidance
- **Material Design Icons** for icon inspiration
- **Google Fonts** for the Roboto typeface

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*This project was completed as part of The Odin Project's Full Stack JavaScript curriculum.*