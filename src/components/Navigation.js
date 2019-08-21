import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import {SwipeableDrawer} from "@material-ui/core";

import Divider from '@material-ui/core/Divider';
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";

import './css/Navigation.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: 200,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuSeparator: {
        all: 'unset',
        flexGrow: 1,
    },
    drawer: {
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    appBarLink: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        all: 'unset',
    },
    appBarHide: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

function Navigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function openDrawer() {
        setOpen(true);
    }

    function closeDrawer() {
        setOpen(false);
    }

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <div className={classes.root} class={"top-bar"}>
            <AppBar position="static" className="nav-bar">
                <Toolbar>
                    <IconButton onClick={openDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Christopher Barclay
                    </Typography>
                    {/*<div className={classes.menuSeparator} />*/}
                    <Link class={classes.appBarLink} to="/">
                        <Button className="toolbar-button" color="inherit">Home</Button>
                    </Link>
                    <Link class={classes.appBarLink} to="/portfolio">
                        <Button className="toolbar-button" color="inherit">Portfolio</Button>
                    </Link>
                    {/*<Link class={classes.appBarLink} to="/about">
                        <Button className="toolbar-button" color="inherit">About</Button>
                    </Link>
                    <Link class={classes.appBarLink} to="/contact">
                        <Button className="toolbar-button" color="inherit">Contact</Button>
                    </Link>*/}
                    <div className={classes.appBarHide} style={{ borderRight: '0.1em solid Gainsboro', paddingRight: '0.5em', height: '20px', }} />
                    <Button style={{ paddingLeft: '1.1em', }}
                            className={classes.appBarHide} color="inherit" target="_blank" href="https://www.linkedin.com/in/christopher-b/">LinkedIn</Button>
                    <Button className={classes.appBarHide} color="inherit" target="_blank" href="https://github.com/Chris-Barclay">GitHub</Button>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                className={classes.drawer}
                anchor="left"
                open={open}
                onOpen={openDrawer}
                onClose={closeDrawer}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={closeDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>
                    <Link class="no-style" to="/">
                        <ListItem button key="Home">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link class="no-style" to="/portfolio">
                        <ListItem button key="Portfolio">
                            <ListItemIcon><WorkIcon /></ListItemIcon>
                            <ListItemText primary="Portfolio" />
                        </ListItem>
                    </Link>
                    {/*<Link class="no-style" to="/about">
                        <ListItem button key="About">
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                    <Link class="no-style" to="/contact">
                        <ListItem button key="Contact">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </Link>*/}
                </List>
                <Divider />
                <List className={classes.list}>
                    <ListItem button key="LinkedIn" component="a" target="_blank" href="https://www.linkedin.com/in/christopher-b/">
                        <ListItemIcon><LinkedIn /></ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </ListItem>
                    <ListItem button key="GitHub" component="a" target="_blank" href="https://github.com/Chris-Barclay">
                        <ListItemIcon><GitHub /></ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>
    );
}

export default Navigation;