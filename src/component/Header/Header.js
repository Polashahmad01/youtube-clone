import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import './Header.css';

const Header = () => {
    const [ inputSearch, setInputSearch ] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__leftIcon" />
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                        alt="youtube"
                        className="header__logo"
                    />
                </Link>
            </div>
            <div className="header__center">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={inputSearch} 
                    onChange={e => setInputSearch(e.target.value)} 
                />
                <Link to={`/search/${inputSearch}`} className="header__linkSearchIcon">
                    <SearchIcon className="header__searchIcon" />
                </Link>
            </div>
            <div className="header__right">
                <VideoCallIcon  
                    className="header__rightIcon"
                />
                <AppsIcon 
                    className="header__rightIcon" 
                />
                <NotificationsIcon 
                    className="header__rightIcon" 
                />
                <Avatar 
                    src="https://avatars1.githubusercontent.com/u/58633156?s=460&u=3b2f63460ae24c6eba304e81d73546a4697209d3&v=4"
                    alt="polashahmad01" 
                    className="header__rightIcon"
                />
            </div>
        </div>
    )
}

export default Header
