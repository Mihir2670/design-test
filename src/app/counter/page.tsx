"use client"
import {useState} from 'react';

export default function counter(){
    const [name,setcount] = useState<string>("");

    return(
        <div>
            
            Input:<input type="text" className='bg-zinc-200'/>
            <button onClick={()=>setcount(name)}>
                Submit
            </button>
        </div>
    );
}