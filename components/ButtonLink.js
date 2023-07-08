import Link from "next/link";
import { styled } from "styled-components";
import { SecButtonStyle } from "./SecundaryBtn";

const StyledLink = styled(Link)`
	${SecButtonStyle}
`;

const ButtonLink = (props) => {
	return <StyledLink {...props} />;
};

export default ButtonLink;
