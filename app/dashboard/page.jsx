"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div className="h-screen flex justify-center items-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="flex justify-between items-center border-b pb-2">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Profile
            </h2>
            <CardAction>
              <Image
                src={session?.user?.image || "/default-avatar.png"}
                alt="profile"
                height={70}
                width={70}
                className="rounded-full border border-gray-300 dark:border-gray-700"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png";
                }}
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-lg text-muted-foreground"
                  >
                    Name
                  </Label>

                  <div className="text-lg font-semibold">
                    {" "}
                    {session?.user?.name || "Guest User"}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="password"
                    className="text-lg text-muted-foreground"
                  >
                    Password
                  </Label>

                  <div className="text-lg font-semibold">
                    {session?.user?.email || "Not available"}{" "}
                  </div>
                </div>
              </div>
            </>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Dialog>
              <DialogTrigger className="w-full">
                <Button className="w-full" variant="destructive">Logout</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Logout ?</DialogTitle>
                  <DialogDescription>
                    Are you absolutely sure , you want to logout .
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <p className="text-sm text-muted-foreground">
              {" "}
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
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
