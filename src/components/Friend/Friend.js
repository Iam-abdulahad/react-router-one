import React from 'react';

const Friend = (props) => {
       const {name, username, id} = props.friend
       return (
              <div>
                    <h2>Name: {name}</h2> 
                    <button>{username} id:{id} </button>
              </div>
       );
};

export default Friend;