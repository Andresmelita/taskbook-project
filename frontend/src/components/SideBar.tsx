'use client'
import { Button, SwipeableDrawer } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DvrIcon from '@mui/icons-material/Dvr';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { successAlert, successLogout } from '../../services/alertServicies';

type Anchor = 'bottom'

function Icon({ id, open }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}


const SideBar = () => {

    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const [open, setOpen] = useState(0);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const handleExit = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('email')
        setTimeout(function () {
            window.location.href = '/';
        }, 2200);
        successLogout()
    }




    return (
        <>
            <div className='xl:w-[12%] lg:w-[16%] md:w-[22%] h-[100%] md:flex hidden relative bg-[#1c5285]'>
                <div className='w-[100%] h-[90%] absolute left-0 bottom-4 rounded-[20px] flex flex-col justify-between'>
                    <div className="w-[100%] flex flex-row">
                        <ul className="font-normal w-[100%] flex flex-col text-[#fff] shadow-text">
                            <li className="flex gap-3 py-[10px] ease-in-out duration-400 cursor-pointer rounded-r-[8px] items-center hover:bg-[#1c5285] hover:shadow-card overflow-hidden"><div className='w-[6px] h-[28px] rounded-r-[6px] bg-[#fff]'></div><InsertEmoticonIcon /><p className='py-[3px] hover:scale-110 ease-in-out duration-300 text-[16px] '>Profile</p></li>
                            <li className="flex gap-3 py-[10px] ease-in-out duration-400 cursor-pointer rounded-r-[8px] duration-300 hover:bg-[#1c5285] hover:shadow-card overflow-hidden"><div className='w-[6px] h-[28px] rounded-r-[6px] bg-[#fff]'></div><DvrIcon /><p className='hover:scale-110 ease-in-out duration-300 text-[16px] '>My Panel</p></li>
                            <li className="flex gap-3 py-[10px] pr-[10px] ease-in-out duration-400 cursor-pointer rounded-r-[8px] duration-300 hover:bg-[#1c5285] hover:shadow-card overflow-hidden"><div className='w-[6px] h-[28px] rounded-r-[6px] bg-[#fff]'></div><AutoStoriesIcon />
                                <Fragment>
                                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                                        <AccordionHeader onClick={() => handleOpen(1)} className='border-transparent'>
                                            <div className="font-normal text-[16px] ">
                                                Book
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <div className='text-[#FFF] pt-[6px] flex flex-col gap-2'>
                                                <div>Cuaderno azul</div>
                                                <div>Cuaderno rojo</div>
                                                <div>Cuaderno verde</div>
                                            </div>
                                        </AccordionBody>
                                    </Accordion>
                                </Fragment>
                            </li>
                            <li className="flex gap-3 py-[10px] duration-400 rounded-r-[8px] cursor-pointer ease-in-out duration-300 hover:bg-[#1c5285] hover:shadow-card overflow-hidden"><div className='w-[6px] h-[28px] rounded-r-[6px] bg-[#fff]'></div><PlaylistAddCheckIcon /><p className='hover:scale-110 ease-in-out duration-300 text-[16px] '>Priority</p></li>
                            <li className="flex gap-3 py-[10px] duration-400 rounded-r-[8px] cursor-pointer ease-in-out duration-300 hover:bg-[#1c5285] hover:shadow-card overflow-hidden"><div className='w-[6px] h-[28px] rounded-r-[6px] bg-[#fff]'></div><ErrorOutlineIcon /><p className='hover:scale-110 ease-in-out duration-300 text-[16px] '>Tasks</p></li>
                        </ul>
                    </div>
                    <div className="w-[100%] pl-[20px] pr-[10px] text-[#fff] flex justify-between items-end">
                        <div>
                            <SettingsIcon className="text-[28px] animate-spin cursor-pointer" />
                        </div>

                        <div className='hover:text-[32px] ease-in-out duration-300 '>
                            <ExitToAppIcon className='text-[28px] cursor-pointer' onClick={handleExit} />
                            </div>

                    </div>
                </div>
            </div>
            <div className='md:hidden flex z-[100]'>
                {(['bottom'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="fixed top-[76px] right-[20px] bg-[#1c5285] text-[#fff] rounded-[20px] aspect-square flex justify-center items-center w-[50px]">
                            <Button onClick={toggleDrawer(anchor, true)}>
                                <ListIcon className='text-[#fff] text-[34px]' />
                            </Button>
                        </div>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default SideBar