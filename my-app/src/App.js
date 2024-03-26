import { Footer} from './widgets';
import {Navigation} from './widgets/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrintOrdersPage } from './pages/PrintOrdersPage';
import { Provider } from 'react-redux';
import {store} from './store';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <>
      <Navigation />
      <Provider store={store}>
            <BrowserRouter>
                  <Routes>
                    <Route>
                      <Route path="/home" Component={Home} />
                      <Route path="printorders" element={<PrintOrdersPage />} />
                      <Route path="/about" Component={AboutPage} />
                    </Route>
                  </Routes>
            </BrowserRouter>
        </Provider>
      <Footer />
    </>
  );
}

export default App;
