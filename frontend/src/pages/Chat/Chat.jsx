import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import LogoSearch from '../../components/LogoSearch';
import { useSelector } from 'react-redux';
import { userChats } from '../../api/ChatRequest';
import Conversation from '../../components/Conversation';
import NavIcons from '../../components/NavIcons';
import ChatBox from '../../components/ChatBox';
import { io } from "socket.io-client";

const Chat = () => {

  const user = useSelector((state) => state.auth.authData);
  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://bloomio-socket.onrender.com:5000");
    socket.current.emit('add-user', user._id);
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    const fetchUserChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserChats();
  }, []);


  return (
    <div className="Chat">

      {/* Left Side Chat */}
      <div className="Left-side-chat">

        {/* Search */} <LogoSearch />

        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">

            {chats?.map((chat) => (
              <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                <Conversation chatData={chat} currentUser={user._id} />
              </div>
            ))
            }

          </div>

        </div>

      </div>

      {/* Right Side Chat */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div>


        <ChatBox
          chat={currentChat}
          currentUser={user._id}
        // setSendMessage={setSendMessage}
        // receivedMessage={receivedMessage}
        />
      </div>
    </div>

  )
}

export default Chat