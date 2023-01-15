import React from 'react';
import './Filter.css';
import MyContext from "../../../MyContext";
import { useContext } from 'react';

const Filter = () => {
    const {categories, funcFilter} = useContext(MyContext);
    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={funcFilter}>
                <option value={"All Item"}>All Item</option>
                {categories.map((i, index) => (
                    <option value={i} key={index}>
                        {i}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Filter