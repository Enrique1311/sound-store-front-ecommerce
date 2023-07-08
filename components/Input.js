import { styled } from "styled-components";
import { my_medium_grey } from "../lib/colors";

const StyledInput = styled.input`
	width: 100%;
	padding: 5px;
	border-radius: 5px;
	margin-bottom: 5px;
	border: 2px solid ${my_medium_grey};
	box-sizing: border-box;
`;

const Input = (props) => {
	return <StyledInput {...props} />;
};

export default Input;
