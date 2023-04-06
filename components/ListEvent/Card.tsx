"use client";

import { Card, Flex, Title, Text, Button } from "@tremor/react";
import { classNames } from "../../containers/NavBar/entities";
import { Props } from "../../containers/ListEvents/entities";
import { useState } from "react";

export function Cards({ setValue, data ,completed}: Props) {
  const { details, name, active } = data;
  const [complete, setComplete] = useState<boolean>(false);
  const [remove, setRemove] = useState<boolean>(false);

  return (
    <Card
      className="mt-8 w-[90%] sm:w-1/2 md:w-1/3 lg:w-[30%]"
      decoration="top"
    >
      <Flex justifyContent="between" alignItems="center" className=" md:mb-4">
        <Title>{name}</Title>
        {active && !completed ? (
          <div className="h-3 w-3 rounded-full bg-green-600" />
        ) : (
          <div className="h-3 w-3 rounded-full bg-red-600" />
        )}
      </Flex>
      <Text className=" text-xs">{details}</Text>
      <div className="mt-5">
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
      </div>
    </Card>
  );
}
