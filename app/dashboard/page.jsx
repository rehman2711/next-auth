"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-100 px-4">
        {/* Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col">
          <div className="flex gap-4 items-center border-b border-gray-200 pb-4">
            <img
              src={
                session?.user?.image ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="profile"
              height={70}
              width={70}
              className="rounded-full border border-gray-300"
            />
            <p className="text-2xl text-blue-500 font-bold">
              {session?.user?.name || "Guest User"}
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              {session?.user?.email || "Not available"}
            </p>

            {/* Uncomment if you want to show expiry */}
            {/* <p className="text-gray-600 text-sm">
            Expiry:{" "}
            {new Date(session?.expires).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            {new Date(session?.expires).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
