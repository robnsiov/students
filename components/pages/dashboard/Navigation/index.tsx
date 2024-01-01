"use client";
import React from "react";
import useNavigation from "./use";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Navigation = () => {
  const {
    active,
    menus,
    setActive,
    clickOnMenuLink,
    openDialog,
    setOpenDialog,
    onCancelDialog,
    onContinueDialog,
  } = useNavigation();
  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="sm:w-[calc(100%-20px)]">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onCancelDialog} className="mt-0 mr-3">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={onContinueDialog}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="fixed inset-x-0 bottom-0 z-40 bg-white">
        <div className="h-[90px] overflow-hidden flex justify-center relative sm:bottom-0 bottom-3 items-end">
          <div className="bg-slate-100  px-6 rounded-xl">
            <ul className="flex relative">
              <span
                className={`bg-slate-800 duration-500 ${menus[active].dis} border-4 border-white h-16 w-16 absolute
         -top-5 rounded-full`}
              >
                <span
                  className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
                ></span>
                <span
                  className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
                ></span>
              </span>
              {menus.map((menu, i) => (
                <li key={i} className="w-16">
                  <Link
                    onClick={() => {
                      setActive(i);
                      clickOnMenuLink(menu.href);
                    }}
                    href={menu.href}
                    className="flex flex-col text-center pt-6"
                  >
                    <span
                      className={`text-xl cursor-pointer duration-500 w-full flex justify-center items-center z-10 text-slate-600 ${
                        i === active && "-mt-6 !text-white"
                      }`}
                    >
                      {menu.Icon}
                    </span>
                    <span
                      className={` text-sm  text-slate-500 ${
                        active === i
                          ? "translate-y-5 duration-700 opacity-100"
                          : "opacity-0 translate-y-10"
                      } `}
                    >
                      {menu.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
