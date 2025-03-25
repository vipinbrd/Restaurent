export default function Table(props){


    return <>
     <ul ><h1>{"Table"+props.value}</h1>
        {props.data.map((ele)=>{
            return (
                <li key="ele.id">
                      {"name: "+ele.name+" "+"price: "+ele.price+" table: "+ele.table}
                    <button onClick={()=>{props.onDeleteHandler(ele.id,+ele.table)}}>delete</button>

                </li>
            )
        })}
     </ul>
    
    
    </>
}