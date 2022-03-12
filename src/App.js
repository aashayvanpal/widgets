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

    return <div>
        <Accordion items={items} />
        <Search />
        <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options} />
    </div>
}