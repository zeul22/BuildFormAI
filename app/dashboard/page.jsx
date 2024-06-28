import { Button } from '../../components/ui/button'
import React from 'react'
import CreateForm from './_components/CreateForm'
import ListForm from './_components/ListForm'

const Dashboard = () => {
  return (
    <div className='p-10 min-h-screen'>
        <h2 className='font-bold text-3xl flex items-center justify-between'>
            Dashboard
           <CreateForm />
        </h2>
        <ListForm />
    </div>
  )
}

export default Dashboard