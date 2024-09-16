import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from '../theme';
import { PropTypes } from 'prop-types';

export const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <MenuItem
        component={<Link to={to} />}
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };

Item.propTypes = {
    title: PropTypes.string.isRequired,      // title phải là chuỗi và bắt buộc
    to: PropTypes.string.isRequired,         // to phải là chuỗi và bắt buộc
    icon: PropTypes.node.isRequired,         // icon là React node (có thể là element, hoặc component)
    selected: PropTypes.string.isRequired,   // selected là chuỗi và bắt buộc
    setSelected: PropTypes.func.isRequired,  // setSelected là hàm và bắt buộc
  };