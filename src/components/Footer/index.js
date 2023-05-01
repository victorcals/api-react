import { useLocation } from "react-router-dom"
import '../Footer/style.css';
function Footer() {
<<<<<<< HEAD
  const location = useLocation();
  return (
    <footer class=" text-lg-start bg-light text-muted">
      <div class="row">
        <div class="col">
        <div class="text-center p-3">
          © 2023:
          <a class="text-dark"> Desenvolvido por: Guilherme e Cals</a>
        </div>      
        </div>
      </div>
    </footer>
  );
=======

  return (
    <footer className='Container' class="bg-light text-center text-lg-start">

      <div class="text-center p-3">
        © 2023:
        <a href='https://github.com/victorcals/api-react' class="text-dark"> Desenvolvido por: Guilherme e Victor Cals</a>
      </div>

    </footer>
  )

>>>>>>> 639e3262daaabc5068ef165de40250e26a6428d4
}

export default Footer;