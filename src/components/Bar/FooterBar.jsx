import { Link } from 'react-router-dom';


function FooterBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default FooterBar;
