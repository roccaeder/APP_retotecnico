import { useState } from "react";

function App() {

  const [response, SetResponse] = useState("");

  function validateBalance(str){
    let stack = [];
    let map = {
      '(': ')'
    };
    console.log(str);
    if (str === "") {return SetResponse("")}

    for (let i = 0; i < str.length; i++) {
      console.log(i);
      if (str[i] === ':' ) {
        if (str[i]+str[i+1] === ':)') {
          i = i+1;
          SetResponse("Balanceado")
        }
        else if (str[i]+str[i+1] === ':(') { 
          i = i+1;
          SetResponse("Balanceado")
        }
      }
      else if (str[i] === '(' ) {
        stack.push(str[i]);
        if(str[i]+str[i+1]+str[i+2]+str[i+3] === '(:))') { 
          i = i+3;
          SetResponse("Balanceado")
          stack.pop();
        }
        else if(str[i]+str[i+1]+str[i+2]+str[i+3] === '(:()') { 
          i = i+3;
          SetResponse("Balanceado")
          stack.pop();
        }
        else if (str[i]+str[i+1]+str[i+2] === '(:)') { 
          i = i+2;
          stack.pop();
          SetResponse("Balanceado")
        }
      }
      else if (str[i] === ')' ) {
          let last = stack.pop();
          if (str[i] !== map[last]) {return SetResponse("Desbalanceado")};
      }
    }
    console.log(stack)
    return stack.length !== 0 ? SetResponse("Desbalanceado"):SetResponse("Balanceado");

  }

  return (
    <div>
      <h1>TECHNICAL CHALLENGE</h1>
      <input type="text" onChange={(e) => validateBalance(e.target.value)}/>
      <h1>Result:</h1>
      <h2>{response}</h2>
    </div>
  );
}

export default App;
