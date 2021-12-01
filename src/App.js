import { useState } from "react";

function App() {

  const [response, SetResponse] = useState("");

  function validateBalance(str){
    let stack = [];
    // let word = "";
    let map = {
      '(': ')'
    };

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' ) {
          if (str[i]+str[i+1]+str[i+2] === '(:)') {return SetResponse("Balanceado")}
          else if(str[i]+str[i+1]+str[i+2]+str[i+3] === '(:))') {return SetResponse("Balanceado")}
          else if(str[i]+str[i+1]+str[i+2]+str[i+3] === '(:()') {return SetResponse("Balanceado")}
            stack.push(str[i]);
        }
        else if (str[i] === ')' ) {
            let last = stack.pop();
            if (str[i] !== map[last]) {return SetResponse("Desbalanceado")};
        }
        else if (str[i] === ':' ) {
            i++;
        }
    }
    
    return stack.length !== 0 ? SetResponse("Desbalanceado"):SetResponse("Balanceado");

  }

  return (
    <div>
      <input type="text" onChange={(e) => validateBalance(e.target.value)}/>
      <h1>Result:</h1>
      <h2>{response}</h2>
    </div>
  );
}

export default App;
