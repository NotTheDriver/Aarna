import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";
import insta from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";
import facebook from "../../Assets/facebook.png";
import phoneCall from "../../Assets/phone-call.png";

export default function Footer() {
  return (
    <footer className="">
      <div className="grid grid-cols-4 text-gray-500 bg-white font-semibold p-10">
        {/* column 1 */}
        <div>
          <img src={Logo} alt="Aarna logo" className="w-10/12 h-auto" />

          <ul>
            <li className="m-4 text-sm font-semibold pb-6">
              Aarna is committed to addressing the medical community’s evolving
              and ever increasing diagnostic needs.
            </li>
            <li className="m-4">
              <svg
                className="inline w-6 h-6 m-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinejoin="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <a href="/" className="hover:text-[#1a0e69]">
                86, Adarsh Vihar, Kargi
              </a>
            </li>
            <li className="m-4">
              {" "}
              <svg
                className="inline w-5 m-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinejoin="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <a href="/" className="hover:text-[#1a0e69]">
                +91 9997579898
              </a>
            </li>
            <li className="m-4">
              {" "}
              <svg
                className="inline w-5 m-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinejoin="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <a href="/" className="hover:text-[#1a0e69]">
                rajput.anil49@yahoo.com
              </a>
            </li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="m-6 px-12">
          {/* <h1 className="font-semibold text-3xl m-2 border-b-4 py-4 w-1/3">
            Departments
          </h1> */}
          <ul className="p-2 mt-20">
            <li className="mb-4 ">
              <a href="/" className="hover:text-[#1a0e69]">
                About Us
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="hover:text-[#1a0e69]">
                Career
              </a>
            </li>
            <li className="mb-4 ">
              <a href="/" className="hover:text-[#1a0e69]">
                FAQ
              </a>
            </li>
            <li className="mb-4 ">
              <a href="/" className="hover:text-[#1a0e69]">
                Feedback/Complaints
              </a>
            </li>
            <li className="mb-4 ">
              <a href="/" className="hover:text-[#1a0e69]">
                Become Business Partner
              </a>
            </li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="m-6 ">
          {/* <h1 className="font-semibold text-3xl m-2 border-b-4 py-4 w-3/5">
            Quick Links
          </h1> */}
          <ul className="p-2 mt-20">
            <li className="mb-4 ">
              <a href="/" className="hover:text-[#1a0e69]">
                Services
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="hover:text-[#1a0e69]">
                Our Labs
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="hover:text-[#1a0e69]">
                Contact Us
              </a>
            </li>
            <li className="mb-4 ">
              <a href="/" className="hover:text-[#1a0e69]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* column 4 */}
        <div className="m-6 grid grid-rows-2">
          <div>
            <h1 className="font-semibold text-3xl text-[#1a0e69]">
              <img src={phoneCall} alt="phoneCall" className="w-6 m-2 inline" />
              Helpline No.
            </h1>
            <ul className="">
              <li></li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-3xl m-2 py-4 text-[#1a0e69]">
              Follow Us
            </h1>
            <ul className="p-2 flex">
              <a
                href="/"
                className="flex-none mr-4 hover:shadow-lg transform hover:scale-125 ease-out duration-300"
              >
                <img src={insta} alt="instagram" className="w-6" />
              </a>
              <a
                href="/"
                className="flex-initial mr-4 hover:shadow-lg transform hover:scale-125 ease-out duration-300"
              >
                <img src={linkedin} alt="linkedin" className="w-6" />
              </a>
              <a
                href="/"
                className="flex-initial mr-4 hover:shadow-lg transform hover:scale-125 ease-out duration-300"
              >
                <img src={twitter} alt="twitter" className="w-6" />
              </a>
              <a
                href="/"
                className="flex-initial mr-4 hover:shadow-lg transform hover:scale-125 ease-out duration-300"
              >
                <img src={facebook} alt="facebook" className="w-6" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
