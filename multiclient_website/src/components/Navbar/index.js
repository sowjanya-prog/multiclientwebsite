import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/Register" activeStyle>
			Register
		</NavLink>
		<NavLink to="/sign-in" activeStyle>
			Sign in
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
