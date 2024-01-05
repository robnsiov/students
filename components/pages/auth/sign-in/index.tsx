import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useSignup from "./use";

const Signin = () => {
  const { form, onSubmit, hasSubmited, hasClickedOnEye, sethasClickedOnEye } =
    useSignup();
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          spellCheck={false}
        >
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="09123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="w-full relative">
                        <Input
                          type={hasClickedOnEye ? "text" : "password"}
                          placeholder="********"
                          {...field}
                        />
                        <div className="absolute top-2 right-3 cursor-pointer">
                          {hasClickedOnEye ? (
                            <EyeOff
                              size="18px"
                              onClick={() => sethasClickedOnEye(false)}
                            />
                          ) : (
                            <Eye
                              size="18px"
                              onClick={() => sethasClickedOnEye(true)}
                            />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              {hasSubmited ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit">Sign in</Button>
              )}
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};
export default Signin;
