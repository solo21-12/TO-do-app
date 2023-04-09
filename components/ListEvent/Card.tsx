"use client";

import { Card, Flex, Title, Text, Button } from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../containers/NavBar/entities";
import { Props } from "../../containers/ListEvents/entities";
import { useEffect, useState } from "react";
import { Dialogs } from "../";
import { InitialValues } from "../../containers/AddEvent/entities";
import { edidted } from "../../utils/slices/listSlice";
export function Cards({ setValue, data, completed }: Props) {
  const { details, name, active } = data;
  const [complete, setComplete] = useState<boolean>(false);
  const [remove, setRemove] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [initData, setInitData] = useState<InitialValues[]>([]);

  const dispatch = useDispatch();

  let res: { data: InitialValues[] } = useSelector((state: any) => state.list);

  useEffect(() => {
    const val = res.data.filter((item) => item.id == data.id);
    setInitData(val);
  }, []);

  const onSubmit = (values:any) => {
    dispatch(edidted(values));
  };
  return (
    <>
      <Card className="mt-8 w-[90%] sm:w-[62%] lg:w-[30%]" decoration="top">
        <Flex justifyContent="between" alignItems="center" className=" md:mb-4">
          <Title>{name}</Title>
          {active && !completed ? (
            <div className="h-3 w-3 rounded-full bg-green-600" />
          ) : (
            <div className="h-3 w-3 rounded-full bg-red-600" />
          )}
        </Flex>
        <Text className=" text-xs">{details}</Text>
        <div className="mt-5 flex flex-wrap">
          {active && !completed && (
            <Button
              className={classNames(
                complete ? `bg-teal-500 text-slate-100` : `text-gray-600`,
                " px-2 mx-2 py-[2px]"
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
              " px-2 mx-2 py-[2px]"
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
              className="px-4 mx-2 py-[2px] text-gray-600 hover:bg-slate-300 "
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
        initialValues={initData[0]}
      />
    </>
  );
}
