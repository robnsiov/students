"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Signup from "./sign-up";
import Loading from "@/components/shared/loading";
const Auth = () => {
  return (
    <>
      <Loading show={!true} />
      <div className="w-full min-h-screen flex justify-center items-center flex-col p-4 relative">
        <Tabs
          defaultValue="sign-up"
          className="w-[400px] sm:w-full relative z-10"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-up">Sign up</TabsTrigger>
            <TabsTrigger value="sign-in">Sign in</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-up">
            <Signup />
          </TabsContent>
          <TabsContent value="sign-in">
            <Card>
              <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>
                  Change your password here. After saving, be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Phone</Label>
                  <Input id="username" placeholder="09124785236" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Password</Label>
                  <Input type="password" id="username" placeholder="*******" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Sign in</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default Auth;
