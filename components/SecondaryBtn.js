import { css, styled } from "styled-components";
import { my_lightgrey } from "../lib/colors";

export const SecButtonStyle = css`
	background-color: transparent;
	border: 3px solid white;
	color: white;
	padding: 5px 25px;
	border-radius: 6px;
	width: fit-content;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	text-decoration: none;
	font-family: "roboto", "Helvetica Neue", "Helvetica",
	&:hover {
		background-color: ${my_lightgrey};
		color: black;
	}
`;

const StyledButton = styled.button`
	${SecButtonStyle}
`;

const SecondaryBtn = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default SecondaryBtn;
