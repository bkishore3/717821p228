import  Axios from 'axios';
import {useState}  from 'react';
export default function App(){
    let [cnt,setCnt]=useState([]);
    let [name,setName]=useState("");
  const Prime=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/primes');
      setCnt([...res.data.numbers]);
      setName("Prime");
   
    }catch(err){
      console.log(err);
    }
  
  }

  const Fibo=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/fibo');
      console.log(res.data.numbers);
      setCnt([...res.data.numbers]);
      setName("Fibo");
    }catch(err){
      console.log(err);
    }
  }
  

  const Even=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/even');
      console.log(res.data.numbers);
      setCnt([...res.data.numbers]);
      setName("Even");
    }catch(err){
      console.log(err);
    }
  }

  const Random=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/rand');
      console.log(res.data.numbers);
      setCnt([...res.data.numbers]);
      setName("Random");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
        <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center'}}>
        <p style={{display:'flex',width:'100%',height:'auto',justifyContent:'center'}}>Calculator</p>
        <div style={{display:'flex',width:'100%',height:'auto',justifyContent:'center',marginBottom:'50px'}}>
         <button style={{width:'60px',height:'50px',marginRight:'20px'}} onClick={Prime}>prime</button>
         <button style={{width:'60px',height:'50px',marginRight:'20px'}}  onClick={Fibo}>fibo</button>
         <button style={{width:'60px',height:'50px',marginRight:'20px'}}  onClick={Even}>even</button>
         <button style={{width:'60px',height:'50px',marginRight:'20px'}}  onClick={Random}>random</button>
         </div>
         <div style={{display:'flex',width:'100%',height:'auto',justifyContent:'center',marginBottom:'20px'}}>{name}</div>
         <div style={{width:'100%',display:'flex',justifyContent:'center',gap:10}}>
            {
                cnt.map(n=>{

                    return ( <div> {n} </div>)
                })

            }
         </div>
         
         </div>
    </div>
  );
}