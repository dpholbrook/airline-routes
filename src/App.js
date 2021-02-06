import React, { Component } from 'react';
import './App.css';
import Data from './data.js'
import Table from './components/Table'

const App = () => {
  console.log("DATA", Data)
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const formatValue = (property, value) => {
    if (property === "airline") {
      return Data.getAirlineById(value)
    } else if (property === "src" || property === "dest") {
      return Data.getAirportByCode(value)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <p>
          Welcome to the app!
        </p>
        <Table className="routes-table" columns={columns} rows={Data.routes} format={formatValue} />
      </section>
    </div>
  )
}

export default App;