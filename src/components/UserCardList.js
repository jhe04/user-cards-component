import UserCard from './UserCard';
import userData from '../data/userData.json';
import { useState } from 'react';

const UserCardList = () => {
  const [data, setData] = useState(userData.conversations);

  const handleClick = (conversationId) => {
    console.log(conversationId);
  };

  return (
    <>
      <ul className="user-card-container">
        {data.map((user) => {
          return (
            <li key={user.sender_id}>
              <UserCard
                name={user.sender_name}
                status={user.sender_online}
                handleClick={() => handleClick(user.conversation_id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserCardList;
