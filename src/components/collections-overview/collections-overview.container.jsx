import React from "react";

//components
import CollectionsOverview from "./collections-overview.component";
import Spinner from "../spinner/spinner.component";

//graphql
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_COLLECTIONS = gql`
	{
		collections {
			id
			title
			items {
				id
				name
				price
				imageUrl
			}
		}
	}
`;

const CollectionsOverviewContainer = () => {
	return (
		<Query query={GET_COLLECTIONS}>
			{({ loading, data }) => {
				if (loading) return <Spinner />;
				return <CollectionsOverview collections={data.collections} />;
			}}
		</Query>
	);
};

export default CollectionsOverviewContainer;
