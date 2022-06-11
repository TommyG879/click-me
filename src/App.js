import { useState } from "react";
export default function App_() {
const [closed, setClosed] = useState(false)
<p> </p>
return (
  <div>
  <button onClick={() => setClosed(!closed)}>
    Guess What?
    </button>    
    <h1><strong>{closed ? "Chickenbutt" : ""}</strong></h1>
    </div>
)
}
