import React from 'react'

export const NavBarHome = ({ stateUserName, logOut }) => {

    return (
        <nav className="navbar-home">

            <h4 className="navBar-home__title">Academo</h4>

            <div className="navBar-home__logout" >
                <span className="navbar-home__user">Bienvenido {stateUserName}</span>
                <button className="btn btn-primary" onClick={logOut}>Log Out</button>
            </div>

        </nav>
    )
    
}
