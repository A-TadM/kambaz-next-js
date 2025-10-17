export default function BooleanVariables() {
 const numberVariable = 123, floatingPointNumber = 234.345 as number;
 let true1, false1;
 let false2;
 let true2;
 let true3;
 let true4;
 let true5;
 let false3;
 return (
   <div id="wd-boolean-variables">
     <h4>Boolean Variables</h4>
     { true1 = true }
     { false1 = false} 
     { false2 = true1 && false1 }
     { true2 = true1 || false1 }
     { true3 = !false2 }
     { true4 = numberVariable === 123 }  {/* always use === not == */}  
     { true5 = floatingPointNumber !== 321.432 }
     { false3 = numberVariable < 100 }

     true1     = {true1 + ""}     <br />
     false1    = {false1 + ""}    <br />
     false2    = {false2 + ""}    <br />
     true2     = {true2 + ""}     <br />
     true3     = {true3 + ""}     <br />
     true4     = {true4 + ""}     <br />
     true5     = {true5 + ""}     <br />
     false3    = {false3 + ""}    <hr />
   </div>
);}
