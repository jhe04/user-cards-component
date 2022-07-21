const UserCard = ({ name, status, handleClick }) => {
  const avatar = name.split('')[0];

  return (
    <button className="user-card" onClick={handleClick}>
      <div className="user-card-avatar">
        <h3 className="user-card-avatar-picture">{avatar}</h3>
        <div className={`user-card-avatar-status ${status? 'online' : 'offline'}`}>
        </div>
      </div>
      <h2>{name}</h2>
    </button>
  );
};

export default UserCard;
