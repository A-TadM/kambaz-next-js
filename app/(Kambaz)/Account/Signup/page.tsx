"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */


import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl';
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import { redirect } from "next/dist/client/components/navigation";


export default function Signup() {
 const [user, setUser] = useState<any>({});
 const dispatch = useDispatch();
 const signup = async () => {
   const currentUser = await client.signup(user);
   dispatch(setCurrentUser(currentUser));
   redirect("/Account/Profile");
 };
 
 return (
   <div id="wd-signup-screen">
     <h3>Sign up</h3>
     <FormControl defaultValue={user.username} 
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="username" 
                  className="mb-2" id="wd-username" />
     <FormControl defaultValue={user.password} 
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="password" 
                  type="password" 
                  className="mb-2" id="wd-password" />
     {/*<FormControl placeholder="verify password" type="password" className="mb-2" id="wd-password-verify" />*/}
     <button onClick={signup} id="wd-signup-btn" 
             className="btn btn-primary w-100 mb-2"> Sign up </button><br />
     <Link href="Signin" id="wd-signin-link"> Sign in </Link>
   </div>
);}  