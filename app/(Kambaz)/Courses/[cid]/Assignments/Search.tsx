import { GoSearch } from "react-icons/go";
import FormControl from 'react-bootstrap/FormControl';
export default function Search() {
  return (
    <span className="float-start position-relative">
      <GoSearch style={{ top: "10px" }} className="fs-5 position-absolute" />
      <FormControl placeholder="Search..." id="wd-search-assignment" className="ps-4"/>
    </span>);}