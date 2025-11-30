"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import Table from 'react-bootstrap/Table';
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";

import * as courseClient from "../../../../Courses/client";
import { useState, useEffect } from "react";


export default function UsersTable() {
 const { cid } = useParams();
 
 const [users, setUsers] = useState<any[]>([]);

 const fetchUsers = async () => {
   const users = await courseClient.findUsersForCourse(cid as string);
   setUsers(users);
 };

 useEffect(() => { fetchUsers();}, []);

 return (
  <div id="wd-users-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
        {users.map((user) => ( 
                           <tr key={user._id}><td className="wd-full-name text-nowrap">
                                              <FaUserCircle className="me-2 fs-1 text-secondary" />
                                              <span className="wd-first-name">{user.firstName}</span>{" "}
                                              <span className="wd-last-name">{user.lastName}</span></td>
                                              <td className="wd-login-id">{user.loginId}</td>
                                              <td className="wd-section">{user.section}</td>
                                              <td className="wd-role">{user.role}</td>
                                              <td className="wd-last-activity">{user.lastActivity?.substring(0, 10)}</td>
                                              <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>               
                          ))
         }   
         
    </tbody>
   </Table>
  </div> );}