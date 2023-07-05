import Link from "next/link";
import React, { useContext } from "react";
import { styled } from "styled-components";
import Center from "./Center";
import { my_orange } from "../lib/colors";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header`
	background-color: ${my_orange};
`;
const Logo = styled(Link)`
	color: white;
	text-decoration: none;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
`;
const StyledNav = styled.nav`
	display: flex;
	gap: 20px;
`;
const NavLinks = styled(Link)`
	color: white;
	text-decoration: none;
`;

const Header = () => {
	const { cartProducts } = useContext(CartContext);

	return (
		<StyledHeader>
			<Center>
				{" "}
				<Wrapper>
					{" "}
					<Logo href={"/"}>Sound Store</Logo>
					<StyledNav>
						{" "}
						<NavLinks href={"/"}>Inicio</NavLinks>
						<NavLinks href={"/products"}>Productos</NavLinks>
						<NavLinks href={"/categories"}>Categorías</NavLinks>
						<NavLinks href={"/my-account"}>Mi cuenta</NavLinks>
						<NavLinks href={"/cart"}>Cart({cartProducts.length})</NavLinks>
					</StyledNav>
				</Wrapper>
			</Center>
		</StyledHeader>
	);
};

export default Header;
