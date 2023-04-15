import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../utils/prisma";

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  await prisma.user.create({
    data: data,
  });
  res.status(200).send("ok");
};

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.user.findMany();
  res.status(200).send(user);
};
