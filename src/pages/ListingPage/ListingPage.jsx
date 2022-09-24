import React, { Component } from 'react';

import { Container, Wrap, Heading, Grid } from './listing-page.style';

import { graphql } from '@apollo/client/react/hoc';
import { FETCH_CATEGORIES, FETCH_CATEGORY } from '../../graphql/queries';
import Select from '../../components/Select';
import ProductCard from '../../components/ProductCard';

// Select Component wrapped with apollo HOC
class WrappedSelect extends Component {
  render() {
    const { loading, error, categories } = this.props.data;
    if (loading) return <p>Loading...</p>; // TODO beautify this
    if (error) return <p>Error :(</p>; // TODO beautify this

    const categoriesList = categories.map(category => {
      return { displayValue: category.name };
    });

    return (
      <Select
        values={categoriesList}
        setSelect={this.props.setCategory}
        top="78px"
        arrowW="18px"
        arrowML="20px"
        updateParent
      />
    );
  }
}

// fetch categories list to pass to Select component
const withCategoriesQuery = graphql(FETCH_CATEGORIES);

// Enhance component.
const CategorySelect = withCategoriesQuery(WrappedSelect);

class ListingPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
    };
  }

  componentDidUpdate() {
    this.props.data.refetch({ categoryName: this.state.category });
  }

  setCategory = category => {
    this.setState({ category: category });
  };

  render() {
    const { loading, error, category } = this.props.data;
    if (loading) return <h1>Loading...</h1>; // TODO beautify this
    if (error) return <h1>Error :(</h1>; // TODO beautify this

    const { products } = category;

    return (
      <Container>
        <Wrap>
          <Heading>
            <CategorySelect setCategory={this.setCategory} />
          </Heading>
          <Grid>
            {products.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        </Wrap>
      </Container>
    );
  }
}

// Create enhancer function for apollo HOC
const withCategoryQuery = graphql(FETCH_CATEGORY, {
  options: () => ({ variables: { categoryName: '' } }),
});

// Enhance component.
const ListingPage = withCategoryQuery(ListingPageComponent);

// Export the enhanced component.
export default ListingPage;
