import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

export default function App() {
    const items = [{
        title: 'what is react?',
        content: 'front end js framework'
    },
    {
        title: 'why react?',
        content: 'faviorate library'
    },
    {
        title: 'how to react?',
        content: 'by creating components'
    }]

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
    return <div>
        {/* <Accordion items={items} />
        <Search /> */}
        <button onClick={() => { setShowDropdown(!showDropdown) }}>toggle the dropdown</button>
        {showDropdown ? <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options} /> : null}

    </div>
}