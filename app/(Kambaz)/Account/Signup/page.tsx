import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl';
export default function Signup() {
 return (
   <div id="wd-signup-screen">
     <h3>Sign up</h3>
     <FormControl placeholder="username" className="mb-2" id="wd-username" />
     <FormControl placeholder="password" type="password" className="mb-2" id="wd-password" />
     <FormControl placeholder="verify password" type="password" className="mb-2" id="wd-password-verify" />
     <Link href="Profile" id="wd-signup-btn" className="btn btn-primary w-100 mb-2"> Sign up </Link>
     <Link href="Signin" id="wd-signin-link"> Sign in </Link>
   </div>
);}