# Clerk Next.js Authentication Demo

A modern authentication example built with Next.js and Clerk, featuring a web3-inspired UI design.

## 🚀 Features

- **Complete Authentication Flow**: Sign up, sign in, sign out, and user profile management
- **Modern UI**: Web3-inspired design with glassmorphism effects
- **Responsive Layout**: Optimized for all device sizes
- **Role-Based Access Control**: Protected routes and content based on authentication state
- **Built with Modern Stack**:
  - Next.js App Router
  - Clerk Authentication
  - Tailwind CSS
  - React Hooks

## 🛠️ Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/clerk-next-auth.git
   cd clerk-next-auth
   ```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env.local file in the root directory with your Clerk API keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:

```bash
npm run development
```

5. Open `http://localhost:3000` with your browser to see the result.

## 🔒 Authentication Flow

- This project uses Clerk for authentication, which provides:

- Email and password authentication
- Social login (Google, GitHub, etc.)
- Multi-factor authentication
- User profile management
- Session management

## 🎨 UI Components

- The UI is built with a web3-inspired design, featuring:

- Floating glassmorphism header
- Gradient backgrounds and buttons
- Responsive navigation
- Mobile-friendly layouts

## 🔧 Configuration

You can customize the Clerk components' appearance by modifying the appearance prop in the respective components.

## 📚 Learn More

- To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

- This project is licensed under the MIT License - see the LICENSE file for details.
