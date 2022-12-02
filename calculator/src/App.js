import { useEffect, useState } from 'react';
import './App.css';
import cogoToast from 'cogo-toast';
function App() {
  const [amount,setAmount] = useState({bluff:0,value:0})
  const [version,setVersion] = useState(null)
  console.log(version)
  //2,8 bluff
  //7,2 value
  const answer = (tip) =>{
    if(tip === version){
      cogoToast.success(" RIGHT GUESS !!!")
    }else{
      cogoToast.error("WRONG VERSION!!!")
    }
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const tellMeTheTruth = () =>{
    if(version === 1){

      if(Math.random() > 0.28){
        setAmount({value : amount.value +1,bluff : amount.bluff})
      }else{
        setAmount({value :amount.value ,bluff : amount.bluff +1})
      }
    }else if (version === 0){
      if(Math.random() > 0.21){
        setAmount({value : amount.value +1,bluff : amount.bluff})
      }else{
        setAmount({value :amount.value ,bluff : amount.bluff +1})
      }
    }else{
      if(Math.random() > 0.35){
        setAmount({value : amount.value +1,bluff : amount.bluff})
      }else{
        setAmount({value :amount.value ,bluff : amount.bluff +1})
      }
    }
  }
  const frequencies = () =>{
    setVersion(getRandomInt(3))
    setAmount({bluff:0,value:0})
  }
  useEffect(()=>{
    setVersion(getRandomInt(3))
  },[])

  return (
    <div className="App">
      <div className='right'>
        <h4 >Statistic</h4>
        <div>bluffs {amount.bluff}</div>
        <div >value {amount.value}</div>
      </div>
      <header className="App-header">
        <h1>BluffCatching Simulator</h1>
        <p>You are bluff catching river spot for 2/3</p>
       <button onClick={()=>tellMeTheTruth()} className="btn">CALL</button>
      </header>
      <div>
        <h3>chose your assumptions</h3>
        <button  className="btn" onClick={()=>answer(0)}>Value heavy</button>
        <button  className="btn" onClick={()=>answer(1)}>GTO</button>
        <button  className="btn" onClick={()=>answer(2)}>Bluff heavy</button>
      </div>
      <button  className="btn" onClick={()=>frequencies()}>Change frequencies</button>
    </div>
  );
}

export default App;
