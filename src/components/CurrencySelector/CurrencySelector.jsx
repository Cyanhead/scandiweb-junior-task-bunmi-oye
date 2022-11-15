import { PureComponent } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { connect } from 'react-redux';
import { FETCH_CURRENCIES } from '../../graphql/queries';
import { changeCurrency } from '../../redux';
import Select from '../Select';

import { Container, Wrap } from './currency-selector.style';

class WrappedSelect extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currency: null,
    };
  }

  componentDidUpdate = (_, prevState) => {
    if (prevState && prevState.currency === null) {
      this.setState({
        currency: this.props.data.currencies[0],
      });
    }
    if (prevState.currency !== this.state.currency) {
      this.props.changeCurrency(this.state.currency);
    }
  };

  setCurrency = currency => {
    // transform the currency obj to better syntax
    const newObj = {
      label: currency.selectValue,
      symbol: currency.displayValue,
    };
    this.setState({ currency: newObj });
  };

  render() {
    const { loading, error, currencies } = this.props.data;
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

    const categoriesList = currencies.map(({ symbol, label }) => {
      return { displayValue: symbol, selectValue: label };
    });

    return (
      <Select
        values={categoriesList}
        setSelect={this.setCurrency}
        updateParent
        passObj
        anchor
        top="65px"
        pad="16px 8px"
        width="60px"
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCurrency: currency => dispatch(changeCurrency(currency)),
  };
};

// connect to redux
const withWrappedSelect = connect(null, mapDispatchToProps)(WrappedSelect);

// fetch currencies list to pass to Select component
const withCurrenciesQuery = graphql(FETCH_CURRENCIES);

// Enhance component.
const CurrencySelector = withCurrenciesQuery(withWrappedSelect);

export default CurrencySelector;
