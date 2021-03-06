import React from 'react'
import './messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../../message/Message'

function Messages({messages,current ,deleteMessage}) {
    
    return (
        <ScrollToBottom>
            {messages.map((message, index) => <div key={ index } onClick={(event)=>deleteMessage(message,event)}><Message  message ={ message } current={current} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages
