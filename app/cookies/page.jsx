import React from "react";
import Footer from "../_components/Footer";

const page = () => {
  const t_c = [
    {
      title: "Introduction",
      text: "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.",
    },
    {
      title: "Information We Collect",
      text: "We collect information such as your name, email address, and payment details when you make a purchase or register on our site.",
    },
    {
      title: "Use of Information",
      text: "We use your information to process orders, improve our services, and communicate with you.",
    },
    {
      title: "Data Protection",
      text: "We implement security measures to protect your information from unauthorized access.",
    },
    {
      title: "Cookies",
      text: "Our site uses cookies to enhance your experience. You can disable cookies in your browser settings.",
    },
    {
      title: "Third-Party Disclosure",
      text: "We do not sell or trade your personal information to third parties.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="flex justify-center p-4 font-bold text-3xl">
          Privacy Policy
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
