import React from "react";
import Persons from "./Persons";

const Person = props => {
  return <Persons id={props.id} name={props.name} age={props.age} />;
};

export default Person;
