"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import Table from 'react-bootstrap/Table';
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";
//import { useParams } from "next/navigation";
//import * as db from "../../../../Database";

//import * as enrollmentClient from "../../../../Dashboard/client";
import { useState } from "react";


export default function PeopleTable({ users = [], fetchUsers , setRole, setName }: 
                                    { users?: any[]; fetchUsers: () => void; 
                                      setRole: (role: string) => void;
                                      setName: (name: string) => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

 //const { cid } = useParams();
 //const { users } = db;
 
 //const [enrollments, setEnrollments] = useState<any[]>([]);

 {/*const fetchEnrollments = async () => {
   const enrollments = await enrollmentClient.fetchAllEnrollments();
   setEnrollments(enrollments);
 };*/}

 //useEffect(() => { fetchEnrollments();}, []);

 return (
  <div id="wd-people-table">
    {showDetails && ( <PeopleDetails uid={showUserId}
                                     onClose={() => {setShowDetails(false);
                                                     fetchUsers();
                                                     setRole("");
                                                     setName("");}}/> )}

   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
        {users?.map((user) => ( 
                           <tr key={user.username}><td className="wd-full-name text-nowrap">
                                              <span className="text-decoration-none"
                                                    onClick={() => { setShowDetails(true);
                                                                     setShowUserId(user._id); }}>

                                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                                <span className="wd-first-name text-danger">{user.firstName}</span>{" "}
                                                <span className="wd-last-name text-danger">{user.lastName}</span>
                                              </span></td>

                                              <td className="wd-login-id">{user.loginId}</td>
                                              <td className="wd-section">{user.section}</td>
                                              <td className="wd-role">{user.role}</td>
                                              <td className="wd-last-activity">{user.lastActivity?.substring(0, 10)}</td>
                                              <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>))}   
         
    </tbody>
   </Table>
  </div> );}