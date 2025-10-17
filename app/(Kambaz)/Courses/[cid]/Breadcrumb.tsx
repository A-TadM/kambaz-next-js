"use client";


import { usePathname } from "next/navigation";


export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
 const pathname = usePathname();
 const pop = pathname.split("/").pop(); 
 return (
   <span>
     {course?.name} &gt; {pop === 'Table' ? 'People' : pop}
   </span>
 );
}