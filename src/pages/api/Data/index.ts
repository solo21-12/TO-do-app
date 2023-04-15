import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../../data";
import { DataTypes } from "../../../../types";
import { main } from "../../../../data/script";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataTypes[]>
) {
  const r = await main();
  res.status(200).send(r);
}
