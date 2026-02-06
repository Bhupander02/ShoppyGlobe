Link: "https://github.com/Bhupander02/ShoppyGlobe.git"

React E-Commerce Product Showcase

This project is a simple e-commerce style product showcase application built using React, Redux Toolkit, and React Router. The application allows users to browse products, view detailed product information, add items to a shopping cart, remove items, and clear the cart. The project also demonstrates performance optimization using code splitting and lazy loading.

Project Overview

The application displays a list of products loaded from mock local storage data. Users can click on any product to view its detailed information. The cart functionality allows users to manage selected items. The application uses modern React architecture including Redux state management and route-based lazy loading for better performance.

Features

Product listing page displaying all available products
Product detail page showing seller, rating, description, price, and image
Add product to cart
Remove individual product from cart
Clear entire cart
Cart item counter displayed in the navigation header
Persistent product storage using browser local storage
Responsive card-based UI styling using pure CSS
Route-based navigation using React Router
Code splitting using React lazy loading
Lazy loading of images for performance optimization
Error handling page for invalid routes
Contact page navigation

Technologies Used

React
Redux Toolkit
React Router DOM
JavaScript ES6
CSS
Local Storage API

Folder Structure Overview

Components folder contains UI components such as header, product list, product details, cart page, error page, and contact page
Utils folder contains Redux store, cart slice, and local storage handlers
Mock data file contains product dataset
App file manages global layout and routing outlet

How the Application Works

The application loads product data from a mock data file and stores it in browser local storage. Redux manages the cart state. When users add or remove items, the Redux store updates and automatically refreshes UI components using React hooks. React Router controls page navigation. Components are loaded lazily to improve initial page load speed.

Requirements to Run This Project

Node.js installed on the system
Package manager such as npm or yarn
Modern web browser

Steps to Run the Project

Download or clone the project
Install dependencies
Start the development server
Open the project in the browser

Performance Optimizations Implemented

Route-based code splitting reduces initial bundle size
Lazy loading loads components only when required
Images load only when visible in viewport
Redux centralizes state to avoid unnecessary re-renders