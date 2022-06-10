import {useState} from 'react';

export function Counter(){
 const [counter, setCounter] = useState(0);

     function incremet(){
        setCounter(counter + 1);
    }
    
    
    function decremet(){
      
      if(!counter == 0){
        setCounter(counter - 1);
      }

      
    }


    return(
        <div>
            <h2>
                {counter}
            </h2>
            <button type="button" onClick={incremet}>Contar</button>
            <br/><br/>
            <button type="button" onClick={decremet}>Contar menos</button>
        </div>
    );
}