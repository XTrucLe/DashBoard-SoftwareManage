import { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge, IconButton, Tooltip, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { BellOutlined } from '@ant-design/icons';
import { SearchBox } from './SearchBox';
import { Image } from '@mui/icons-material';

export const TopHeader = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const [NoAlert] = useState(0)
    // Quản lý trạng thái mở/đóng của menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex justify-between items-center shadow-xl w-full h-16 px-4" style={{ backgroundColor: colors.primary[400] }}>
            <Image>Icon cho trang chủ</Image>
            <SearchBox />

            <div className='flex gap-3'>
                <Tooltip title="Dark/Light Mode">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                </Tooltip>


                <Tooltip title="Notification">
                    <Badge badgeContent={NoAlert} color="primary">
                        <IconButton>
                            <BellOutlined />
                        </IconButton>
                    </Badge>
                </Tooltip>


                <Avatar
                    id="basic-avatar"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}  // Khi nhấn vào avatar, menu sẽ mở
                    sx={{ cursor: 'pointer' }}
                >
                    H
                </Avatar>
                {/* Menu account of user Admin when click on Avatar*/}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}  // Đóng menu khi nhấn ra ngoài
                    MenuListProps={{
                        'aria-labelledby': 'basic-avatar',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
}
