import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";

const HelpSupport = () => {
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }

      // Check if scrolled down by 100px or more for shrinking the header
      setIsScrolledDown(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className="min-h-screen"
    style={{ backgroundColor: isScrolledDown ? "white" : "#37718e" }}
  >
    <Header />
    <div className="max-w-[1300px] mx-auto px-2 mt-[3%]">
      {/* Sticky Help & Support Section */}
      <div
        ref={componentRef}
        className={`${
          isAtTop && isScrolledDown
            ? "fixed top-0 w-full z-[9999] text-white p-2 shadow-md"
            : ""
        }`}
        style={{
          backgroundColor: isAtTop && isScrolledDown ? "#37718e" : "transparent",
          transition: "all 0.3s ease",
        }}
      >
          <h1
            className={`${
              isAtTop && isScrolledDown
                ? "text-[20px] font-semibold"
                : "text-[32px] font-semibold"
            } mx-auto px-10 ${
              isAtTop && isScrolledDown ? "text-white" : "text-white "
            } p-4 pb-0`}
          >
            Help & Support
          </h1>
          <h2
            className={`${
                isAtTop && isScrolledDown
                  ? "text-[12px]"
                  : "text-[15px]"
              } mx-auto px-10 ${
                isAtTop && isScrolledDown ? "text-white" : "text-white "
              }  pb-0`}
          >
            Let's take a step ahead and help you better.
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-white mx-auto p-10 mt-10">
          <div className="flex p-10">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-100 p-4">
              <nav>
                <ul>
                  <li className="py-2 font-semibold text-gray-700">
                    Partner Onboarding
                  </li>
                  <li className="py-2 text-gray-600">Legal</li>
                  <li className="py-2 text-gray-600">FAQs</li>
                  <li className="py-2 text-gray-600">Instamart Onboarding</li>
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <main className="w-3/4 p-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Partner Onboarding
                </h2>

                {/* Questions as expandable sections */}
                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    I want to partner my restaurant with Swiggy
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Here is the information on how to partner with Swiggy...
                  </p>
                </details>

                {/* Additional FAQs */}
                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    What are the mandatory documents needed to list my
                    restaurant on Swiggy?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    You will need these documents to list your restaurant...
                  </p>
                </details>
                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    What are the mandatory documents needed to list my
                    restaurant on Swiggy?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    You will need these documents to list your restaurant...
                  </p>
                </details>

                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    I want to opt-out from Google reserve
                  </summary>
                  <p className="mt-2 text-gray-600">
                    To opt-out from Google reserve, please follow...
                  </p>
                </details>

                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    After I submit all documents, how long will it take for my
                    restaurant to go live on Swiggy?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    The process typically takes...
                  </p>
                </details>

                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    What is this one-time onboarding fee?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    The onboarding fee covers...
                  </p>
                </details>

                <details className="mb-4 border-b pb-4 pt-4">
                  <summary className="cursor-pointer text-gray-500 font-medium">
                    Who should I contact if I need help & support in getting
                    onboarded?
                  </summary>
                  <p className="mt-2 text-gray-600">You can contact...</p>
                </details>
              </section>
              {/* Add more details elements as needed */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
