import React, { Component } from 'react';

import { Container, Wrap, Heading, Grid } from './listing-page.style';
import ProductTile from '../../components/ProductCard/ProductCard';

import { Query } from '@apollo/client/react/components';
import { FETCH_CATEGORIES, FETCH_CATEGORY } from '../../graphql/queries';
import Select from '../../components/Select';

class Products extends Component {
  render() {
    const { categoryName } = this.props;
    return (
      <Query query={FETCH_CATEGORY} variables={{ categoryName: categoryName }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>; // TODO beautify this
          if (error) return <p>Error :(</p>; // TODO beautify this

          return (
            // opted for the slice method since the graphql ...
            // ... query doesn't support pagination
            data.category.products
              .slice(0, 6)
              .map(({ id, ...rest }) => <ProductTile key={id} data={rest} />)
          );
        }}
      </Query>
    );
  }
}

class ListingPage extends Component {
  render() {
    return (
      <Container>
        <Wrap>
          <Heading>
            <Query query={FETCH_CATEGORIES}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>; // TODO beautify this
                if (error) return <p>Error :(</p>; // TODO beautify this

                // fetch all categories and map them to ...
                // ... the Select component's value format
                const categories = data.categories.map(category => {
                  return { displayValue: category.name };
                });
                return (
                  <Select values={categories} arrowW="18px" arrowML="20px" />
                );
              }}
            </Query>
          </Heading>
          <Grid>
            <Products />
          </Grid>
        </Wrap>
      </Container>
    );
  }
}

export default ListingPage;
