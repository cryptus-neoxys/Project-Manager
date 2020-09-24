import React from 'react';
import classes from './Navbar.module.css';

import { HomeIcon, BoardIcon, NotificationIcon, UserIcon, InfoIcon, ADGIconColored } from '../UI/Icons/Icons';


const navbar = (props) => {
    return (
        <nav className={classes.Nav} >

            <div className={classes.Navleft}>
                <HomeIcon />
                <BoardIcon />
            </div>

            <div className={classes.NavCenter}>
                <ADGIconColored />
                <div>
                    ADG Project Manager
                </div>
            </div>

            <div className={classes.Navright}>
                <NotificationIcon />
                <InfoIcon />
                <UserIcon />
            </div>

        </nav>
    )
}

export default navbar;