"use client";
import { signIn } from "next-auth/react";
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
import Credentials from "./credentials";

export default function Home() {
  const router = useRouter();

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

    if (result.error) {
      toast.error("Invalid Credentials");
      return;
    }

    if (result.status === 200) {
      router.push(result.url);
      toast.success("Logged In Successfully");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-10">
      
      <h1 className="text-center text-2xl sm:text-4xl font-extrabold tracking-tight uppercase font-galindo mb-6 sm:mb-10">
        Nextauth Authentication
      </h1>

      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login .
            </CardDescription>
            <CardAction>
              <Button
                variant="link"
                onClick={() => router.push("/")}
              >
                Sign Up
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form
              className="space-y-5"
              onSubmit={handleCredLogin}
            >
              <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="/"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full flex gap-3"
              onClick={() =>
                signIn("google", { callbackUrl: "/dashboard" })
              }
            >
              <Image src="/google.png" width={16} height={16} alt="google" />
              <span>Login with Google</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex gap-3"
              onClick={() =>
                signIn("github", { callbackUrl: "/dashboard" })
              }
            >
              <Image src="/github.svg" width={16} height={16} alt="github" />
              <span>Login with GitHub</span>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-6 sm:mt-10 w-full max-w-sm">
        <Credentials />
      </div>
    </div>
  );
}