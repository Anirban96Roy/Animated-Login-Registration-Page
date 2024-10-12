# Login and Signup Form with Animation

This project is a responsive login and signup form that uses HTML, CSS, and JavaScript to create smooth transitions between the two forms. It features clean, modern UI design with animated transitions between login and registration forms.

## Features

- Responsive design.
- Animated transitions between login and signup forms.
- Hover effects on buttons.
- Simple but modern and clean UI.
- Includes external icons from Boxicons for a sleek look.

## Files

- **index.html**: Contains the structure of the login and signup form.
- **style.css**: Provides the styles for the form, including animations, layout, and design elements.
- **index.js**: Adds interactivity by toggling between the login and signup forms with smooth animations.

## How to Use

1. Clone the repository or download the source code.
2. Make sure all the files (HTML, CSS, JS) are in the same directory.
3. Open `index.html` in any modern browser.
4. You will see the login form by default.
   - To switch to the signup form, click the "SignUp" link at the bottom of the login form.
   - To switch back to the login form, click the "Login" link at the bottom of the signup form.

## Technologies Used

- **HTML5**: For the structure of the forms and elements.
- **CSS3**: For styling and animations, including hover effects, transition delays, and responsiveness.
- **JavaScript**: For toggling between login and signup forms and handling click events.
- **Boxicons**: For user and lock icons in the input fields.

## Code Overview

### HTML (`index.html`)

The form has two main sections:
- **Login Form**: Default view when the page loads.
- **Signup Form**: Hidden initially but appears when you click on "SignUp".
  
Each form has input fields with a label and an icon for `Username` and `Password`, and both forms have a button to submit the respective action.

### CSS (`style.css`)

The main styling includes:
- Layout and positioning of the forms.
- Button hover effects with gradient transitions.
- Transition effects between login and signup forms using `.active` class.
- Animated background shapes (`.curved-shape` and `.curved-shape2`) to give the form a unique look.

### JavaScript (`index.js`)

- The script listens for click events on the "SignUp" and "Login" links.
- When the "SignUp" link is clicked, the `.active` class is added to the `.container`, triggering the CSS transitions that bring the signup form into view and hide the login form.
- When the "Login" link is clicked, the `.active` class is removed, returning to the login form.

## Customization

- **Icons**: The form uses icons from Boxicons. You can replace them with your preferred icons by updating the `<i>` tags in the HTML.
- **Colors**: The theme color is set to a pinkish hue (`#ff2770`). You can modify the color scheme in `style.css` by changing this value and related gradient settings.
