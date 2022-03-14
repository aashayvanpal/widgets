import React, { useEffect, useState } from 'react'

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log('new lang man')
    }, [language, text])
    return (
        'converter'
    )
}

export default Convert