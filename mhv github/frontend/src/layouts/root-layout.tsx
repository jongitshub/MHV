import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import ThemeController from '../components/ThemeController'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header">
        <div className='bg-blue-100 p-5'>
          <ThemeController />          
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='justify-self-center space-x-40 p-4'>
            <Link to="/home">Home</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
            </div>
          </SignedOut>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}