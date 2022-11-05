import React, { Component } from 'react';

import { Container, Wrap, Heading, Grid } from './listing-page.style';

import { graphql } from '@apollo/client/react/hoc';
import { FETCH_CATEGORY } from '../../graphql/queries';
import ProductCard from '../../components/ProductCard';
import ErrorBoundary from '../../components/ErrorBoundary';
import { connect } from 'react-redux';

class ListingPageComponent extends Component {
  // refetch category list with new query
  componentDidUpdate() {
    this.props.data.refetch({ categoryName: this.props.category });
  }

  // set state to selected category
  setCategory = category => {
    this.setState({ category: category });
  };

  render() {
    const { loading, error, category } = this.props.data;
    if (loading)
      return (
        <Container>
          <Wrap>
            <h1>Loading...</h1>
          </Wrap>
        </Container>
      );
    if (error)
      return (
        <Container>
          <Wrap>
            <h1>Error:(</h1>
          </Wrap>
        </Container>
      );

    const { products } = category;

    return (
      <Container>
        <Wrap>
          <Heading>{this.props.category}</Heading>
          <Grid>
            {products.map(product => (
              <ErrorBoundary key={product.id}>
                <ProductCard product={product} />
              </ErrorBoundary>
            ))}
          </Grid>
        </Wrap>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category.listingCategory,
  };
};

// connect to redux
const withListingPageComponent = connect(mapStateToProps)(ListingPageComponent);

// Create enhancer function for apollo HOC
const withCategoryQuery = graphql(FETCH_CATEGORY, {
  options: () => ({ variables: { categoryName: '' } }),
});

// Enhance component.
const ListingPage = withCategoryQuery(withListingPageComponent);

// Export the enhanced component.
export default ListingPage;
