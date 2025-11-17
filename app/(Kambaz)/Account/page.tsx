"use client";


import { redirect } from "next/dist/client/components/navigation";

import { useSelector } from "react-redux";
import { RootState } from "../store";


export default function AccountPage() {
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);

 if (currentUser._id === "") {
   redirect("/Account/Signin");
 } else {
   redirect("/Account/Profile");
 }
}
