
import React from 'react';

// import { tasksRepo } from '../helpers/database';  
// const list =  tasksRepo.getAll();
const list =  [
    {id:1, firstname: 'Luciano', lastname: 'Espiridiao', year: 2021},
    {id:2, firstname: 'Bernardo', lastname: 'Espiridiao', year: 2021},
];

const ComplexList = () => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
);

export default ComplexList;