import React from "react";
import Footer from "../_components/Footer";

const page = () => {
  const t_c = [
    {
      title: "Introduction",
      text: "Welcome to BuildFormAI. These Terms and Conditions govern your use of our website and the purchase of our products/services.",
    },
    {
      title: "Acceptance of Terms",
      text: "By accessing and using our website, you agree to comply with these Terms and Conditions. If you disagree with any part, you may not access our services.",
    },
    {
      title: "Changes to Terms",
      text: "We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of the updated terms.",
    },
    {
      title: "User Obligations",
      text: "You agree to use our website only for lawful purposes and not to engage in any activity that could harm the site or its users.",
    },
    {
      title: "Intellectual Property",
      text: "All content on this site, including text, graphics, and logos, is the property of BuildFormAI and is protected by intellectual property laws.",
    },
    {
      title: "Limitation of Liability",
      text: "BuildFormAI will not be liable for any damages arising from the use of this website or the purchase of our products/services.",
    },
    {
        title:"Unauthorised Use",
        text:"Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense. From time to time this website may also include links to other websites."
    },
    {
        title:"Other Terms",
        text:"Credit Card orders will commence on receiving the authorization/confirmation from the Credit Card/respective Payment Gateway companies."

    }

  ];

  return (
    <>
    <div>
      <h1 className="flex justify-center p-4 font-bold text-3xl">
        Terms & Conditions
      </h1>
      <div className="space-y-4 p-12">
        <div>
         " Welcome, if you continue to browse and use this website you are
          agreeing to comply with and be bound by the following terms and
          conditions of use, which together with our privacy policy
          govern BuildFormAI relationship with you in relation to this website. The
          term 'BuildFormAI' or 'us' or 'we' refers to the owner of the website.
          The term 'you' refers to the user or viewer of our website."
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
