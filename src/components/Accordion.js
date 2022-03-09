import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setactiveIndex] = useState(null)

    const onTitleClick = (index) => {
        console.log('title clicked :', index)
        setactiveIndex(index)
    }
    const renderedItems = items.map((item, i) => {
        const active = (i === activeIndex) ? 'active' : ''

        return <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return <div className='ui styled accordion'>
        {renderedItems}
    </div>
}

export default Accordion