import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link className="nav-item nav-link" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-item nav-link" to='/logar'>Logar</Link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link disabled mr-sm-2" href="#">Disabled</a>
                    </li>


                </ul>
            </div>
            <div>
                <Link
                    className="nav-link" to='/registro'>
                    <button className='nav' type="button" class="btn btn-dark"> Cadastrar</button>
                </Link>
            </div>
        </nav>

    )

}

export default Navbar;