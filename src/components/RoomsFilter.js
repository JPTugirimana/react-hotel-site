import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    
    const context = useContext (RoomContext);
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;

    // Get unique room types
    let types = getUnique(rooms, 'type');

    // add 'all" type to type list
    types = ['all',...types];

    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let capacities = getUnique(rooms, 'capacity')
    capacities = capacities.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                 {/*select type*/}
                 <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange} 
                    >
                        {types}
                    </select>
                 </div>
                 {/* end select type*/}
                 {/*select guest*/}
                 <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange} 
                    >
                        {capacities}
                    </select>
                 </div>
                 {/* end select type*/}
                 {/* Start of Room Price*/}
                 <div className="form-group">
                    <lable htmlFor="price">room price ${price}</lable>
                    <input 
                        name="price" 
                        id="price"
                        type="range"
                        min={minPrice} 
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                        />
                 </div>
                 {/* End of Room Price*/}
                 {/* Room Size*/}
                 <div className="form-group">
                     <label htmlFor="size">room size</label>
                     <div className="size-inputs">
                        <input 
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input 
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <span>SQFT</span>
                     </div>
                 </div>
                 {/* End of Room Size*/}
                 {/* Extras*/}
                 <div className="form-group">
                     <div className="single-extra">
                         <input 
                            type="checkbox" 
                            name="breakfast"
                            id="breakfast"
                            //checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">Breakfast</label>
                     </div>
                     <div className="single-extra">
                         <input 
                            type="checkbox" 
                            name="pets"
                            id="pets"
                            //checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                     </div>
                 </div>
                 {/* End of Extras*/}
            </form>
        </section>
    )
}
