"use client"


import { useState } from "react";
import { FormControl } from "react-bootstrap";


const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameter() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <FormControl className="mb-2" id="wd-query-parameter-a" type="number" defaultValue={a}
                   onChange={(e) => setA(e.target.value)}/>
      <FormControl className="mb-2" id="wd-query-parameter-b" type="number" defaultValue={b}
                   onChange={(e) => setB(e.target.value)}/>

      <a className="btn btn-primary" id="wd-query-parameter-add"
         href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`} target="_blank">
         Add {a} + {b}
      </a>
      <a className="btn btn-danger float-end" id="wd-query-parameter-subtract" 
         href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`} target="_blank">
         Subtract {a} - {b}
      </a><br />
      <a className="btn btn-success mt-1" id="wd-query-parameter-multiply" 
         href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`} target="_blank">
         Multiply {a} * {b}
      </a>
      <a className="btn btn-warning mt-1 float-end" id="wd-query-parameter-divide" 
         href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`} target="_blank">
         Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}