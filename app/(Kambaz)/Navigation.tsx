"use client";


import Link from "next/link";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";


export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",      icon: LiaCogSolid },
  ];

  return (
    <div>
      <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: "110px"}}
                 id="wd-kambaz-navigation">
        <ListGroupItem className="bg-black border-0 text-center" as="a"
                       target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
          <img src="/images/NU_RGB_Notched-N_motto_RW.png" width="75px" alt="Northeastern University" />
        </ListGroupItem>    

        <ListGroupItem className={`border-0 text-center ${pathname.includes("Account") ? "bg-white" : "bg-black"}`}>
          <Link href="/Account" id="wd-account-link" className={`text-decoration-none 
                                                      ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
            <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
            <br />
            Account
          </Link>
        </ListGroupItem>  

        {links.map((link) => (
          <ListGroupItem key={link.label} as={Link} href={link.path}
                         className={`bg-black text-center border-0 text-decoration-none
                          ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
            {link.icon({ className: "fs-1 text-danger"})}
            <br />
            {link.label}
          </ListGroupItem>))}
  
      </ListGroup>
    </div> 
);}
