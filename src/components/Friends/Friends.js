import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
       const [friends, setFriends] = useState([])
       useEffect( () => {
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(data => setFriends(data));

       }, [])

       return (
              <div>
                     <h2>Hello Friends: {friends.length}</h2>
                     <p> Chol ghurte jai</p>
                     {
                            friends.map( friend => <Friend key={friend.id} friend={friend}></Friend>)
                     }
              </div>
              
              // {
              //        friends.map( friend => <Friend key={friend.id} friend={friend}></Friend>)
              //    }
       );
};

export default Friends;