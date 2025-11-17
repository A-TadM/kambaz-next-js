"use client"


import { useState } from "react";
import { FormControl } from "react-bootstrap";


const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <FormControl className="mb-2" id="wd-path-parameter-a" type="number" defaultValue={a}
                   onChange={(e) => setA(e.target.value)}/>
      <FormControl className="mb-2" id="wd-path-parameter-b" type="number" defaultValue={b}
                   onChange={(e) => setB(e.target.value)}/>

      <a className="btn btn-primary" id="wd-path-parameter-add"
         href={`${HTTP_SERVER}/lab5/add/${a}/${b}`} target="_blank">
         Add {a} + {b}
      </a>
      <a className="btn btn-danger float-end" id="wd-path-parameter-subtract" 
         href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`} target="_blank">
         Subtract {a} - {b}
      </a><br />
      <a className="btn btn-success mt-1" id="wd-path-parameter-multiply" 
         href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`} target="_blank">
         Multiply {a} * {b}
      </a>
      <a className="btn btn-warning mt-1 float-end" id="wd-path-parameter-divide" 
         href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`} target="_blank">
         Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
