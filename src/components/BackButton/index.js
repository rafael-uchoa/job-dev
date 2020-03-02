import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import './styles.scss';

export default function BackButton() {
  return (
    <Link to="/">
      <TiArrowBack className="BackButton" />
    </Link>
  );
}
