export default function TernaryOperator() {
    let loggedIn;
    return (
      <div id="wd-ternary-operator">
        <h4>Logged In</h4>
        { loggedIn = true }
        { loggedIn ? <p>Welcome</p> : <p>Please login</p> } <hr/>
      </div>
);}        