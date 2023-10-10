import React, { FC } from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

interface GoogleSignInButtonProps {
  children: React.ReactNode
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/admin'})
  }
  return <Button onClick={loginWithGoogle} className='w-full'>{children}</Button>
}

export default GoogleSignInButton
