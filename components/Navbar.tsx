import Link from 'next/link';
import { FcAbout } from "react-icons/fc";
import { PiVideoFill } from "react-icons/pi"
import { AiFillCaretDown } from "react-icons/ai"
import { RxVideo } from 'react-icons/rx';

const Navbar = () => {
  const myFunction = () => {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/About" className="logoN"><FcAbout /><div className="logoA">About us</div></Link>
      </p>
      <div className='navbar-logo-container'>
        <div className='logo-h'>
        <RxVideo className='how-logo' /> <div className="dropdown">
  <div className="dropbtn-h"><button onClick={myFunction} className="dropbtn">How to buy</button><AiFillCaretDown className="dropbtn-b" /></div>
  <div id="myDropdown" className="dropdown-content">
    <Link href="/Guide">Men Kameez</Link>
    <Link href="/Guide">Gand Afghani</Link>
    <Link href="/Guide">Party Dress</Link>
  </div>
</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
