"use client";
import React from "react";

const Credentials = () => {
  return (
    <div className="w-full flex justify-center mt-6 sm:absolute sm:top-7 sm:left-7 sm:w-auto">
      <div
        className="text-black dark:text-white rounded-md text-sm 
        shadow-[43px_41px_0px_0px_rgba(0,0,0,0.04),34px_34px_0px_0px_rgba(0,0,0,0.2),26px_26px_0px_0px_rgba(0,0,0,0.4),18px_18px_0px_0px_rgba(0,0,0,0.7),10px_10px_0px_0px_#000000]
        dark:shadow-[43px_41px_0px_0px_rgba(255,255,255,0.02),34px_34px_0px_0px_rgba(255,255,255,0.05),26px_26px_0px_0px_rgba(255,255,255,0.08),18px_18px_0px_0px_rgba(255,255,255,0.12),10px_10px_0px_0px_rgba(255,255,255,0.2)]"
      >
        <div className="rounded-md border px-4 py-2 bg-white dark:bg-neutral-900">
          <p className="font-medium">Email Address</p>
          <p className="text-muted-foreground">rehmankalawant@gmail.com</p>
        </div>

        <div className="rounded-md border px-4 py-2 bg-white dark:bg-neutral-900 mt-2">
          <p className="font-medium">Password</p>
          <p className="text-muted-foreground">rehman@1234</p>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
