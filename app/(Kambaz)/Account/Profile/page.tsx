import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl';
import FormSelect from 'react-bootstrap/FormSelect';
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl defaultValue="alice" placeholder="username" className="mb-2" id="wd-username" />
      <FormControl defaultValue="123" placeholder="password" type="password" className="mb-2" id="wd-password" />
      <FormControl defaultValue="Alice" placeholder="First Name" className="mb-2" id="wd-firstname" />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" className="mb-2" id="wd-lastname" />
      <FormControl defaultValue="2000-01-01" type="date" className="mb-2" id="wd-dob" />
      <FormControl defaultValue="alice@wonderland.com" type="email" className="mb-2" id="wd-email" />
      <FormSelect className="mb-2" id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY" defaultChecked>Faculty</option>
          <option value="STUDENT">Student</option>
      </FormSelect>
      <Link href="Signin" id="wd-profile-btn" className="btn btn-danger w-100"> Sign out </Link>
    </div>
);}
