import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../components/CartContext";

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        scroll: smooth;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
    }
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</>
	);
}

export default MyApp;
