"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

export default function Home() {
  const router = useRouter();

  const { theme } = useTheme();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleCredLogin = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    // console.log(result);

    if (result.error) {
      // alert(result.error);
      toast.error("Invalid Credentials");
      return;
    }

    if (result.status === 200) {
      router.push(result.url);
      toast.success("Logged In Successfully");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login .</CardDescription>
            <CardAction>
              <Button
                variant="link"
                onClick={() => {
                  router.push("/");
                }}
              >
                Sign Up
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                handleCredLogin(e);
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="/"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              variant="outline"
              className="w-full flex gap-4"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              <Image src="/google.png" width={17} height={22} alt="google" />
              <span>Login with Google</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex gap-4"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              <Image src="/github.svg" width={17} height={22} alt="google" />
              <span>Login with GitHub</span>
            </Button>
          </CardFooter>
        </Card>

        {theme === "light" && (
          <div className="text-black rounded-md text-sm flex flex-col justify-center items-center absolute top-7 left-7 shadow-[43px_41px_0px_0px_rgba(0,0,0,0.04),34px_34px_0px_0px_rgba(0,0,0,0.2),26px_26px_0px_0px_rgba(0,0,0,0.4),18px_18px_0px_0px_rgba(0,0,0,0.7),10px_10px_0px_0px_#000000]">
            <div>
              {" "}
              <div className="rounded-md border px-4 py-2 text-sm">
                <p className="font-medium">Email Address</p>
                <p className="text-muted-foreground">
                  rehmankalawant@gmail.com
                </p>
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                <p className="font-medium">Password</p>
                <p className="text-muted-foreground">rehman@1234</p>
              </div>
            </div>
          </div>
        )}

        {theme === "dark" && (
          <div
            className="text-black dark:text-white rounded-md text-sm flex flex-col justify-center items-center absolute top-7 left-7 
            shadow-[43px_41px_0px_0px_rgba(0,0,0,0.04),34px_34px_0px_0px_rgba(0,0,0,0.2),26px_26px_0px_0px_rgba(0,0,0,0.4),18px_18px_0px_0px_rgba(0,0,0,0.7),10px_10px_0px_0px_#000000]
            dark:shadow-[43px_41px_0px_0px_rgba(255,255,255,0.02),34px_34px_0px_0px_rgba(255,255,255,0.05),26px_26px_0px_0px_rgba(255,255,255,0.08),18px_18px_0px_0px_rgba(255,255,255,0.12),10px_10px_0px_0px_rgba(255,255,255,0.2)]"
          >
            <div>
              <div className="rounded-md border px-4 py-2 text-sm bg-white dark:bg-neutral-900">
                <p className="font-medium">Email Address</p>
                <p className="text-muted-foreground">
                  rehmankalawant@gmail.com
                </p>
              </div>

              <div className="rounded-md border px-4 py-2 text-sm bg-white dark:bg-neutral-900">
                <p className="font-medium">Password</p>
                <p className="text-muted-foreground">rehman@1234</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
