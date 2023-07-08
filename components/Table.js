import { styled } from "styled-components";
import { my_grey, my_lightgrey, my_orange } from "../lib/colors";

const StyledTable = styled.table`
	width: 100%;
	th {
		text-align: left;
		color: ${my_orange};
		font-weight: normal;
	}
	td {
		border-top: 1px solid ${my_lightgrey};
	}
`;

const Table = (props) => {
	return <StyledTable {...props} />;
};

export default Table;
