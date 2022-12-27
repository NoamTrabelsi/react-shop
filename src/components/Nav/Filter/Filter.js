import React from 'react'
import './Filter.css'
const Filter = () => {
    const FilterOption = ['All Jackets', '2016', 'jacket', 'Jackets', 'layers', 'Obermeyer', 'Roxy', 'womens'];
    const FilterlistItems = FilterOption.map((op, i) => <option key={i}>{op}</option >);
    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select>{FilterlistItems}</select>
        </div>
    )
}

export default Filter