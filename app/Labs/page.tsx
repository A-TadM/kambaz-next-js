import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1> 
     <label>Full name: <b>Asana Tadayon Mousavi</b>,&nbsp;&nbsp;&nbsp;Section: <b>CS 5610, Sec 04 (Monday)</b></label>

     <ul>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
       <li>
         <Link href="/" id="wd-kambaz-link">
           Kambaz </Link>
       </li>
     </ul>
     
     Please <Link href="/" id="wd-github" target="_blank">click here</Link> to get git repository.
   </div>
);}
