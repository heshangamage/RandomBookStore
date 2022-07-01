import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";
const Header = () => {
    const [value, setValue] = useState("/books");
    return (
        <div>
        <AppBar position="sticky" sx={{backgroundColor:"#8A2BE2"}}>
            <Toolbar>
            <Typography>
            <MenuBookIcon />
        </Typography>
        <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)} sx={{ml: "auto"}}>
            <Tab LinkComponent={NavLink} value="/add" to="/add" label="Add Book" dataTestId="add-book"/>
            <Tab LinkComponent={NavLink} value="/books" to="/books" label="Books" dataTestId="books"/>
        </Tabs>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;