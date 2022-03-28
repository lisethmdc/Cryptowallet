import React from 'react';
import { useTheme, useUpdateTheme } from '../../context/ModeContext';
import './styles.scss';

import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from 'react-router-dom';

export default function Header() {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

/*     const theme = {
        backgroundColor: darkTheme ? '#161a1d' : '#293241'
    } */

  return (
    <div className='header'>
        <Link to='/'>
            <li>Home</li>
        </Link>

        <Link to='login'>
            <li>Login</li>
        </Link>

        <Link to='wallet'>
            <li>Wallet</li>
        </Link>

        <div className='icons' onClick={toggleTheme}>
            {darkTheme ? (
                <LightModeIcon fontSize='small' sx={{ color: "white" }} />
            ) : (
                <ModeNightIcon fontSize='small' sx={{ color: "white" }} />
            )}
        </div>
    </div>
  )
}
