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

type Anchor = 'bottom'


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

    return (
        <>
            <div className='xl:w-[12%] lg:w-[16%] md:w-[22%] h-[100%] md:flex hidden relative bg-[#1c5285]'>
                <div className='w-[100%] h-[90%] absolute left-0 bottom-4 rounded-[20px] flex flex-col justify-between'>
                    <div className="w-[100%] pr-[10px] flex flex-row">
                        <ul className="w-[10px] h-full flex flex-col gap-[15px]">
                            <li className='w-[100%] h-[28px] rounded-r-[6px] bg-[#fff]'></li>
                            <li className='w-[100%] h-[28px] rounded-r-[6px] bg-[#fff]'></li>
                            <li className='w-[100%] h-[28px] rounded-r-[6px] bg-[#fff]'></li>
                            <li className='w-[100%] h-[28px] rounded-r-[6px] bg-[#fff]'></li>
                            <li className='w-[100%] h-[28px] rounded-r-[6px] bg-[#fff]'></li>
                        </ul>
                        <ul className="text-[18px] font-normal pl-[10px] flex flex-col gap-4 text-[#fff] shadow-text">
                            <li className="flex gap-3 cursor-pointer"><InsertEmoticonIcon /><p className='hover:scale-110 ease-in-out duration-300'>Profile</p></li>
                            <li className="flex gap-3 cursor-pointer"><DvrIcon /><p className='hover:scale-110 ease-in-out duration-300'>My Panel</p></li>
                            <li className="flex gap-3 cursor-pointer"><AutoStoriesIcon /><p className='hover:scale-110 ease-in-out duration-300'>Books</p></li>
                            <li className="flex gap-3 cursor-pointer"><PlaylistAddCheckIcon /><p className='hover:scale-110 ease-in-out duration-300'>Priority</p></li>
                            <li className="flex gap-3 cursor-pointer"><ErrorOutlineIcon /><p className='hover:scale-110 ease-in-out duration-300'>Tasks</p></li>
                        </ul>
                    </div>
                    <div className="w-[100%] pl-[20px] pr-[10px] text-[#fff] flex justify-between">
                        <SettingsIcon className="text-[28px] animate-spin cursor-pointer" />
                        <ExitToAppIcon className='text-[28px] cursor-pointer' />
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