import { Routes, Route, Navigate } from "react-router-dom"
import { Welcome } from '../components/Welcome/Welcome';


export const PublicRoutes = () =>{

    return (
        <Routes>
              <Route path='*' element={ <Welcome/> } />
        </Routes>
    )
}