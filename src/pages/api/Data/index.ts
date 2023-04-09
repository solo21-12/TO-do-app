import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../../data";
import { DataTypes } from "../../../../types";


export default function handler(req:NextApiRequest,res:NextApiResponse<DataTypes[]>){
    res.status(200).send(Data.filter(data=>data.active === false))
}