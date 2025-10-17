export default function VariablesAndConstants() {
 let functionScoped = 2;
 let blockScoped = 5;
 const constant1 = functionScoped - blockScoped;
 return(
   <div id="wd-variables-and-constants">
     <h4>Variables and Constants</h4>
     functionScoped = { functionScoped = 2 }<br/>
     blockScoped = { blockScoped = 5 }<br/>
     constant1 = { constant1 }<hr/>
   </div>
);}
