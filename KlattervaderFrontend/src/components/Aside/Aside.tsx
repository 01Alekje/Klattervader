import { NavLink } from 'react-router-dom';
import { AsideStyle } from './styled';
import '../../styles/App.css';

import podium from '../../img/podium.svg';
import map from '../../img/map.svg';
import about from '../../img/about.svg';

export default function Aside() {
  return (
    <AsideStyle>
      <NavLink className="navlink" exact to="/"><img style={{ width: "50%" }} src={podium} alt=""/></NavLink>
      <NavLink className="navlink" to="/map"><img style={{ width: "50%" }} src={map} alt=""/></NavLink>
      <NavLink className="navlink" to="/about"><img style={{ width: "50%" }} src={about} alt=""/></NavLink>
    </AsideStyle>
  );
}