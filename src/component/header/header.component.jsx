import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../card-icon/card-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contactus">
				CONTACT US
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT<span>( {auth.currentUser.email} )</span>
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
