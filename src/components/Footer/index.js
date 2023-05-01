import { useLocation } from "react-router-dom"
import '../Footer/style.css';
function Footer() {
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
}

export default Footer;