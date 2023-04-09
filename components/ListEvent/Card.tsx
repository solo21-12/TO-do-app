"use client";

import { Card, Flex, Title, Text, Button } from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../containers/NavBar/entities";
import { Props } from "../../containers/ListEvents/entities";
import {  useState } from "react";
import { Dialogs } from "../";
import { edidted, pinned, unPinned } from "../../utils/slices/listSlice";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { DataTypes } from "../../types";
export function Cards({ setValue, data, completed }: Props) {
  const { details, name, active } = data;
  const [complete, setComplete] = useState<boolean>(false);
  const [remove, setRemove] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pin, setPin] = useState<boolean>(false);

  const dispatch = useDispatch();

  let res: { data: DataTypes[] } = useSelector((state: any) => state.list);

  const onSubmit = (values: any) => {
    dispatch(edidted(values));
  };
  const pinItem = () => {
    dispatch(pinned(data));
  };
  const unPinn = () => {
    dispatch(unPinned(data));
  };

  return (
    <>
      <Card
        className="mt-8 w-[90%] sm:w-[62%] lg:w-[35%] xl:w-[30%]"
        decoration="top"
      >
        <Flex justifyContent="between" alignItems="center" className=" md:mb-4">
          <Title>{name}</Title>
          <div className="flex align-middle items-center gap-3">
            {active && !completed ? (
              <div className="h-3 w-3 rounded-full bg-green-600" />
            ) : (
              <div className="h-3 w-3 rounded-full bg-red-600" />
            )}
            {active &&
              (data.pinned ? (
                <button className=" text-2xl text-blue-500" onClick={unPinn}>
                  <AiFillPushpin />
                </button>
              ) : (
                <button className=" text-xl text-blue-500" onClick={pinItem}>
                  <AiOutlinePushpin />
                </button>
              ))}
          </div>
        </Flex>
        <Text className=" text-xs">{details}</Text>
        <div className="mt-5 flex flex-wrap w-full">
          {active && !completed && (
            <Button
              className={classNames(
                complete ? `bg-teal-500 text-slate-100` : `text-gray-600`,
                " px-2 mr-1 py-[2px]"
              )}
              onClick={() => {
                setComplete(true);
                setValue && setValue("complete", data);
              }}
            >
              Complete
            </Button>
          )}

          <Button
            className={classNames(
              remove ? `bg-red-500 text-slate-100` : `text-gray-600`,
              " px-2 mr-1 py-[2px]"
            )}
            onClick={() => {
              setRemove(true);
              setValue && setValue("remove", data);
            }}
          >
            Remove
          </Button>

          {active && !completed && (
            <Button
              className="px-4 mx-1 py-[2px] text-gray-600 hover:bg-slate-300 "
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Edit
            </Button>
          )}
        </div>
      </Card>
      <Dialogs
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Edit a task"
        onSubmit={onSubmit}
        ButtonTitile="Edit"
        initialValues={data}
      />
    </>
  );
}
