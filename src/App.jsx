import {BrowserRouter} from "react-router-dom";
import AppRouter from './routers/index.jsx'
import Header from "./pages/base/header/Header.jsx";
import {Provider} from "react-redux";

import {store} from "./store/store.js";

function App() {

  return (

    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <AppRouter/>
        </BrowserRouter>
    </Provider>
  )
}

export default App
