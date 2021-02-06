import React, { Component } from 'react';
import './App.css';
import Data from './data.js'

const App = () => (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <p>
        Welcome to the app!
      </p>
      <table>
        <thead>
            <tr>
                <th>Airline</th>
                <th>Source</th>
                <th>Destination</th>
            </tr>
        </thead>
        <tbody>
          {Data.routes.map(route => 
            <tr key = {route.airline + route.src + route.dest}>
              <td>{Data.getAirlineById(route.airline)}</td>
              <td>{Data.getAirportByCode(route.src)}</td>
              <td>{Data.getAirportByCode(route.dest)}</td>
            </tr>
          )}
            <tr>
                <td>One</td>
                <td>Two</td>
                <td>Three</td>
            </tr>
        </tbody>
      </table>
    </section>
  </div>
)

export default App;