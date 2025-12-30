# 🛍️ ShopHub - E-Commerce Store UI

**Live Demo**: [https://shophub-tan.vercel.app](https://shophub-tan.vercel.app)  
**GitHub**: [yashrajkmr/shophub](https://github.com/yashrajkmr/shophub)

A modern, responsive e-commerce frontend built with **React + TypeScript + Tailwind CSS**. Features product listing with advanced filtering, global shopping cart with localStorage persistence, and complete checkout flow.

## ✨ Features

**Core Functionality**
- 🏠 **Home Page** - Hero section with featured categories
- 📦 **Product Listing** - 20+ products with search, filters (category, price), sorting
- 📄 **Product Detail Page** - Full info with reviews section
- 🛒 **Shopping Cart** - Add/remove, quantity controls, real-time totals
- 💳 **Checkout Flow** - Form validation + order confirmation
- 💾 **localStorage** - Cart persists across sessions

**Technical Features**
- ⚛️ React 18 + TypeScript (full type safety)
- 🎨 Tailwind CSS (mobile-first responsive)
- 🔄 React Router (7+ pages)
- 🎯 Context API (global cart state)
- ♿ Semantic HTML + accessibility

## 📁 Project Structure

shophub/
├── public/products.json # Mock API data
├── src/
│ ├── components/ # 20+ reusable (ProductCard, Navbar, etc.)
│ ├── context/ # CartContext
│ ├── hooks/ # useCart, useProducts
│ ├── pages/ # Home, Products, Cart, Checkout
│ ├── types/ # TypeScript interfaces
│ └── utils/
├── package.json
├── tailwind.config.js
└── vite.config.ts

## 🚀 Quick Start

git clone https://github.com/yashrajkmr/shophub.git
cd shophub
npm install
npm run dev

**Live at**: `http://localhost:5173`

## 🛠️ Tech Stack
React 18 • TypeScript • Tailwind CSS • Vite • React Router • Context API

## 💡 Interview Highlights

- **State Management**: Context API for cart (simpler than Redux for this scale)
- **TypeScript**: Full interfaces for products, cart, forms (compile-time safety)
- **Performance**: `useMemo` for filtering, `React.memo` for ProductCard
- **Responsive**: Mobile-first Tailwind (1-col mobile → 4-col desktop)

## 📊 Resume Bullets
ShopHub - E-Commerce Store UI (React + TypeScript + Tailwind)

• Built responsive multi-page storefront with product listing, filters, search, sorting (20+ products)

• Implemented global cart state with Context API + localStorage, supporting real-time totals

• Created checkout flow with client-side validation and 7+ routed pages

• Structured with 20+ reusable TypeScript components and custom hooks
Live: https://shophub-tan.vercel.app/ | GitHub: https://github.com/yashrajkmr/shophub

## 🔮 Limitations (Frontend Focus)
- Mock JSON data (no real backend)
- No payments/auth (demo scope)
- Static reviews

## 👨‍💻 Author
**Yashraj Kumar**  
[LinkedIn](https://linkedin.com/in/yashraj-kumar) | [GitHub](https://github.com/yashrajkmr)

⭐ **Star if helpful!**
