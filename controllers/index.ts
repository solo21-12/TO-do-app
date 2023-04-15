import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../utils/prisma";
import { DataTypes } from "../types";
export const getAllData = async (req: NextApiRequest, res: NextApiResponse) => {
  const list: DataTypes[] = await prisma.tasks.findMany();
  res.status(200).send({
    data: list,
  });
};

export const postData = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  await prisma.tasks.create({
    data: data,
  });
  res.status(201).send("ok");
};

export const updateData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, id } = req.body;
  const user = await prisma.tasks.findFirst({
    where: {
      id: id,
    },
  });
  if (user) {
    await prisma.tasks.update({
      where: {
        id: user.id,
      },
      data: data,
    });
    res.status(201).send("ok");
  } else {
    res.status(404).send("User doesn't exit");
  }
};

export const deleteData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  await prisma.tasks.delete({
    where: {
      id: id,
    },
  });
  res.status(201).send("ok");
};
