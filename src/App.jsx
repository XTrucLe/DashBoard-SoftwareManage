import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { DefaultLayout } from './layout/Layout'
import { routers } from './router/Routers'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {routers.map(({ path, element, layout }, index) => {
              const Layout = layout || DefaultLayout
              return (<Route key={index} path={path} element={<Layout>{element}</Layout>} />)
            })}
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
