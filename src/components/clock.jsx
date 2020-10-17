import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const ClockWrapper =  styled.div`
float: right;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
letter-spacing: 1px;
color: #3F51B5;
border: 2px solid #3F51B5;
`
const Clock = () => {
    const [date, setDate] = useState(moment().format('DD/MM/YYYY hh:mm:ss'))

    useEffect(() => {
        var timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })

    function tick() {
        setDate(moment().format('DD/MM/YYYY hh:mm:ss'))
    }

    return <ClockWrapper>{date}</ClockWrapper>
}

export default Clock