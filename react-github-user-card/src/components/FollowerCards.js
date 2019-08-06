import React from 'react';
import 'semantic-ui-react';

const FollowerCards = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div class="ui link cards">
    {props.data.map(follower => {
      return ( 
      <div class="card">
    <div class="image">
      <img src={follower.avatar_url}/>
    </div>
      <div class="content"> 
      <div class="header">{follower.login}</div>
     </div>
      </div>
      )})}
      </div>
  );
};

export default FollowerCards;


