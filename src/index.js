import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";

//graphql
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";

//graphql-backend link
const httpLink = createHttpLink({
	uri: "https://crwn-clothing.com",
});

//graphql-cache
const cache = new InMemoryCache();

//graphql-client
const client = new ApolloClient({
	link: httpLink,
	cache,
});

//graphql-client-data
client.writeData({
	data: {
		cartHidden: true,
	},
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
