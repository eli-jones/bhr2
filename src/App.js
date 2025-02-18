import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


import Root from './pages/root/root';
import Home from './pages/home/home';
import About from './pages/about/about';
import Pets from './pages/adopt/pets/pets';
import Process from './pages/adopt/process/process';
import Help from './pages/help/help';
import Details from './pages/adopt/details/details';
import NotFound from './pages/notFound/notFound';

const appRouter = createBrowserRouter (
    createRoutesFromElements(
        <Route path='/' element={ <Root /> } >
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='pets' element={ <Pets /> } />
            <Route path='process' element={ <Process /> } />
            <Route path='help' element={ <Help /> } />
            <Route path='pets/:petId' element={ <Details /> } />
            <Route path='*' element={ <NotFound /> } />
        </Route >
    )
);

function App() {
  return (
    <RouterProvider router={appRouter} />
   )
};

export default App;
