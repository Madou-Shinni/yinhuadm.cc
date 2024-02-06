import {BrowserRouter} from "react-router-dom";
import AppRouter from './routers/index.jsx'
import Header from "./pages/base/header/Header.jsx";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
