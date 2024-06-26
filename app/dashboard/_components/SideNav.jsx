"use client"
import { Progress } from '../../../components/ui/progress'
import { Button } from '../../../components/ui/button'
import { AreaChart, LibraryBig, MessageSquareQuote, ShieldPlus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const menuList=[
        {
            id:1,
            name:"My Forms",
            icon:LibraryBig,
            path:'/dashboard'
        },
        {
            id:1,
            name:"Responses",
            icon:MessageSquareQuote,
            path:'/responses'
        },
        {
            id:1,
            name:"Analytics",
            icon:AreaChart,
            path:'/analytics'
        },
        {
            id:1,
            name:"Upgrade",
            icon:ShieldPlus,
            path:'/upgrade'
        },
    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path);
    },[path])
  return (
    <div className='h-screen shadow-md border'>
        <div className='flex flex-col gap-4 p-4 text-gray-500'>
            {menuList.map((item,index)=>(
                <h2 className={`flex gap-2 cursor-pointer p-3 mb-3 
                hover:bg-orange-400 hover:text-white rounded-md transition-all duration-300
                ${path=== item.path && 'bg-primary text-white'}
                `}
                 key={index}>
                    <item.icon />
                    {item.name}
                </h2>
            ))}
        </div>
        <div className='fixed bottom-24 p-2 flex flex-col  justify-center items-center w-64'>
            <Button className="w-full bg-orange-400">+ Create Form</Button>
            <div className='my-5 w-full items-center justify-center' >
            <Progress className="bg-gray-100" value={33} />
            <h2 className='text-sm text-gray-500 my-2 text-center'><strong className='mx-1'>2</strong>out of<strong className='mx-1'>3</strong> File Created</h2>
            <h2 className='text-sm text-center text-gray-500 p-2 items-center '>Upgrade your plan for building unlimited AI forms</h2>
            
            </div>

        </div>
    </div>
  )
}

export default SideNav