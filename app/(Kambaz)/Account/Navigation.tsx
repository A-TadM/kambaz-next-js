"use client";


import Link from "next/link";

import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";


export default function AccountNavigation() {
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 const links = currentUser._id !== "" ? ["Profile", "Users"] : ["Signin", "Signup"];
 const pathname = usePathname();

 return (
     <Nav variant="pills" id="wd-account-navigation" style={{width: "100px"}}>
         {links.map((link) => (<NavItem key={link}>
                                 {currentUser.role === "ADMIN" && (
                                 <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
                                   {link}</NavLink> )} 

                                 {currentUser.role !== "ADMIN" && (link !== "Users") && (
                                 <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
                                   {link}</NavLink> )}   
                               </NavItem>))}
     </Nav>
);}
