import React from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import "./Header.css";

const Header = () => {

    const onClickLogout = () => {

    };
    return (
        <div className="root">
            <Container maxWidth="lg">
                <div className="inner">
                    <Link className="logo" to="/">
                        <div>THESHY BLOG</div>                
                    </Link>
                    <div className="buttons">
                        <>
                            <Link to="/add-post">
                                <Button variant="contained">Create post</Button>
                            </Link>
                        </>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Header;