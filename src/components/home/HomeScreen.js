import React, { useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../auth/AuthContext'

import { Redirect } from 'react-router-dom'

import { YouTubeVideo } from './YouTubeVideo'
import { ImagesGallery } from './ImagesGallery'
import { NavBarHome } from './NavBarHome'
import { Banner } from './Banner'
import { Footer } from './Footer'

export const HomeScreen = ({ history }) => {

    const { stateUser, dispatch } = useContext(AuthContext)
 
    const logOut = () => {

        history.replace('/login')

        const action = {
            type: types.logout
        }

        dispatch(action)

    }

    if (stateUser.logged === false) {
        return <Redirect to="/login" />
    }

    return (
        <div>

            <NavBarHome stateUserName={stateUser.name} logOut={logOut} />

            <Banner />

            <YouTubeVideo />

            <ImagesGallery />

            <Footer />

        </div>
    )

}
