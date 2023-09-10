import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage-container h-screen flex flex-col items-center">
      <div
        className="hero-section flex flex-col items-center h-screen
      "
      >
        <h1 className="font-extrabold text-7xl text-center mt-28">
          WE MAKE DECENTRALIZED <br></br>COMMERCE EASY
        </h1>
        <h3 className="font-semibold text-3xl text-center mt-14 text-gray-200">
          Buy, Sell, Earn, and Supply all within the AllSats Ecosystem.
        </h3>
        <button className="get-started-btn px-20 py-8 bg-black rounded-3xl text-3xl mt-10">Get Started</button>
      </div>
      <div className="card-links flex mt-28 gap-12">
        <div className="home-card allsats-card mx-8 flex flex-col items-center bg-slate-600 rounded-3xl px-16 py-8 gap-4">
          <img className="w-14 h-14" src="Logo 12.png" />
          <h1 className="text-center text-3xl font-bold">AllSats Defi</h1>
          <p className="text-center text-gray-200 font-light">
            Stake your funds in various pools including warehousing, logistics, and insurance.
          </p>
          <a className="text-center pt-4 flex items-center gap-2 text-green-400">
            View Markets
            <img className="w-4" src="/arrow-right.png" />
          </a>
        </div>
        <div className=" home-card allbook-card mx-8 flex flex-col items-center bg-slate-600 rounded-3xl px-16 py-8 gap-4">
          <img className="w-14 h-14" src="Logo 8.png" />
          <h1 className="text-center text-3xl font-bold">AllBook</h1>
          <p className="text-center text-gray-200 font-light">
            Stake your funds in various pools including warehousing, logistics, and insurance.
          </p>
          <a className="text-center pt-4 flex items-center gap-2 text-green-400">
            View Order Book
            <img className="w-4" src="/arrow-right.png" />
          </a>
        </div>
      </div>
      <div className="platform-section flex flex-col items-center">
        <h1 className="mt-28 font-extrabold text-6xl text-center px-16">
          Bridging the gap between <br></br>blockchain and reality
        </h1>
        <h3 className="font-semibold text-xl text-center mt-6 text-gray-200">
          We are creating the first decentralized marketplace <br></br> that brings real-world goods to your door.
        </h3>
        <button className="get-started-btn px-10 py-4 bg-black rounded-3xl text-xl mt-10">Get Started</button>
      </div>
      <div className="twenty-four-seven flex flex-col items-center">
        <h1 className="mt-28 font-extrabold text-6xl text-center px-16">
          24/7 access to a <br></br>lively maketplace.
        </h1>
        <h3 className="font-semibold text-xl text-center mt-6 text-gray-200">
          The AllSats ecosystem is the only place where <br></br> commerece can occur at all hours of the day
        </h3>
        <button className="get-started-btn px-10 py-4 bg-black rounded-3xl text-xl mt-10">Get Started</button>
      </div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a href="" className="hover:underline">
              AllSats
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
