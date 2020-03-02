import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function MainCard({ title, path, btnText }) {
  return (
    <div className="MainCard">
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est at,
        inventore expedita facilis hic quaerat quibusdam. Magni nemo delectus
        odit voluptates et aliquid autem eveniet ducimus? Quis, aut debitis!
      </p>
      <Link to={path}>
        <button>{btnText}</button>
      </Link>
    </div>
  );
}
