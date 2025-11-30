"use client";

import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { usePathname } from "next/navigation";


export default function TOC() {
 const pathname = usePathname(); 
 return (
   <Nav variant="pills">
     <NavItem>
       <NavLink href="/Labs" as={Link} className={`nav-link ${pathname.endsWith("Labs") ? "active" : ""}`}>
         Labs</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/Labs/Lab1" as={Link} className={`nav-link ${pathname.endsWith("Lab1") ? "active" : ""}`}
         >Lab 1</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/Labs/Lab2" as={Link} className={`nav-link ${pathname.endsWith("Lab2") ? "active" : ""}`}>
         Lab 2</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/Labs/Lab3" as={Link} className={`nav-link ${pathname.endsWith("Lab3") ? "active" : ""}`}
         >Lab 3</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/Labs/Lab4" as={Link} className={`nav-link ${pathname.endsWith("Lab4") ? "active" : ""}`}
         >Lab 4</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/Labs/Lab5" as={Link} className={`nav-link ${pathname.endsWith("Lab5") ? "active" : ""}`}
         >Lab 5</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/" as={Link}>Kambaz</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="https://github.com/A-TadM/kambaz-next-js" target="_blank" id="wd-github-client">Client GitHub</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="https://github.com/A-TadM/kambaz-node-server-app" target="_blank" id="wd-github-server">Server GitHub</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="https://kambaz-node-server-app-1-vvq4.onrender.com" target="_blank" id="wd-remote-server">Remote Server</NavLink>
     </NavItem>
   </Nav>
);} 
