"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import ModulesControls from "./ModulesControls";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
{/*import { GoTriangleDown } from "react-icons/go";*/}
import { useParams } from "next/navigation";

import { useState, useEffect } from "react";
import FormControl from 'react-bootstrap/FormControl';
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import * as client from "../../client";


export default function Modules() {
  const { cid }  = useParams();
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {fetchModules();}, []);

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModuleValues = { name: moduleName };
    const newModule = await client.createModuleForCourse(cid as string, newModuleValues);
    dispatch(setModules([...modules, newModule]));
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid as string, moduleId);
    //dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
    dispatch(deleteModule(moduleId));
  };

  const onUpdateModule = async (module: any) => {
    await client.updateModule(cid as string, module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };


  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName} 
                       moduleName={moduleName} 
                       addModule={() => {onCreateModuleForCourse();
                                         setModuleName("");}} />
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module, index) => (
          <ListGroupItem key={index} className="wd-module p-0 mb-5 fs-5 border-gray">

            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              { !module.editing && module.name }
              {  module.editing && (<FormControl className="w-50 d-inline-block"
                                                 onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                                 onKeyDown={(e) => { if (e.key === "Enter") {
                                                                       onUpdateModule({ ...module, editing: false });
                                                                      }}}
                                                 defaultValue={module.name}/>)}

              <ModuleControlButtons moduleId={module._id} 
                                    deleteModule={(moduleId) => { onRemoveModule(moduleId); }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                    />
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any, index: any) => 
                  (<ListGroupItem key={index} className="wd-lesson p-3 ps-1 pe-0">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>))
                }
              </ListGroup>)
             }
                
          </ListGroupItem>
          ))
         }

      </ListGroup>
    </div>
);}
