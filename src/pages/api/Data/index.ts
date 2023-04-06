import { NextApiRequest, NextApiResponse } from "next";
import { InitialValues } from "../../../../containers/AddEvent/entities";
import { Data } from "../../../../data";


export default function handler(req:NextApiRequest,res:NextApiResponse<InitialValues[]>){
    res.status(200).send(Data.filter(data=>data.active === false))

}