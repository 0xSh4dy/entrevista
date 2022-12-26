import type { NextApiRequest,NextApiResponse } from "next";
import fetchModel from "../../models/fetchModels";
import { fetchData } from "./_helpers/fetchProjections";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="POST"){
        
        return;
    }
    res.status(405).send("Method not allowed");
    return;
}