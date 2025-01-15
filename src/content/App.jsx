import React from 'react';
import Inspector from './components/Inspector';
import './styles/main.scss';

export default function App() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Inspector />
    </div>
  );
}
