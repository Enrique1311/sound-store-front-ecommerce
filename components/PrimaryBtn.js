import { css, styled } from "styled-components";
import { my_blue } from "../lib/colors";

export const PrimButtonStyle = css`
	background-color: ${my_blue};
	color: white;
	border: none;
	padding: 10px 25px;
	border-radius: 6px;
	width: fit-content;
	cursor: pointer;
	font-size: 1.1rem;
	font-weight: bold;
	&:hover {
		box-shadow: 0 0 10px 0 ${my_blue};
	}
`;

const StyledButton = styled.button`
	${PrimButtonStyle}
`;

const PrimaryBtn = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default PrimaryBtn;
