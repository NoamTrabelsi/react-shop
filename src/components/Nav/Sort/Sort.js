import React from 'react'
import './Sort.css'
const Sort = () => {
  const SortOption = ['Featured', 'Best Selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low', 'Date, new to old', 'Date, old to new'];
  const SortListItem = SortOption.map((op, i) => <option key={i}>{op}</option >);
  return (
    <div className="collection-sort">
      <label>Sort by:</label>
      <select>{SortListItem}</select>
    </div>
  )
}

export default Sort