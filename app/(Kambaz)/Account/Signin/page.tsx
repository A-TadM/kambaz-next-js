import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl';
export default function Signin() {
 return (
   <div id="wd-signin-screen">
     <h3>Sign in</h3>
     <FormControl placeholder="username" className="mb-2" id="wd-username" />
     <FormControl placeholder="password" type="password" className="mb-2" id="wd-password" />
     <Link href="/Dashboard" id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> Sign in </Link>
     <Link href="Signup" id="wd-signup-link"> Sign up </Link>
   </div>
);}