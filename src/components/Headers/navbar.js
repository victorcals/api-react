import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Navbar() {

    return (
        <div>


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link className="nav-item nav-link" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-item nav-link" to='/registro'>Planos</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-item nav-link" to='/logar'>Logar</Link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link disabled mr-sm-2" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )

}

export default Navbar;