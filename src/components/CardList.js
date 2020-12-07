import React from "react";
import Card from "./Card";

/* 
const robots = props.robots
- map robots array and create one card per robot(user)
- give a unique key to each Card
- pass in each Card an object, one robot, key, id, name and email from robots array
Equivalent:
  1 const robots = props.robots
  2 const {robots} = props
  3 const CardList = ({robots})
*/

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
