# Fetch Hooks

A powerful React hooks library for efficient data fetching and state management, specifically designed for WordPress API integration. This project provides a set of custom hooks that handle data fetching, caching, and filtering with built-in TypeScript support.

## 🚀 Features

- **Smart Data Fetching**: Custom hooks for efficient API data retrieval with automatic caching
- **WordPress Integration**: Built-in support for WordPress REST API with pagination and filtering
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Performance Optimized**: Built-in caching mechanism to reduce API calls
- **Modern Development**: Next.js 15.1.4 with React 19 and modern tooling

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/fetch-hooks.git
cd fetch-hooks
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# WordPress API Configuration
NEXT_PUBLIC_API_ENDPOINT_WORDPRESS=your_wordpress_api_url_here
NEXT_PUBLIC_IMAGE_HOSTNAME=your_image_hostname
```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── app/          # Next.js app router pages
├── assets/       # Static assets
├── components/   # React components
├── constants/    # Application constants
├── helpers/      # Utility functions
├── hooks/        # Custom React hooks
│   ├── useFetchData.ts         # Core data fetching hook with caching
│   ├── useFilterList.ts        # WordPress posts filtering hook
│   └── useCreateQueryString.ts # URL query string management
└── types/        # TypeScript type definitions
```

## 🔧 Tech Stack

- **Framework**: Next.js 15.1.4
- **Language**: TypeScript
- **UI Library**: React 19
- **API Integration**: WordPress REST API
- **Code Quality**: ESLint, Prettier
- **Security**: DOMPurify for XSS protection

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
