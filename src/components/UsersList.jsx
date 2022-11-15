import axios from 'axios';
import React from 'react';


const UsersList = ({ counts,secs,getMovies }) => {

    const deleteName = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getMovies());
    }

    return (

        <div>
            {
                counts.map(count => (
                    <div className="list">

                    <li className='item2' key={count.id}>
                        <h1>{count.first_name}</h1>
                        <h2>{count.last_name}</h2>
                        <p>{count.email}</p>
                        <p>{count.password}</p>
                        <p><i class='bx bxs-gift' ></i>{count.birthday}</p>
                      <button className='delete' onClick={() => deleteName(count.id)}><i class='bx bxs-trash-alt'></i></button>
                        <button className='penc' onClick={() => secs(count)}><i class='bx bxs-pencil'></i></button>
                    </li>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;