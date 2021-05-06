import React, { useState } from 'react';

type Props = {
  person: { id: number; name: string };
};
const Person = ({ person }: Props) => {
  console.log(person.name);
  return (
    <div className="names">
      <button type="button" className={''}>
        {person.name}
      </button>
    </div>
  );
};

export default Person;
