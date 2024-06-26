"use client"

import { and, eq } from 'drizzle-orm'
import { db } from '../../../configs'
import { Jsonforms } from '../../../configs/schema'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import FormUI from './_components/FormUI'

const EditForm = ({params}) => {
    const router=useRouter();
    const {user}=useUser();
    const [jsonForm, setjsonForm] = useState([])
    useEffect(()=>{
        user && getFormData()
    },[user])


    const getFormData=async()=>{

        const result=await db.select().from(Jsonforms)
        .where(and(eq(Jsonforms.id,params?.formId), 
        eq(Jsonforms.createdBy, user?.primaryEmailAddress?.emailAddress)))
        const data=result[0].jsonform
        console.log(JSON.parse(data));
        setjsonForm(JSON.parse(data));
    }

    
  return (
    <div className='p-10'>
        <h2 
        onClick={()=>router.back()}
        className='flex gap-2 items-center my-5 cursor-pointer hover:font-bold transition-all'>
            <ArrowLeft />Back
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='p-5 border rounded-lg shadow-md'>
                Controller
            </div>
            <div className='md:col-span-2 border rounded-lg p-5 flex items-center justify-center'>
                <FormUI jsonForm={jsonForm} />
            </div>
        </div>
    </div>
  )
}

export default EditForm