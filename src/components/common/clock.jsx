import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const ClockWrapper =  styled.div`
padding: 0.5rem 1rem;
letter-spacing: 1px;
color: #40916c;
margin-top: 1rem;
margin: 1rem auto;
text-align: center;
width: 13rem;
border: 1px solid #f5ebeb;
border-radius: 0.2rem;
background: #f5f5f5;
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