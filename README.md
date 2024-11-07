# VocaTask 🎯

VocaTask is a task management app built with React and Vite, designed to help you manage and track your tasks efficiently. It comes with user authentication, profile management, and a clean, modern UI.

## Features ✨

- **User Authentication**: Login, Sign Up, and Edit Profile functionality.
- **Task Management**: Track your tasks with ease.
- **Responsive Design**: Optimized for both mobile and desktop.
- **Customizable Profile**: Set your avatar and personalize your information.

## Installation 🔧

To get started with VocaTask, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/VocaTask.git
```

### 2. Install Dependencies
Navigate into the project directory and install the necessary dependencies:

```bash
cd VocaTask
npm install
```
Alternatively, you can use yarn:

```bash
cd VocaTask
yarn install
```

### 3. Run the App 🚀
After installing the dependencies, run the app locally:
```bash
npm run dev
```

Or if you're using yarn:
```bash
yarn dev
```

## Font Awesome Integration 🌟
VocaTask uses Font Awesome icons for a sleek and modern look. To integrate Font Awesome into the app, we use the following steps:

### 1. Install Font Awesome
You can install Font Awesome by running this command:
```bash
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

Or using yarn:
```bash
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

## 2. Usage in React Components
To use Font Awesome icons in your React components, you can import the icons like this:

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
```
And then use the icon in your component:

```jsx
<FontAwesomeIcon icon={faCoffee} />
```

### Available Icons
For a full list of icons, visit the official Font Awesome Icons Gallery --> https://fontawesome.com/icons.

## Technologies Used 🛠
- React: JavaScript library for building user interfaces.
- Vite: A fast build tool and development server.
- Font Awesome: A library of high-quality icons.
- LocalStorage: For saving user data and login sessions.
- Tailwind CSS: For utility-first styling.

## Contributing 🤝
If you would like to contribute to VocaTask, feel free to fork the repo, create a new branch, and submit a pull request. We welcome any improvements, bug fixes, or new features!

## License 📄
VocaTask is licensed under the MIT License.
