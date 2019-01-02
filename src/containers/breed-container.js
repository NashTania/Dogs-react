import { connect } from 'react-redux';
import { setRandomImg } from '../actions/actions.js';
import Breed from '../components/breed.js';

const mapStateToProps = ( store ) => {
  return {
    randomImg: store.randomImg
  };
};
const boundGetDods = ( dispatch ) => {
  return {
    setRandomImg: ( key, value ) => {
      return dispatch( setRandomImg( key,value ) );
    }
  };
};

export default connect(
  mapStateToProps,
  boundGetDods
)( Breed );
