"use client"
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

const Pricing = () => {
    const [ismonthly,setIsMonthly]=useState(true);

    const monthlyPrice=[
        {
            "id":"1",
            "name":"Personal",
            "cost":"10",
            "features":[
                "3 free credits",
                "Limited Live Preview",
                "Limited Live Share",
            ]
        },
        {
            "id":"2",
            "name":"Professional",
            "cost":"18",
            "features":[
                "3 free credits",
                "Limited Live Preview",
                "Limited Live Share",
            ]
        },
        {
            "id":"3",
            "name":"Professional",
            "cost":"60",
            "features":[
                "3 free credits",
                "Limited Live Preview",
                "Limited Live Share",
            ]
        }
    ]

    const yearlyPrice=[
        {
            "id":"1",
            "name":"Personal",
            "cost":"115",
            "features":[
                "3 free credits",
                "Limited Live Preview",
                "Limited Live Share",
            ]
        },
        {
            "id":"2",
            "name":"Professional",
            "cost":"210",
            "features":[
                "3 free credits",
                "Limited Live Preview",
                "Limited Live Share",
            ]
        },
        {
            "id":"3",
            "name":"Professional",
            "cost":"640",
            "features":[
                "3 free credits",
                "Limited Live Preview",
                "Limited Live Share",
            ]
        }
    ]
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
            <p className="px-4 sm:px-8 lg:px-24">
              Build forms with our monthly/ annually subscription!
            </p>
            <div>
              <button onClick={()=>setIsMonthly(true)} className={`px-4 py-1  border rounded-l-lg dark:bg-violet-600 dark:border-violet-600 dark:text-gray-50 ${ismonthly? 'font-semibold':""}`}>
                Monthly
              </button>
              <button onClick={()=>setIsMonthly(false)} className={`px-4 py-1 border rounded-r-lg dark:border-violet-600 ${!ismonthly? 'font-semibold':""} `}>
                Annually
              </button>
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
          {
               ismonthly&& monthlyPrice.map((item,index)=>(
                <div key={index} className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
              <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-5xl font-bold">
                  {item.cost}$
                  <span className="text-xl dark:text-gray-600">/mo</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-50">
                <ul className="self-stretch flex-1 space-y-2">
                  <li className="flex justify-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span>Lumet consectetur adipisicing</span>
                  </li>
                  <li className="flex justify-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span>Lumet consectetur adipisicing</span>
                  </li>
                  <li className="flex justify-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span>Lumet consectetur adipisicing</span>
                  </li>
                </ul>
                <Button  className="hover:bg-orange-400 transition-all duration-300 w-full px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-violet-600 dark:text-gray-50">
                  Join
                </Button >
              </div>
            </div>
               ))
            }
            {
                !ismonthly&& yearlyPrice.map((item,index)=>(
                    <div key={index} className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                  <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-5xl font-bold">
                      {item.cost}$
                      <span className="text-xl dark:text-gray-600">/mo</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-50">
                    <ul className="self-stretch flex-1 space-y-2">
                      <li className="flex justify-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 dark:text-violet-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <span>Lumet consectetur adipisicing</span>
                      </li>
                      <li className="flex justify-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 dark:text-violet-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <span>Lumet consectetur adipisicing</span>
                      </li>
                      <li className="flex justify-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 dark:text-violet-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <span>Lumet consectetur adipisicing</span>
                      </li>
                    </ul>
                    <Button  className="hover:bg-orange-400 transition-all duration-300 w-full px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-violet-600 dark:text-gray-50">
                      Join
                    </Button >
                  </div>
                </div>
                   ))
            }
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
