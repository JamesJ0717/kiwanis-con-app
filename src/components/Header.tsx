import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="my-8">
      {/* Phone */}
      <div className="sm:hidden text-blue-800 text-center justify-center space-y-4 py-4">
        <div className="flex flex-row space-x-4 justify-center place-items-center">
          <p>August 18-21, 2022</p>
          <svg
            aria-hidden="true"
            viewBox="0 0 6 6"
            className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
          >
            <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
          </svg>
          <span>Rochester, NY</span>
        </div>
        <div>
          <div className="font-semibold text-2xl">
            <Link href="/">NY DCON 2022</Link>
          </div>
        </div>
        <div className="flex text-center justify-center space-x-4">
          <Link href="/schedule">Schedule</Link>
          <Link href="/forums">Forums</Link>
        </div>
      </div>
      {/* Larger than phone */}
      <div className="sm:block hidden text-blue-800">
        <div className="flex flex-row justify-between mt-12 mb-4 place-items-center">
          <div className="font-semibold text-2xl">
            <Link href="/">NY DCON 2022</Link>
          </div>
          <div className="flex flex-row gap-4 place-items-center">
            <p>August 18-21, 2022</p>
            <svg
              aria-hidden="true"
              viewBox="0 0 6 6"
              className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
            >
              <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
            </svg>
            <p>Rochester, NY</p>
          </div>
          <div className="p-4 rounded-2xl border bg-blue-500 text-slate-200">
            <a href="https://kiwanis-ny.org/dc2022/" target="_blank">
              Register Now!
            </a>
          </div>
        </div>
        <div className="flex text-center justify-center space-x-4">
          <Link href="/schedule">Schedule</Link>
          <Link href="/forums">Forums</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
