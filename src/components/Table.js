import React from 'react'

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map(column =>
            <th>{column.name}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {props.rows.map(route => 
          <tr key = {route.airline + route.src + route.dest}>
            {props.columns.map(column =>
              <td>{props.format(column.property, route[column.property])}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table;