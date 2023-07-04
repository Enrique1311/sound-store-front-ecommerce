import { css, styled } from "styled-components";
import { my_lightgrey } from "../lib/colors";

export const SecButtonStyle = css`
	background-color: transparent;
	border: 2px solid white;
	color: white;
	padding: 10px 25px;
	border-radius: 6px;
	width: fit-content;
	cursor: pointer;
	font-size: 1.1rem;
	font-weight: bold;
	text-decoration: none;
	&:hover {
		background-color: ${my_lightgrey};
		color: black;
	}
`;

const StyledButton = styled.button`
	${SecButtonStyle}
`;

const SecondaryBtn = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default SecondaryBtn;
