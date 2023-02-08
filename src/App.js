import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";
import Filepond from "./components/pages/Filepond";
import Form from "./components/pages/Form";


function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="filepond" element={<Filepond />} />
                    <Route path="registerForm" element={<Form />}/>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;