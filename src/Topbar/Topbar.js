import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
    <header>
        <nav className={classes.Topbar}>
          <img src="https://www.dualshockers.com/wp-content/uploads/2018/08/Amazon.jpg" alt="Amazon Logo" />
        </nav>
    </header>
    )
}

export default Topbar;