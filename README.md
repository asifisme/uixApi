# uixapi

Modern React + TypeScript Frontend for xApi

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [API Integration](#api-integration)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**uixapi** is a modern, modular frontend application built with React, TypeScript, Vite, Redux Toolkit, and Tailwind CSS. It serves as the user interface for the [xApi](../xApi/README.md) backend, providing a seamless experience for e-commerce, authentication, product browsing, and more. The project is designed for scalability, maintainability, and developer productivity, following industry best practices.

---

## Features

- **User Authentication**: Secure sign up, sign in, JWT-based session management, and protected routes.
- **Product Catalog**: Browse, search, and view detailed product information with images, pricing, and stock status.
- **Shopping Cart**: Add, update, and remove items from the cart, with persistent state and integration with backend cart APIs.
- **User Dashboard**: Manage orders, view purchase history, and update user profile information.
- **Responsive UI**: Fully responsive design using Tailwind CSS and Material UI, optimized for all devices.
- **API Integration**: All data operations are performed via RESTful API calls to the xApi backend.
- **Error Handling & Loading States**: User-friendly feedback for all async operations, including loading spinners and error messages.
- **Type-Safe State Management**: Redux Toolkit and TypeScript ensure robust, maintainable state logic.
- **Extensible Component Library**: Modular, reusable components for rapid development.
- **Modern Tooling**: Fast development with Vite, hot module replacement, and strict linting.

---

## Architecture

- **React 19** for UI rendering and component-based architecture.
- **Redux Toolkit** for global state management, async thunks for API calls, and slice-based logic separation.
- **TypeScript** for static typing and improved code quality.
- **Vite** for lightning-fast development and build tooling.
- **Tailwind CSS** and **Material UI** for styling and UI components.
- **Axios** for HTTP requests to the backend API.
- **Radix UI** for accessible, headless UI primitives.

---

## Project Structure

- `src/` – Main source code
  - `api/` – API utilities and endpoint definitions
  - `app/` – Redux store configuration and setup
  - `components/` – Reusable UI components (buttons, forms, modals, etc.)
  - `dashboard/` – User dashboard views and logic
  - `features/` – Redux slices and async thunks for domain logic (auth, cart, products, etc.)
  - `hooks/` – Custom React hooks for shared logic
  - `layouts/` – Layout components (e.g., RootLayout, AuthLayout)
  - `lib/` – Utility libraries and helpers
  - `pages/` – Page-level components (404, landing, etc.)
  - `post/` – Post-related components and logic
  - `services/` – Service layer for API abstraction
  - `styles/` – Global and component-specific styles
  - `App.tsx` – Main application entry and route definitions
  - `main.tsx` – React root rendering
  - `index.css` – Global CSS imports

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd uixapi
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (default Vite port)

### Environment Variables

Create a `.env` file in the project root to configure API endpoints and other environment-specific settings. Example:

```env
VITE_API_BASE_URL=http://localhost:8000/api/
```

---

## Available Scripts

- `npm run dev` – Start development server with hot reloading
- `npm run build` – Build for production (output in `dist/`)
- `npm run preview` – Preview production build locally
- `npm run lint` – Lint codebase using ESLint

---

## Tech Stack

- **React 19** – Component-based UI
- **TypeScript** – Static typing
- **Vite** – Fast dev/build tool
- **Redux Toolkit** – State management
- **Tailwind CSS** – Utility-first CSS
- **Material UI (MUI)** – UI components
- **Radix UI** – Headless UI primitives
- **Axios** – HTTP client
- **Zod** – Schema validation

---

## Folder Structure

```
uixapi/
├── public/                # Static assets (favicon, images, etc.)
├── src/
│   ├── api/               # API utilities and endpoint definitions
│   ├── app/               # Redux store setup
│   ├── components/        # Reusable UI components
│   ├── dashboard/         # User dashboard views
│   ├── features/          # Redux slices/thunks (auth, cart, products, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page-level components
│   ├── post/              # Post-related logic
│   ├── services/          # API service abstraction
│   ├── styles/            # Global/component styles
│   ├── App.tsx            # App entry and routing
│   ├── main.tsx           # React root
│   └── index.css          # Global styles
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
├── vite.config.ts         # Vite config
└── ...
```

---

## API Integration

All data is fetched from the [xApi backend](../xApi/README.md) via RESTful endpoints. The base URL is configured via environment variables. Example endpoints:

- `POST /signin/` – User login
- `POST /signup/` – User registration
- `GET /product/` – List all products
- `GET /product/?search=<uid>` – Search for a product by UID
- `POST /cart/` – Create or update cart

API calls are handled using Axios and Redux async thunks, with error and loading state management for robust UX.

---

## Development Guidelines

- **Component Reusability**: Build modular, reusable components.
- **Type Safety**: Use TypeScript for all code.
- **State Management**: Use Redux Toolkit for global state, local state for UI-only logic.
- **Styling**: Prefer Tailwind CSS utility classes; use MUI/Radix for complex UI.
- **API Calls**: Use the `api/` and `services/` layers for all HTTP requests.
- **Testing**: Add tests for critical logic and components (future improvement).
- **Linting**: Run `npm run lint` before committing.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request with a clear description

---

## License

This project is licensed under the MIT License.
