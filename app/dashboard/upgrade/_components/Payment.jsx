import { useUser } from '@clerk/nextjs'
import React from 'react'

const logo="../../../favicon.png"
const Payment = () => {
    const {user}=useUser();
    const loadRazorPayScript=async(amount=900,currency=INR,id="order_9A33XWu170gUtm")=>{
        var options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": currency.toUppercase,
            "name": "BuildFormAI", //your business name
            "description": "Test Transaction",
            "image": logo,
            "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": user.fullName, //your customer's name
                "email": user.primaryEmailAddress?.emailAddress,
                "contact": user.phoneNumbers, //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1=Razorpay(options)
        rzp1.open();
        e.preventDefault();
    }
  return (
    <div>

        Payment
    </div>
  )
}

export default Payment