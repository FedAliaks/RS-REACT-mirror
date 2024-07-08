import React from 'react';
import './style.css';

export default class Fallback extends React.Component {
  render() {
    return (
      <div className="fallback">
        <p className="fallback-content">Something has crashed. Reload page!</p>
      </div>
    );
  }
}
