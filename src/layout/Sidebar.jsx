import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton } from '@mui/material';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';
import { Item } from './ItemSidebar';

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // Render user profile info
  const renderUserProfile = () => (
    !isCollapsed && (
      <Box mb="25px" textAlign="center">

      </Box>
    )
  );

  return (
    <Box
      sx={{
        '& .ps-sidebar-container': {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        '& .ps-menu-icon': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-button': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-menu-button:hover': {
          color: '#868dfb !important',
        },
        '& .ps-menu-button.ps-active': {
          color: '#6870fa !important',
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        className='h-screen max-w-full ' 
        >
        <Menu iconShape="square">
          {/* LOGO AND TOGGLE ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {renderUserProfile()}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};


export default SideBar;
