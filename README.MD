# E-commerce Platform (Next.js + TypeScript + SASS + Strapi)

Welcome to the **E-commerce Platform**! This project is a modern, scalable e-commerce application built with a powerful tech stack. The frontend is developed using **Next.js** with **TypeScript** and **modular SASS** for styling, while the backend is powered by **Strapi**, a headless CMS, to manage products, users, and orders.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend (Strapi) Setup](#backend-strapi-setup)
  - [Frontend (Next.js) Setup](#frontend-nextjs-setup)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Product Management**: Add, update, and delete products via Strapi's admin panel.
- **User Authentication**: Secure user login and registration (via Strapi).
- **Responsive Design**: Modular SASS ensures a clean, maintainable, and responsive UI.
- **Type-Safe Code**: TypeScript ensures robust and error-free development.
- **SEO Optimized**: Next.js provides server-side rendering for better SEO.
- **API Integration**: Seamless communication between the Next.js frontend and Strapi backend.

## Tech Stack
- **Frontend**:
  - Next.js (React Framework)
  - TypeScript
  - SASS (Modular CSS)
- **Backend**:
  - Strapi (Headless CMS)
- **Other Tools**:
  - Node.js
  - npm or Yarn

## Project Structure

ecommerce-nextjs-strapi/

├── backend/        # Strapi backend (Headless CMS)

└── frontend/       # Next.js frontend (TypeScript + SASS)


## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or Yarn
- Git

## Installation

### Backend (Strapi) Setup
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Start the Strapi server in development mode: `npm run develop`
4. Access the Strapi admin panel at `http://localhost:1337/admin` and set up your admin user.
5. Configure your content types (e.g., Products, Users, Orders) in the Strapi admin panel.

### Frontend (Next.js) Setup
1. Navigate to the frontend folder:
2. Install dependencies:
3. Create a `.env.local` file in the `frontend` directory and add the necessary environment variables (see [Environment Variables](#environment-variables) below).
4. Start the Next.js development server:
5. Open `http://localhost:3000` in your browser to see the frontend.

## Running the Project
1. Start the backend (Strapi):
- From the `backend` folder, run: `npm run develop`
2. Start the frontend (Next.js):
- From the `frontend` folder, run: `npm run dev`
3. Ensure both servers are running:
- Strapi backend: `http://localhost:1337`
- Next.js frontend: `http://localhost:3000`

## Environment Variables
Create a `.env.local` file in the `frontend` folder with the following variables:

`NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337`

`NEXT_PUBLIC_STRAPI_API_TOKEN=your-strapi-api-token`

- `NEXT_PUBLIC_STRAPI_API_URL`: The URL of your Strapi backend.
- `NEXT_PUBLIC_STRAPI_API_TOKEN`: (Optional) If your Strapi API requires authentication, generate a token in the Strapi admin panel.

For the backend, you may need to configure environment variables in a `.env` file in the `backend` folder, such as database settings (if not using SQLite).

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.