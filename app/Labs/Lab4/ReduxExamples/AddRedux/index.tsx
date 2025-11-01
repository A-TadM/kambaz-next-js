"use client"


import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { RootState } from "../../store";


export default function AddRedux() {
  const { sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  
  return (
    <div className="w-80" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>{a} + {b} = {sum}</h2>
      <FormControl type="number" defaultValue={a} className="mb-2 w-25"
        onChange={(e) => setA(parseInt(e.target.value))} />
      <FormControl type="number" defaultValue={b} className="mb-2 w-25"
        onChange={(e) => setB(parseInt(e.target.value))} />
      <Button id="wd-add-redux-click" size="sm"
              onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </Button>
      <hr/>
    </div>
  );
}
