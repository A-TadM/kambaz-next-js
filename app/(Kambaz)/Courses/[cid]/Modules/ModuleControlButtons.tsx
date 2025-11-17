"use client"
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
{/*import { GoTriangleDown } from "react-icons/go";*/}
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";


export default function MuduleControlButtons({ moduleId, deleteModule, editModule }: 
                                             { moduleId: string; 
                                              deleteModule: (moduleId: string) => void;
                                              editModule: (moduleId: string) => void; }) {

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
                                                
  return (
    <div className="float-end">
      { currentUser.role === "FACULTY" && 
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />}

      { currentUser.role === "FACULTY" && 
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/> }

      <GreenCheckmark />
      {/*<GoTriangleDown />*/}
      <BsPlus className="fs-1"  />
      <IoEllipsisVertical className="fs-4" />
    </div> );}