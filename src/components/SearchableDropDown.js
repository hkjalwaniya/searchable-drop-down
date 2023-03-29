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
        'Oslo'
    ])
    const [filteredOptions, setFilteredOptions] = useState([
        'New York',
        'Dublin',
        'California',
        'Instambul',
        'Izmir',
        'Oslo'
    ])

    const handleItemChange = (e) => {
        setItem(e.target.value)
        const filteredList = options.filter((option) => {
            const searchedItem = e.target.value.toLowerCase()
            return option.toLowerCase().includes(searchedItem)
        })
        console.log('filteredList', filteredList)
        setFilteredOptions(filteredList)
    }

    const handleItemSelect = (option) => {
        console.log('selected',option)
        setItem(option)
        setIsComponentVisible(false)
    }

    const handleInputFocus = () => {
        setIsComponentVisible(true)
    }

    const handleInputBlur = () => {
        setIsComponentVisible(false)
    }

    return (
        <div className="dropdown" ref={ref}>
            <input value={item} onChange={handleItemChange} onFocus={handleInputFocus} />
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