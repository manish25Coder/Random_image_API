import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Homepage/HomePage"
import { SinglePage } from "../SinglePage/SinglePage"







export const CustomRoute = () => {
    return (
        <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/:id" element={<SinglePage/>}/>
               

        </Routes>
    )
}