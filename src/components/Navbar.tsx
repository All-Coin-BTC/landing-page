import React from "react";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between items-center px-12 py-6 text-lg ">
      <div className="left-nav pr-16  flex gap-2 items-center">
        <img className="w-8 h-8" src="Logo 12.png " />
        <p>AllSats</p>
      </div>
      <div className="center-nav flex gap-8 ">
        <div className="how-it-works">How It Works</div>
        <div className="features">Features</div>
        <div className="allsats">ALLDefi</div>
        <div className="orderbook">ALLBook</div>
      </div>
      <div className="right-nav flex gap-4">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
