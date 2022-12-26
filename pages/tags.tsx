import { Typography } from "@mui/material";
import { useEffect } from "react"
import Navbar from "../components/navbar"
import { API_URL } from "../helpers/_frontendConstants"

function Tag(props:any){
    return <div  className="inline bg-[#60a5fa] text-[white] p-2 rounded-3xl text-center">
        <span>{props.item[0]}</span><span > ({props.item[1]}) </span>
    </div>
}
export default function Tags({data}:any){
    let x:any[] = data.message;
    return <div >
        <Navbar/>
        <Typography variant="h3" className="text-center relative top-5 text-[blue]">Tags</Typography>
        <div key={Math.random()} className="gap-x-2 gap-y-8  relative top-5 grid grid-cols-4 w-fit mt-4" style={{
            marginLeft:"25vw"
        }}>
            {x.map(item=><Tag key={Math.random()} item={item}/>)}
        </div>
    </div>
}

export async function getServerSideProps(){
    let resp = await fetch(`${API_URL}/api/tags`);
    let data = await resp.json();
    return {
        props:{
            data:data
        }
    }
}