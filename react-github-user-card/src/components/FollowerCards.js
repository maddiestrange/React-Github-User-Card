import React from 'react';

const FollowerCards = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div>
    {props.data.map(follower => {
      return ( 
      <>
      <h2>{follower.login}</h2>
      <img width='200' src={follower.avatar_url}/></>
      )})}
      </div>
  );
};

export default FollowerCards;


