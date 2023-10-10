import React, { FC } from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

interface GoogleSignInButtonProps {
  children: React.ReactNode
}

const GithubSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGithub = () => {
    signIn('github', { callbackUrl: 'http://localhost:3000/admin'})
  }
  return <Button onClick={loginWithGithub} className='w-full'>{children}</Button>
}

export default GithubSignInButton
