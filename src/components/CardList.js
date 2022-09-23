import React from "react";
import Card from "./Card";
import { robots } from "../robots";

const CardList = ({ input }) => {
  const searchedRobots = robots.filter((robot) => {
    if (input === "") return robot;
    else return robot.name.toLowerCase().includes(input);
  });
  return searchedRobots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });
};

export default CardList;
