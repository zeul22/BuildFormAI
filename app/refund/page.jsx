import React from "react";
import Footer from "../_components/Footer";

const page = () => {
  const t_c = [
    {
      title: "Eligibility for Refunds",
      text: "Refunds are available for subscriptions that meet the following criteria: technical issues, unsatisfactory service, or billing errors.",
    },
    {
      title: "Refund Process",
      text: "To request a refund, contact us at ananrahul033@gmail.com. Once your request is received and inspected, we will notify you of the approval or rejection of your refund.",
    },
    {
      title: "Processing Time",
      text: "Refunds will be processed within 5-7 working days and credited to your original method of payment.",
    },
    {
      title: "Cancellations",
      text: "Subscriptions can be canceled at any time. Contact us immediately if you need to cancel your subscription.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="flex justify-center p-4 font-bold text-3xl">
          Refunds/Cancellations Policy
        </h1>
        <div className="space-y-4 p-12">
          <div>
            " Welcome, if you continue to browse and use this website you are
            agreeing to comply with and be bound by the following terms and
            conditions of use, which together with our privacy policy govern
            BuildFormAI relationship with you in relation to this website. The
            term 'BuildFormAI' or 'us' or 'we' refers to the owner of the
            website. The term 'you' refers to the user or viewer of our
            website."
          </div>
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
      <Footer />
    </>
  );
};

export default page;
