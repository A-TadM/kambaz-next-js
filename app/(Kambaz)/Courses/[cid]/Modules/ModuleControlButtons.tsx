import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
export default function MuduleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <GoTriangleDown />
      <BsPlus className="fs-4"  />
      <IoEllipsisVertical className="fs-4" />
    </div> );}