export default function Table(props){


    return <>
     <ul ><h1>{"Table"+props.value}</h1>
        {props.data.map((ele)=>{
            return (
                <li key="ele.id">
                      {"name: "+ele.name+" "+"price: "+ele.price+" table: "+ele.table}
                    <button>delete</button>

                </li>
            )
        })}
     </ul>
    
    
    </>
}