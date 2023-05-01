import { useLocation } from "react-router-dom"
import '../Footer/style.css';
function Footer() {

  return (
    <footer className="Container bg-light text-center text-lg-start">

      <div className="text-center p-3">
        © 2023:
        <a href='https://github.com/victorcals/api-react' className="text-dark"> Desenvolvido por: Guilherme e Victor Cals</a>
      </div>

    </footer>
  )

}

export default Footer;