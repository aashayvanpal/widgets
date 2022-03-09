import React from 'react'
import Accordion from './components/Accordion'

export default () => {
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
    return <div>
        <Accordion items={items} />
    </div>
}