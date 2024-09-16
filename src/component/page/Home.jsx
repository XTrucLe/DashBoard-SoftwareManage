import { Box, useTheme } from "@mui/material"
import Header from "../Header/Header"
import StatBox from "../StartBox"
import { tokens } from "../../theme";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Feedback } from "@mui/icons-material";
import RevenueChart from "../data/LineChart";


export const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const sumaryIconStyle = { color: colors.greenAccent[600], fontSize: "26px" }
  const valueSummary = [
    { title: "Users", subtitle: "Total users", increase: "+5%", icon: <PersonIcon sx={sumaryIconStyle}/> },
    { title: "Sales", subtitle: "Total sales", increase: "+10%", icon: <ShoppingCartIcon sx={sumaryIconStyle}/> },
    { title: "Revenue", subtitle: "Total revenue", increase: "+15%", icon: <AttachMoneyIcon sx={sumaryIconStyle}/> },
    { title: "Feedback", subtitle: "Positive feedback", increase: "+8%", icon: <Feedback sx={sumaryIconStyle}/> }
  ]
  return (
    <Box sx={{ m: "20px" }}>
      {/* head of page */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      {/* Summary of the dashboard */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(auto-fit, minmax(200px, 1fr))'
        gridAutoRows="140px"
        gap='36px'
        width='100%'
        height='auto'
      >
        {
          valueSummary.map((item, index) => (
            <Box
              key={index}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={item.title}
                subtitle={item.subtitle}
                increase={item.increase}
                icon={item.icon}
              />
            </Box>
          ))
        }
      </Box>
      {/* Chart for statistical */}
      <Box>
        <RevenueChart/>
      </Box>
    </Box>

  )
}
