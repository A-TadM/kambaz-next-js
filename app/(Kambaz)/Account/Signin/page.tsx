"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */


import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl';

import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";


export default function Signin() {
 const [credentials, setCredentials] = useState<any>({});
 const dispatch = useDispatch();
 const signin = () => { const user = db.users.find((u: any) => u.username === credentials.username &&
                                                               u.password === credentials.password);
                        if (!user) return;
                        dispatch(setCurrentUser(user));
                        redirect("/Dashboard");
                      };
 
 return (
   <div id="wd-signin-screen">
     <h3>Sign in</h3>
     <FormControl defaultValue={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  placeholder="username" className="mb-2" id="wd-username" />

     <FormControl defaultValue={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  placeholder="password" type="password" className="mb-2" id="wd-password" />

     <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> Sign in </button>
     <Link href="Signup" id="wd-signup-link"> Sign up </Link>
   </div>
);}