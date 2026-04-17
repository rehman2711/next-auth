"use client";

import React, { useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
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
import LoadingScreen from "@/components/ui/spinner";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const formattedExpiry = useMemo(() => {
    if (!session?.expires) return "Not available";

    const date = new Date(session.expires);

    if (isNaN(date.getTime())) return "Invalid date";

    const datePart = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const timePart = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${datePart} • ${timePart}`;
  }, [session?.expires]);

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingScreen/>
      </div>
    );
  }

  if (!session) {
    router.push("/");
    return null;
  }

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <Card className="w-full max-w-sm">
        {/* HEADER */}
        <CardHeader className="flex justify-between items-center border-b pb-2">
          <h2 className="text-3xl font-semibold tracking-tight">Profile</h2>

          <CardAction>
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="User profile"
              height={70}
              width={70}
              priority
              className="rounded-full border border-gray-300 dark:border-gray-700 object-cover"
              onError={(e) => {
                e.currentTarget.src = "/default-avatar.png";
              }}
            />
          </CardAction>
        </CardHeader>

        {/* CONTENT */}
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-1">
              <Label className="text-lg text-muted-foreground">Name</Label>
              <div className="text-lg font-semibold">
                {session.user?.name || "Guest User"}
              </div>
            </div>

            <div className="grid gap-1">
              <Label className="text-lg text-muted-foreground">Email</Label>
              <div className="text-lg font-semibold break-all">
                {session.user?.email || "Not available"}
              </div>
            </div>
          </div>
        </CardContent>

        {/* FOOTER */}
        <CardFooter className="flex-col gap-3">
          {/* LOGOUT DIALOG */}
          <Dialog>
            <div className="w-full flex justify-between px-2">
              <p className="text-sm text-muted-foreground text-start">
                Expiry: {formattedExpiry}
              </p>
              <Separator orientation="vertical" />
              <DialogTrigger className="text-sm hover:underline underline-offset-8 hover:text-red-500 focus:outline-none">
                Logout
              </DialogTrigger>
            </div>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Logout?</DialogTitle>
                <DialogDescription>
                  This will end your current session immediately.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button
                  variant="destructive"
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                >
                  Logout
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
