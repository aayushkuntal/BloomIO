import React, { useEffect, useState } from 'react'
import { getUser } from '../api/UserRequest';

const Conversation = ({ chatData, currentUser }) => {

  const [userData, setuserData] = useState(null)
  useEffect(() => {

    const friendId = chatData.members.find((m) => m !== currentUser);

    const getUserData = async () => {
      try {
        const { data } = await getUser(friendId);
        setuserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  return (
    <>
      <div className="follower conversation">
        <div className='holder'>
          {/* {online && <div className="online-dot"></div>} */}
          <img
            src={userData?.profilePicture || "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: '0.8rem' }}>
            <span>{userData?.firstname} {userData?.lastname}</span>
            {/* <span style={{ color: online ? "#51e200" : "" }}>{online ? "Online" : "Offline"}</span> */}
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation