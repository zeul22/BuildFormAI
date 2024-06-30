import React from "react";
import Footer from "../_components/Footer";

const page = () => {
  const contact_us = [
    {
      title: "Contact Information",
      text: "For any questions or concerns, please contact us: Email: ananrahul033@gmail.com, Phone: +917903457533, Address: F-111, Ashok Vihar, Ashok Nagar, Ranchi, Jharkhand, Pincode-834002 ",
    },
  ];
  const t_c = [
    {
      title: "Products/Services Information",
      text: "BuildFormAI provides a service to create forms in seconds using generative AI. Our goal is to offer a seamless and efficient way to generate customized forms, saving you time and effort.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="flex justify-center p-4 font-bold text-3xl">Pricing</h1>
        <div className="space-y-4 p-12 min-h-screen">
          <h2 className="font-semibold">{contact_us[0].title}</h2>
          <div>{contact_us[0].text}</div>
          {t_c.map((item, index) => (
            <details
              key={index}
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  {index + 1}. {item.title}
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                {item.text}
              </p>
            </details>
          ))}
        </div>
      </div>
      <div className=" w-full bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default page;
