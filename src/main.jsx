// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider,createTheme} from "@mui/material";

// 创建 MUI 主题
const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  // </React.StrictMode>,
)
