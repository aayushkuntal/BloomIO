import React from 'react'
import './Chat.css'
import LogoSearch from '../../components/LogoSearch';

const Chat = () => {
  return (
    <div className="Chat">

      {/* Left Side Chat */}
      <div className="Left-side-chat">

        {/* Search */} <LogoSearch />

        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            Conversations
          </div>

        </div>

      </div>

      {/* Right Side Chat */}
      <div className="Right-side-chat">
        <h2>Chat</h2>
      </div>


    </div>
  )
}

export default Chat