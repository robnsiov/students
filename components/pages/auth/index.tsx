"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Signup from "./sign-up";
import Loading from "@/components/shared/loading";
import Signin from "./sign-in";
import useAuth from "./use";
const Auth = () => {
  const { auth } = useAuth();
  return (
    <>
      <Loading show={auth === "loading..." || auth === "authenticated"} />
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
            <Signin />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default Auth;
