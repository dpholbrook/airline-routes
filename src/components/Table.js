import React, {useState} from 'react'

const Table = ({
  routes, 
  perPage,
  columns,
  format 
  }) => {

  const [page, setPage] = useState(0)

  const previous = (event) => {
    const newPage = page - 1
    if (newPage < 0) {
      setPage(0)
    } else {
      setPage(page - 1)
    }
  }

  const next = (event) => {
    setPage(page + 1)
  }

  const start = page * perPage;
  const end = ((start + perPage) > routes.length) ? routes.length : start + perPage

  const rows = routes.slice(start, end) 

  console.log("START", start)
  console.log("END", end)

  return (
    <div>
      <button disabled={(page === 0)} onClick={previous}>Previous</button>
      <button disabled={(end >= routes.length)} onClick={next}>Next</button>
      <p>Displaying {start + 1} - {end} of {routes.length} routes</p>
      <table>
        <thead>
          <tr>
            {columns.map((column, idx) =>
              <th key={idx}>{column.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((route, idx) => 
            <tr key={idx}>
              {columns.map((column, idx) =>
                <td key={idx}>{format(column.property, route[column.property])}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table;

/*
number of routes to display is routes length
page number increments or decrements by one with each button click
slice is page number * perPage


*/