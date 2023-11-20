import React from 'react';
import './adminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="App">

        <header id='header'>
                {/* add a unique header (not the same as homepage) */}
                <h1 id='name'>Public Kids Books</h1>
                <h2 id='title'>Admin Dashboard</h2>
                <h2 id='signIn'>Sign In</h2>
                <h2 id='signOut'>Sign Out</h2>
                <h2 id='help'>Help</h2>
        </header>
                            {/* what does the admin dashboard: 
                                    - Allow admin to add books to the database
                                    - Allow admin to delete books from the database
                                    - Allow admin to make user accounts
                                    - Allow admin to delete user accounts
                                    - Give admin some user statistics 
                                    - Allow admin to edit books in the database (later sprint)
                            */}
                            <p id='adminWelcome'>Welcome Admin</p> 
                            {/* add admin name here */}
        <div className='container'>
          
                            <div id='Books'>
                                    <p className='titles'>Books</p>
                                    <button className='btn'>Add Book</button>
                                    <br />
                                    <button className='btn'>Delete Book</button>
                                    <br />
                                    <button className='btn'>Edit Book</button>
        
                            </div>

                            <div id='Users'>
                                    <p className='titles'>Users</p>
                                    <button className='btn'>Add User</button>
                                    <br />
                                    <button className='btn'>Delete User</button>
                            </div>

                            <div id='Statistics'>
                                    <p className='titles'>Statistics</p>
                                    <p className='stats'>Number of Books: #</p>
                                    <p className='stats'>Number of Users: #</p>
                                    <p className='stats'>Number of Authors: #</p>
                                    <p className='stats'>Books Read Today: #</p>
                            </div>
        </div>
        </div>
    );
    }
  
  
  export default AdminDashboard;