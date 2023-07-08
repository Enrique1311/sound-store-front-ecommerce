import { styled } from "styled-components";
import { my_blue } from "../lib/colors";

const StyledPrimButton = styled.button`
	background-color: ${my_blue};
	color: white;
	border: solid 3px ${my_blue};
	padding: 5px 20px;
	border-radius: 6px;
	width: fit-content;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	&:hover {
		background-color: transparent;
		color: ${my_blue};
	}
`;

const PrimaryBtn = ({ children, ...rest }) => {
	return <StyledPrimButton {...rest}>{children}</StyledPrimButton>;
};

export default PrimaryBtn;
