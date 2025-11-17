"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */


//import FormSelect from 'react-bootstrap/FormSelect';

import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import Button from 'react-bootstrap/Button';
import * as client from "../client";


export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const fetchProfile = () => {
    if (currentUser._id === "") return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser({_id: "", role: ""}));
    redirect("/Account/Signin");
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  useEffect(() => {fetchProfile();}, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
       <div>
      <input defaultValue={profile.username}
                   className="form-control mb-2"  
                   placeholder="username" id="wd-username"
                   onChange={(e) => setProfile({ ...profile, username: e.target.value }) } 
                    />
      
      <input defaultValue={profile.password}
                   className="form-control mb-2"
                   onChange={(e) => setProfile({ ...profile, password: e.target.value }) }
                   placeholder="password" id="wd-password" />
      
      <input defaultValue={profile.firstName}
                   className="form-control mb-2"  
                   onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) }
                   placeholder="First Name" id="wd-firstname" />
      
      <input defaultValue={profile.lastName}
                   className="form-control mb-2" 
                   onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) }
                   placeholder="Last Name" id="wd-lastname" />
      
       <input defaultValue={profile.dob}
                    className="form-control mb-2" 
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    type="date" id="wd-dob" />
      
      <input defaultValue={profile.email} 
                   className="form-control mb-2"
                   onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                   placeholder="email"
                   type="email" id="wd-email" />

      <select value={profile.role} className="form-control mb-2" 
              onChange={(e) => setProfile({ ...profile, role: e.target.value })} id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
      </select>

      <Button onClick={updateProfile} className="w-100 mb-2" id="wd-update-btn" 
              variant="primary"> Update </Button>  
      <Button onClick={signout} className="w-100" id="wd-signout-btn" variant="danger"> Sign out </Button>
       </div>)}
    </div>
);}
