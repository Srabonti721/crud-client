import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <NavLink to={'/'}>HOME</NavLink>
        </div>
    );
};

export default Header;