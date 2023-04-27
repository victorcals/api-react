import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NotFound from './nonexistent';
import Navbar from '../../components/Headers/navbar';

function nonexistent() {

    return (
        < div class="container" >
            <h1>Pagina não encontrada</h1>
        </div >
    )
}

export default nonexistent;