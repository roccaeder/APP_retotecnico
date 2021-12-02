import { useState } from "react";

function App() {

  const [response, SetResponse] = useState("");

    function validateBalance(str){
      let happy = 0;
      let sad = 0;
      let aux = 0;
      let stack = [];
      let map = {
        '(': ')'
       };

      for (let i = 0; i < str.length; i++) {
          if (str[i] === '(' ) {
              stack.push(str[i]);
          }
          else if ((str[i] === ')' )) {
              let last = stack.pop();
              if (str[i] !== map[last]) aux++;
          }
          else if (str[i] === ':') {
              if (str[i]+str[i+1] === ':(') sad++;
              else if (str[i]+str[i+1] === ':)') happy++;
          }
      }
      // console.log(happy, sad, aux , stack.length);
      
      if (stack.length === 0 && aux === 0) {
          return SetResponse("Balanceado")
      }
      else if (aux <= happy && stack.length <= sad) {
          return SetResponse("Balanceado")
      }
      else {
          return SetResponse("Desbalanceado")
      }
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
