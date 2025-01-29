import { eachItem } from 'ajv/dist/compile/util';
import React, { useState } from 'react'

const useStateAdvance1 = () => {
    //using Object
    // const initObject={
    //     name:"Manikanta",
    //     age:20
    // };
     //const[data,setdata]=useState(initObject);
    
    //Direct Init at useSate
    // const[data,setdata]=useState({
    //     name:"Manikanta",
    //     age:20
    // });

    //Using function
    // function fun()
    // {
    //     return{
    //         name:"Doshna",
    //         age:25
    //     }
    // }
    //const[data,setdata]=useState(fun);
    // const changeName=()=>
    //     {
    //         setdata(
    //             {...data,
    //                 name:"Manikanta",
                
    //             }
    //         );
    //     };
    //     const changAge=()=>
    //     {
    //         setdata(
    //             {
    //                 ...data,
    //                 age:23
    //             }
    //         )
    //     };

    //same for above All
    // return (
    //     <div>
    //     <h1>Name: {data.name}</h1>
    //     <button onClick={changeName}> Change Name</button>
    //     <h2>Age: {data.age}</h2>
    //     <button onClick={changAge}> Change Age</button>
        
    //     </div>
    //   )
    
    // const[name,setName]=useState("M D N V B MANIKANTA");
    // const[age,setAge]=useState(45);

    // const changeName=()=>
    // {
    //     setName("Manikanta Maddhi")
    // };
    // const changAge=()=>
    // {
    //     setAge(59)
    // }
    
    const arr=[
        {
            id:1,
            name:"Manikanta",
            age:22
        },
        {
            id:2,
            name:"Sanjeev",
            age:23
        },
        {
            id:3,
            name:"RaviTeja",
            age:24
        }
    ];
    const[data,setdata]=useState(arr);
    const handleDelete=(comingId)=>
    {
        console.log(comingId);
        const filterData=data.filter((eachItem)=>
        {
            return eachItem.id !==comingId;
        });
        setdata(filterData);
        
    }




  return (
    <div>
    {/* <h1>Name: {name}</h1>
    <button onClick={changeName}> Change Name</button>
    <h2>Age: {age}</h2>
    <button onClick={changAge}> Change Age</button> */}

    <ol>
        {
            data.map((eachItem,index)=>
            {
                const{name,age,id}=eachItem;
                return(
                    <li key={index}>
                    <div><h1>Name:{name}</h1></div>
                    <div><h2>Age: {age}</h2></div>
                    <button onClick={()=>handleDelete(id)}>Delete</button> 
                    </li>
                )
            })
        }
    </ol>
    
    </div>
  )
}

export default useStateAdvance1