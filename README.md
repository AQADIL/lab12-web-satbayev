# 🧮 Calculator - Interactive Math Tool

<div align="center">

![Calculator](https://img.shields.io/badge/Calculator-Math%20Tool-4F46E5?style=for-the-badge&logo=calculator&logoColor=white)

**A modern, responsive calculator built with vanilla JavaScript for the MarlenEDU platform**

[![GitHub stars](https://img.shields.io/github/stars/AQADIL/lab12-web-satbayev.svg?style=social&logo=github)](https://github.com/AQADIL/lab12-web-satbayev)
[![GitHub forks](https://img.shields.io/github/forks/AQADIL/lab12-web-satbayev.svg?style=social&logo=github)](https://github.com/AQADIL/lab12-web-satbayev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://aqadil.github.io/lab12-web-satbayev/)

</div>

## 📖 About

This is a clean, modern calculator component designed as part of the MarlenEDU educational platform. It provides essential arithmetic operations with a beautiful, user-friendly interface and smooth animations.

### ✨ Features

- � **Modern UI** - Clean, card-based design with gradient buttons
- ⚡ **Real-time Calculations** - Instant results without page reload
- 🛡️ **Error Handling** - Comprehensive validation and error messages
- 📱 **Fully Responsive** - Works perfectly on all device sizes
- 🎯 **Keyboard Support** - Enter key navigation and operation shortcuts
- 🌈 **Visual Feedback** - Hover effects, transitions, and micro-interactions

## 🛠️ Technical Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and accessibility |
| **CSS3** | Modern styling with animations and transitions |
| **JavaScript (ES6+)** | Calculator logic and DOM manipulation |
| **CSS Grid/Flexbox** | Responsive layout system |

## 🏗️ Architecture

```
lab12-web-satbayev/
├── � calculator.html        # Main calculator page
├── 📁 assets/               # Static resources
│   ├── css/
│   │   └── style.css        # Complete styling system
│   └── js/
│       └── script.js        # Platform-wide functionality
└── 📄 README.md             # This documentation
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/AQADIL/lab12-web-satbayev.git
   cd lab12-web-satbayev
   ```

2. **Open in browser**
   ```bash
   # Simply open calculator.html in your favorite browser
   open calculator.html
   ```

3. **Start calculating!**
   - Enter values in X and Y fields
   - Click operation buttons or use keyboard
   - View instant results

## � Usage

### Basic Operations
- **Addition (+)**: Sum of X and Y
- **Subtraction (−)**: Difference between X and Y  
- **Multiplication (×)**: Product of X and Y
- **Division (÷)**: Quotient of X divided by Y

### Keyboard Navigation
- **Enter in X field**: Jump to Y field
- **Enter in Y field**: Perform addition operation
- **Tab**: Navigate between fields and buttons

### Error Handling
- **Empty fields**: Shows validation message
- **Invalid numbers**: Displays error for non-numeric input
- **Division by zero**: Shows specific error message
- **Visual feedback**: Shake animation for errors

## 🎨 Design Features

### Visual Elements
- **Gradient buttons** with unique colors for each operation
- **Smooth hover effects** with transform and shadow changes
- **Focus states** with colored borders and shadows
- **Success/error states** with color-coded results

### Responsive Design
- 📱 **Mobile** (< 480px): 2x2 button grid, larger touch targets
- 💻 **Desktop** (> 480px): 4x1 button grid, optimal spacing
- 🖥️ **All sizes**: Centered card layout with proper scaling

### Animations
- **Button hover**: Lift effect with shadow enhancement
- **Button press**: Subtle press animation
- **Error shake**: Horizontal shake animation for validation errors
- **Result transitions**: Smooth color changes for success/error states

## 🔧 Customization

### Styling Changes
Edit CSS variables in the `<style>` section:
```css
.calculator-card {
    /* Modify card appearance */
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.operation-btn {
    /* Customize button appearance */
    border-radius: 12px;
    transition: all 0.3s ease;
}
```

### Adding Operations
1. Add new button in HTML:
```html
<button class="operation-btn btn-custom" data-operation="custom">%</button>
```

2. Add CSS styling:
```css
.btn-custom {
    background: linear-gradient(135deg, #custom-color, #custom-dark);
}
```

3. Implement in JavaScript:
```javascript
case 'custom':
    result = (x / y) * 100;
    break;
```

## 🌟 Highlights

- ⚡ **Performance** - No external dependencies, pure vanilla JS
- 🎯 **Accessibility** - Semantic HTML, keyboard navigation
- 🔒 **Security** - No external API calls or data processing
- 📊 **Precision** - Uses `parseFloat()` for accurate decimal calculations
- 🌍 **Localization Ready** - Easy to translate error messages and labels

## 🧪 Testing

### Manual Testing Checklist
- [ ] All basic operations work correctly
- [ ] Empty field validation
- [ ] Division by zero handling
- [ ] Decimal number support
- [ ] Keyboard navigation
- [ ] Mobile responsiveness
- [ ] Visual feedback on interactions
- [ ] Error message clarity

### Test Cases
```javascript
// Basic operations
5 + 3 = 8
10 - 4 = 6
7 * 8 = 56
15 / 3 = 5

// Edge cases
0 + 0 = 0
1 / 0 = Error
Empty + 5 = Error
2.5 + 3.7 = 6.2
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Contribution Ideas
- Add more mathematical operations (power, square root, etc.)
- Implement calculation history
- Add keyboard shortcuts for operations
- Improve mobile touch interactions
- Add dark mode support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Contact

- **Platform**: MarlenEDU
- **Email**: info@marlenedu.kz
- **Website**: [marlenedu.kz](https://marlenedu.kz)
- **Location**: Almaty, Kazakhstan

---

<div align="center">

**⭐ Star this repository if you find it useful!**

Built with ❤️ for educational purposes

</div>
