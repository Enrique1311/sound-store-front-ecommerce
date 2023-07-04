import Link from "next/link";
import { styled } from "styled-components";
import { SecButtonStyle } from "./secondaryBtn";

const StyledLink = styled(Link)`
	${SecButtonStyle}
`;

const ButtonLink = (props) => {
	return <StyledLink {...props} />;
};

export default ButtonLink;
