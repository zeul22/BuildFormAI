import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className=" text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-orange-300 via-[#A871B3] to-blue-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Let AI help you.

        <span className="sm:block"> Build Forms in seconds! </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          className="w-full bg-orange-400 rounded border px-12 py-6 items-center  text-sm sm:w-auto"
        >
          Create Your First!
        </Button>
        <Button
          className="w-full bg-transparent rounded border px-12 py-6 text-sm font-medium text-gray-500 hover:text-white hover:bg-primary transition-all duration-300 sm:w-auto"
          href="#"
        >
          Learn More
        </Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero

