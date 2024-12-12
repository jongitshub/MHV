import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return <div className='justify-self-center p-10'>
    <SignIn fallbackRedirectUrl="/home" path="/sign-in" />
    </div>
}