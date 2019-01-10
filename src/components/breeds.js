import React  from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import BreedsList from './breeds-list.js';
import PropTypes from 'prop-types';

export default class Breeds extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      breeds: {}
    };
  }

  async loadBreeds() {
    if ( this.props.breedsList === null ){
      this.props.setDogsList().then( () => {
        this.setState({
          breeds: this.props.breedsList
        });
      });
    } else {
      this.setState({
        breeds: this.props.breedsList
      });
    }
  }

  componentDidMount() {
    this.loadBreeds();
  }

  render() {
    if ( Object.keys( this.state.breeds ).length !== 0 ) {
      return(
        <div>
          <div className='navigation-block'>
            <Link to='/' className='navigation-link'>Back</Link>
          </div>
          <BreedsList breeds={Object.keys( this.state.breeds )}/>
        </div>
      );
    } else {
      return(
        <p> Loading </p>
      );
    }
  }
}

Breeds.propTypes = {
	  'breedsList': PropTypes.object,
	  'setDogsList': PropTypes.func
};
