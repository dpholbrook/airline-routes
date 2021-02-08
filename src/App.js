import React, {useState} from 'react';
import './App.css';
import Data from './data.js';
import Table from './components/Table';
import Select from './components/Select';

const App = () => {
  const [airlineFilter, setAirlineFilter] = useState('All Airlines')
  const [airportFilter, setAirportFilter] = useState('All Airports')

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

  const handleSelect = (event) => {
    if (event.target.name === "All Airlines") {
      setAirlineFilter(event.target.value)
    } else if (event.target.name ==="All Airports") {
      setAirportFilter(event.target.value)
    }
  }

  const filteredRoutes = Data.routes.filter(route => {
    return ((route.airline === Number(airlineFilter) || airlineFilter === 'All Airlines')
    && (airportFilter === 'All Airports' || route.src === airportFilter || route.dest === airportFilter))
  })

  const validAirlines = Data.airlines.map(airline => {
    if (filteredRoutes.find(route => route.airline === airline.id)) {
      return {...airline, disabled: false}
    } else {
      return {...airline, disabled: true}
    }
  })

  const validAirports = Data.airports.map(airport => {
    if (filteredRoutes.find(route => route.src === airport.code || route.dest === airport.code)) {
      return {...airport, disabled: false}
    } else {
      return {...airport, disabled: true}
    }
  })

  const clearFilters = () => {
    setAirlineFilter('All Airlines')
    setAirportFilter('All Airports')
  }

  return (
    <>
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <Select 
        options={validAirlines} 
        valueKey="id" 
        titleKey="name"
        allTitle="All Airlines" 
        value={airlineFilter} 
        onSelect={handleSelect}
      />
      <Select 
        options={validAirports} 
        valueKey="code" 
        titleKey="name"
        allTitle="All Airports" 
        value={airportFilter} 
        onSelect={handleSelect}
      />
      <button onClick={clearFilters}>Clear Filters</button>
      <section>
        <Table 
          className="routes-table" 
          columns={columns} 
          routes={filteredRoutes} 
          format={formatValue}
          perPage={25} 
        />
      </section>
    </div>
    </>
  )
}

export default App;


