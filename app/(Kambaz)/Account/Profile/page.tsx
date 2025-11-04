"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */


import FormControl from 'react-bootstrap/FormControl';
//import FormSelect from 'react-bootstrap/FormSelect';

import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import Button from 'react-bootstrap/Button';


export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const fetchProfile = () => {
    if (currentUser._id === "") return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser({_id: "", role: ""}));
    redirect("/Account/Signin");
  };
  useEffect(() => {fetchProfile();}, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
       <div>
      <FormControl id="wd-username" className="mb-2" placeholder="username"
                   defaultValue={profile.username}
                   onChange={(e) => setProfile({ ...profile, username: e.target.value }) } />
      
      <FormControl id="wd-password" className="mb-2" placeholder="password"
                   defaultValue={profile.password}
                   onChange={(e) => setProfile({ ...profile, password: e.target.value }) } />
      
      <FormControl id="wd-firstname" className="mb-2" placeholder="First Name"
                   defaultValue={profile.firstName}
                   onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) } />
      
      <FormControl id="wd-lastname" className="mb-2" placeholder="Last Name"
                   defaultValue={profile.lastName}
                   onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) } />
      
       <FormControl id="wd-dob" className="mb-2" type="date"
                    defaultValue={profile.dob}
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
      
      <FormControl id="wd-email" className="mb-2" type="email"
                   defaultValue={profile.email}
                   onChange={(e) => setProfile({ ...profile, email: e.target.value })} />

      <select className="form-control mb-2" id="wd-role" defaultValue={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
      </select>

      <Button onClick={signout} className="w-100" id="wd-signout-btn" variant="danger"> Sign out </Button>
       </div>)}
    </div>
);}
