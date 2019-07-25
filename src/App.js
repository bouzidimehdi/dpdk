import React from 'react';
import Card from './components/Card';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card title="Digital content & Advertising"/>
        <Card title="Strategy & Consulting"/>
        <Card title="Branding"/>
        <Card title="Product & Business innovation"/>
        <Card title="e-Commerce"/>
        <Card title="Customer Experience & Design"/>
      </div>
    </div>
  )
}

export default App;
