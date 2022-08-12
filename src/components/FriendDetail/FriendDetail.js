import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
       const {friendId} = useParams();

       const [friend, setFriend] = useState({});

       useEffect(() => {
              const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
              fetch(url)
              .then(res => res.json())
              .then(data => setFriend(data)) ;

       }, []);
       return (
              <div>
                     <h2> This is about of my Boundhu....{friendId}</h2>

                     <h2>Name: {friend.name} </h2>
                     <h3>Username: {friend.username}</h3>
                     <h4>Email: {friend.email} </h4>
                     <p><small>Website: {friend.website}</small></p>
                     <p><small>City: {friend.address?.city} </small></p>
              </div>
       );
};

export default FriendDetail;