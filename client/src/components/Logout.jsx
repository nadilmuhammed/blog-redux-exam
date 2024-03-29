import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/UserSlice';

const Logout = () => {
    
    const user = useSelector(selectUser);
        
    const dispatch = useDispatch();
    const handleLogout = (e) =>{
        e.preventDefault();

        dispatch(logout());
    }


  return (
    <div>
        <h1>
            Welcome <span className='user_name'>{user.name}</span>
        </h1>{" "}
        <button className='logout_btn' onClick={(e) => handleLogout(e)}>Logout</button>
        <div>
            <a href='/home'><button>continue</button></a>
        </div>
    </div>
  )
}

export default Logout