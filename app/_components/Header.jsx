import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 border-b shadow-sm'>
        <div className='flex justify-between'>
        <Image src={"/logo.svg"} width={60} height={30} />
        <Button className='bg-orange-400'>Get Started</Button>
        </div>
    </div>
  )
}

export default Header