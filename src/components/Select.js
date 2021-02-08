import React from 'react'

const Select = ({
  options,
  valueKey,
  titleKey,
  allTitle,
  value,
  onSelect
}) => {
  return (
    <select name={allTitle} id={allTitle} value={value} onChange={onSelect}>
      <option value={allTitle}>{allTitle}</option>
      {options.map(option => 
          <option key={option[valueKey]} value={option[valueKey]} disabled={option.disabled}>{option[titleKey]}</option>
      )}
    </select>
  )
}

export default Select;