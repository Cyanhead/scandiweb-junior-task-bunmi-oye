import { PureComponent } from 'react';
import { Container, Wrap, TabLink, TabWrap, TabText } from './tabs.style';

import { graphql } from '@apollo/client/react/hoc';
import { connect } from 'react-redux';
import { FETCH_CATEGORIES } from '../../graphql/queries';
import { changeCategory } from '../../redux/category/categoryActions';

class Tabs extends PureComponent {
  render() {
    const { loading, error, categories } = this.props.data;

    if (loading)
      return (
        <Container>
          <Wrap>
            <p>Loading...</p>
          </Wrap>
        </Container>
      );
    if (error)
      return (
        <Container>
          <Wrap>
            <p>Error:(</p>
          </Wrap>
        </Container>
      );

    return (
      <>
        {categories.map(({ name }, i) => {
          return (
            <TabLink
              to={name === 'all' ? '/' : `/${name}`}
              key={name}
              onClick={() => this.props.setTabIndex(i)}
            >
              <TabWrap active={i === this.props.tabIndex}>
                <TabText active={i === this.props.tabIndex}>{name}</TabText>
              </TabWrap>
            </TabLink>
          );
        })}
      </>
    );
  }
}

const mapCategoryStateToProps = state => {
  return {
    category: state.category.listingCategory,
  };
};

const mapCategoryDispatchToProps = dispatch => {
  return {
    changeCategory: category => dispatch(changeCategory(category)),
  };
};

// connect to redux
const withTabs = connect(
  mapCategoryStateToProps,
  mapCategoryDispatchToProps
)(Tabs);

// fetch categories list to pass to Select component
const withCategoriesQuery = graphql(FETCH_CATEGORIES);

// Enhance component.
const CategoryTabs = withCategoriesQuery(withTabs);

export default CategoryTabs;
