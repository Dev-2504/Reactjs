import React from "react";

export default function ArrOfObject({id,name,subject}) {
  return (
    <>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{subject}</li>
      </ul>
    </>
  );
}
