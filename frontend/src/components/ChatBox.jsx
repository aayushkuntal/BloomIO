import React, { useEffect, useState } from 'react'
import { getUser } from '../api/UserRequest';
import Logo from '../assets/logo.png'
import InputEmoji from "react-input-emoji";
import { useRef } from "react";
import './ChatBox.css'
import { addMessages, getMessages } from '../api/MessageRequest';
import { format} from 'timeago.js';
import { useSelector } from 'react-redux';

const ChatBox = ({ chat,setSendMessage, receivedMessage }) => {

  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUser = (useSelector((state) => state.auth.authData))._id;

  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }

  //Data for header
  useEffect(() => {

    const userId = chat?.members?.find((member) => member !== currentUser);

    const fetchUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat != null) fetchUserData();

  }, [chat, currentUser])

  //Fetching data for messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat != null) fetchMessages();
  }),[chat, receivedMessage];

  //Send Message
  const handleSend = async (e) => {
    e.preventDefault()
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    }
    
    const receiverId = chat.members.find((id) => id !== currentUser);

    // send message to socket server
    // setSendMessage({ ...message, receiverId })

    // send message to database
    try {
      const { data } = await addMessages(message);
      setMessages([...messages, data]);
      setNewMessage("");
    }
    catch
    {
      console.log("error")
    }
  }

  const scroll = useRef();
  const imageRef = useRef();
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src={Logo}
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.firstname} {userData?.lastname}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
              {messages.map((message) => (
                  <div key={message._id} ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button" onClick={handleSend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  )
}

export default ChatBox