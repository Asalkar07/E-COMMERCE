import React,{useState,useEffect} from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = (props) => {
  const[item, setNew_collection]=useState([]);

    useEffect(()=>{
      fetch(`http://localhost:4000/newc011ections`)
      .then((reponse)=>reponse.json())
      .then((data)=>setNew_collection(data));
    },[]);
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
    </div>
  )
}

export default NewCollections;
