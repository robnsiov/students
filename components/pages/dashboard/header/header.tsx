"use client";

import { Button } from "@/components/ui/button";
import useHeader from "./use";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Loader2 } from "lucide-react";

const Header = () => {
  const {
    userInfo,
    form,
    hasSubmited,
    onSubmit,
    openDialog,
    setOpenDialog,
    auth,
  } = useHeader();
  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                autoComplete="off"
                spellCheck={false}
              >
                <Card className="p-0 border-0 shadow-none">
                  <CardContent className="space-y-2 p-0">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Sara Taylor" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                  </CardContent>
                  <CardFooter className="p-0 pt-6">
                    {hasSubmited ? (
                      <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </Button>
                    ) : (
                      <Button type="submit">Save</Button>
                    )}
                    <Button
                      onClick={() => setOpenDialog(false)}
                      variant="outline"
                      className="ml-3"
                    >
                      Cancel
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </Form>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      <div className="fixed inset-x-0 top-0 border-b-[1px] border-black/10">
        <div className="container mx-auto">
          <div
            className="py-4 sm:py-2 text-nowrap truncate cursor-pointer"
            onClick={() => {
              if (auth) setOpenDialog(true);
            }}
          >
            <span className="sm:text-sm">Welcome</span>{" "}
            <span className="ml-2 font-semibold capitalize">
              {userInfo.name ?? "X"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
