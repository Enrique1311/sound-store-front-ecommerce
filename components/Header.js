import Link from "next/link";
import React, { useContext } from "react";
import { styled } from "styled-components";
import Center from "./Center";
import { my_blue, my_orange } from "../lib/colors";
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
const CartIcon = styled.div`
	position: relative;
	width: 30px;
	p {
		background-color: ${my_blue};
		width: 4px;
		height: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
		padding: 0.5rem;
		border-radius: 50%;
		position: absolute;
		top: -60%;
		right: -30%;
	}
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
						<NavLinks href={"/cart"}>
							<CartIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-12 h-12"
								>
									<path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
								</svg>
								<p>{cartProducts.length}</p>
							</CartIcon>
						</NavLinks>
					</StyledNav>
				</Wrapper>
			</Center>
		</StyledHeader>
	);
};

export default Header;
