import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


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


export default function App() {
    const [selected, setSelected] = useState(options[0])
    return <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>

        <Route path="/list">
            <Search />
        </Route>

        <Route path="/dropdown">
            <Dropdown label="select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected} />
        </Route>

        <Route path="/translate">
            <Translate />
        </Route>
    </div>
}