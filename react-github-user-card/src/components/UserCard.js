import React from 'react';

const UserCard = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div>
      <h1>My github</h1>
        <h2>{props.name}-{props.login}</h2>
        <img width="200" src={props.img} alt="avatar img" />
      </div>
  );
};

export default UserCard;