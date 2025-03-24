import { useReducer, useState } from "react";
import Table from"./Table"

export function Bill(){
  const[table1,setTable1]=useState([])
  const[table2,setTable2]=useState([])
  const[table3,setTable3]=useState([])

    const object={
        id:"",
        name:"",
        price:"",
        table:""
    }
    function reducer(state,action){
       switch(action.type){
        case "ID":  return {...state,id:action.payload.value}
        case "NAME":return {...state,name:action.payload.value}
        case "PRICE":return {...state,price:action.payload.value}
        case "TABLE":return {...state,table:action.payload.value}

       }
     

   
    }

     const[state,dispatch]=useReducer(reducer,object)


    function handleSubmit(event){
     event.preventDefault();

       if(state.table==1){
        setTable1((pre)=>{
            return [...pre,state]
        })
       }
       else if(state.table==2){
        setTable2((pre)=>{
            return [...pre,state]
        })
    }
        else if(state.table==3){
            setTable3((pre)=>{return [...pre,state]})
        }
        else{
            return;
        }
       
 
    }
  console.log(table1);
  console.log(table2);
  console.log(table3)
    function  onChangeHanddler(event){
         switch(event.target.name){
            case "id":dispatch({type:"ID",payload:{value:event.target.value}})
            break;
            case "price":dispatch({type:"PRICE",payload:{value:event.target.value}})
            break;
            case "dish":dispatch({type:"NAME",payload:{value:event.target.value}})
            break;
            case "table":dispatch({type:"TABLE",payload:{value:event.target.value}})
            default:
                break;
         }

    
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="uniqeId">Unique Id</label>
        <input id="uniqeId" name="id"type="number" onChange={onChangeHanddler} value={state.id}></input>

        <label htmlFor="price">Choose Price</label>
        <input id="price"type="number" name="price" onChange={onChangeHanddler} value={state.price}></input>

        <label htmlFor="dish">choose dish</label>
        <input id="dish" name="dish" type="text" onChange={onChangeHanddler} value={state.name}></input>

        <label htmlFor="table">choose Table</label>
        <select  name="table"id="table" value={state.table} onChange={onChangeHanddler}>
            <option value="">Choose table</option>
            <option value="1">table 1</option>
            <option value="2">table 2</option>
            <option value="3">table 3</option>
        </select>

       <button type="submit">Get Bill</button>



        </form>

        <Table value={1} data={table1}/>
        <Table value={2} data={table2}/>
        <Table value={3} data={table3}/>
        
        
        </>
    )
}