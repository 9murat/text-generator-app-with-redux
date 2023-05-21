import React from 'react'
import Form from './Form'
import TextList from './TextList'
import Header from './Header'

export default function Dashboard() {
    return (
        <div className='dash'>
            <Header/>
            <Form />
            <TextList />
        </div>
    )
}
