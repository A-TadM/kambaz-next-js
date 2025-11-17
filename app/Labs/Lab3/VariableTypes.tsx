export default function VariableTypes() {
  let numberVariable;
  let floatingPointNumber;
  let stringVariable;
  let booleanVariable;
  let isNumber;
  let isString;
  let isBoolean;
  return(
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = { numberVariable = 123 }<br/>
      floatingPointNumber = { floatingPointNumber = 234.345 }<br/>
      stringVariable = { stringVariable = 'Hello World!' }<br/>
      { booleanVariable = true }
      booleanVariable = { booleanVariable + "" }<br/>
      isNumber = { isNumber = typeof numberVariable }<br/>
      isString = { isString = typeof stringVariable}<br/>
      isBoolean = { isBoolean = typeof booleanVariable }<hr/>
    </div>
);}
