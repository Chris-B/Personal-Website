import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import {SwipeableDrawer} from "@mui/material";
import Divider from '@mui/material/Divider';

import LinkedIn from "components/icons/LinkedIn";
import GitHub from "components/icons/GitHub";

import 'stylesheets/Navigation.css';

import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const useStyles = makeStyles()((theme) => {
    return {
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
    };
});

function Navigation() {
    const { classes } = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function openDrawer() {
        setOpen(true);
    }

    function closeDrawer() {
        setOpen(false);
    }

    function logAnalyticEvent(event) {
        logEvent(analytics, event)
    }

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
                    <Link class={classes.appBarLink} to="/">
                        <Button className="toolbar-button" color="inherit">Home</Button>
                    </Link>
                    <Link class={classes.appBarLink} to="/portfolio">
                        <Button className="toolbar-button" color="inherit">Portfolio</Button>
                    </Link>
                    <div className={classes.appBarHide} style={{ borderRight: '0.1em solid Gainsboro', paddingRight: '0.5em', height: '20px', }} />
                    <Button style={{ paddingLeft: '1.1em', }} className={classes.appBarHide} color="inherit" target="_blank" href="https://www.linkedin.com/in/chris-barclay/" onClick={()=>logAnalyticEvent('linkedin_click')}>LinkedIn</Button>
                    <Button className={classes.appBarHide} color="inherit" target="_blank" href="https://github.com/Chris-B" onClick={()=>logAnalyticEvent('github_click')}>GitHub</Button>
                    <Button className={classes.appBarHide} color="inherit" href="mailto:chris@chrisbarclay.dev" onClick={()=>logAnalyticEvent('email_click')}>Email</Button>
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
                </List>
                <Divider />
                <List className={classes.list}>
                    <ListItem button key="LinkedIn" component="a" target="_blank" href="https://www.linkedin.com/in/chris-barclay/" onClick={()=>logAnalyticEvent('linkedin_click')}>
                        <ListItemIcon><LinkedIn /></ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </ListItem>
                    <ListItem button key="GitHub" component="a" target="_blank" href="https://github.com/Chris-B" onClick={()=>logAnalyticEvent('github_click')}>
                        <ListItemIcon><GitHub /></ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItem>
                    <ListItem button key="Email" component="a" href="mailto:chris@chrisbarclay.dev" onClick={()=>logAnalyticEvent('email_click')}>
                        <ListItemIcon><EmailIcon /></ListItemIcon>
                        <ListItemText primary="Email" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>
    );
}

export default Navigation;