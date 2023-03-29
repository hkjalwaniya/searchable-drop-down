import { useEffect, useState } from "react";
import './styles.css';
import useComponentVisible from './useComponentVisible'

export const SearchableDropDown = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [item, setItem] = useState('')
    const [options, setOptions] = useState([
        'New York',
        'Dublin',
        'California',
        'Instambul',
        'Izmir',
        'Oslo',
        'New Jersey',
        'London',
        'New Delhi'
    ])
    const [filteredOptions, setFilteredOptions] = useState([
        'New York',
        'Dublin',
        'California',
        'Instambul',
        'Izmir',
        'Oslo',
        'New Jersey',
        'London',
        'New Delhi'
    ])

    const handleItemChange = (e) => {
        setItem(e.target.value)
        const filteredList = options.filter((option) => {
            const searchedItem = e.target.value.toLowerCase()
            return option.toLowerCase().includes(searchedItem)
        })
        setFilteredOptions(filteredList)
    }

    const handleItemSelect = (option) => {
        setItem(option)
        setIsComponentVisible(false)
    }

    const handleInputFocus = () => {
        setIsComponentVisible(true)
    }

    return (
            <div ref={ref} className={isComponentVisible ? 'dropdown opened' : 'dropdown closed'} >
                <input
                    value={item}
                    placeholder="Select Location"
                    onChange={handleItemChange}
                    onFocus={handleInputFocus}
                />
                {
                    isComponentVisible && <ul>
                        {filteredOptions.map(filteredOption => (
                            <li onClick={() => handleItemSelect(filteredOption)}>{filteredOption}</li>
                        ))}
                    </ul>
                }
            </div>
    )
}