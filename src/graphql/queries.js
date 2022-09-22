import { gql } from '@apollo/client';

// query to fetch a single category of products
/*
 * $categoryName is a variable that holds the name
 * of the category to be fetched. The variable value
 * will be recieved via props on the Query component.
 * Its default value is set to 'all'.
 */
export const FETCH_CATEGORY = gql`
  query FetchCategory($categoryName: String! = "all") {
    category(input: { title: $categoryName }) {
      name
      products {
        id
        gallery
        brand
        name
        inStock
        attributes {
          id
          name
          type
          items {
            displayValue
            value
          }
        }
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

// query to fetch the names of all categories
export const FETCH_CATEGORIES = gql`
  query FetchCategories {
    categories {
      name
    }
  }
`;

// fetch data for a single product
export const FETCH_PRODUCT = gql`
  query FetchProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      gallery
      description
      brand
      attributes {
        id
        type
        items {
          value
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
`;
