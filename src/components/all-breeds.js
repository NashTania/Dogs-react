import React  from 'react';
import { Link } from 'react-router-dom';
import FilterBreeds from './filter-breeds.js';
import '../css/styles.css';
import PropTypes from 'prop-types';

export default class AllBreeds extends React.Component{
  constructor( props ) {
    super( props );
    this.state = {
      breeds: {}
    };
  }

  componentDidMount() {
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

  filterFunc = ( event ) => {
    this.props.history.push( `/all/${event.target.value}` );
  }


  render() {
    return (
      <div>
        <div className='navigation-block'>
          <Link to='/list' className='navigation-link'>All breeds</Link>
        </div>
        <FilterBreeds breeds={this.state.breeds} filterFunc={this.filterFunc}/>
      </div>
    );
  }
}

AllBreeds.propTypes = {
  'breedsList': PropTypes.object,
  'setDogsList': PropTypes.func,
  'history': PropTypes.object
};
