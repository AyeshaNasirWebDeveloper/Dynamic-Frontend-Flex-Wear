import Link from "next/link";
import React from "react";

function HelloNikeApp() {
  return (
    <div className="text-center w-full p-4">
      <h1
        className="font-medium text-[15px] leading-[16px]">Hello Nike App</h1>
      <p className="block font-normal text-[11px] leading-[24px]">
        Download the app to access everything Nike.{" "}
        <Link href="#" className="text-[#3A3A3A] font-medium underline">
          Get Your Great
        </Link>
      </p>
    </div>
  );
}

export default HelloNikeApp;
