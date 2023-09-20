import { Routes, Route, Navigate } from "react-router-dom"
import { Welcome } from '../components/Welcome/Welcome';
import { Admin } from '../components/Admin/Admin';

export const PublicRoutes = () =>{

    return (
        <Routes>
              <Route path='teatrify' element={ <Welcome/> } />
              <Route path='admin' element={ <Admin/> } />
        </Routes>
    )
}