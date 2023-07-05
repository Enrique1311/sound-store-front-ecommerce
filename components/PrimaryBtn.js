import { css, styled } from "styled-components";
import { my_blue } from "../lib/colors";

export const PrimButtonStyle = css`
	background-color: ${my_blue};
	color: white;
	border: solid 3px ${my_blue};
	padding: 5px 25px;
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

const StyledButton = styled.button`
	${PrimButtonStyle}
`;

const PrimaryBtn = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default PrimaryBtn;
