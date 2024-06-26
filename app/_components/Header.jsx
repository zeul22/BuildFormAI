"use client"
import { Button } from '../../components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

  const {user,isSignedIn}=useUser()
  return (
    <div className='p-3 border-b shadow-sm'>
        <div className='flex justify-between'>
            <Link className='cursor-pointer' href={"/"}>
                <Image src={"/logo.svg"} width={60} height={30} />
            </Link>
        {isSignedIn ? 
        <div className='flex gap-5 items-center'>
            <Link href={"/dashboard"} >
            <Button className="hover:bg-orange-400 transition-all duration-300">Dashboard</Button>
            </Link>
            <UserButton />
        </div>
        :
        <SignInButton>
            <Button className='bg-orange-400'>Get Started</Button>
        </SignInButton>
    }
        </div>
    </div>
  )
}

export default Header