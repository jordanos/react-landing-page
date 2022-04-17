import React from 'react';
import NavUi from './NavUi';

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'homeContainer' }, // etc.
];

// const Nav = () => {
//   const [activeNavLinkId, setActiveNavLinkId] = useState('');

//   return (
//     <nav>
//       {navLinks.map(({ navLinkId, scrollToId }) => (
//         <NavLink
//           navLinkId={navLinkId}
//           scrollToId={scrollToId}
//           activeNavLinkId={activeNavLinkId}
//           setActiveNavLinkId={setActiveNavLinkId}
//         />
//       ))}
//     </nav>
//   );
// };
const Nav = () => {
  return <NavUi />;
};

export default Nav;
