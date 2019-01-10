import React from 'react';
import '../css/styles.css';
import Breed from '../containers/breed-container.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

export default class BreedsList extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      items: this.props.breeds.slice( 0, 19 ),
      lastIndex: 19,
      hasMore: true
    };
  }

  fetchMoreData = () => {
    if ( this.state.items.length >= this.props.breeds.length ) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      items: this.state.items.concat( this.props.breeds.slice( this.state.lastIndex, this.state.lastIndex + 20 ) ),
      lastIndex: this.state.lastIndex + 20
    });
  };

  render() {
    return (
      <div>
        <p className='page-header'>
        ALL BREEDS
        </p>
        <InfiniteScroll className='flex-wrapper'
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p></p>}
        >
          {this.state.items.map( breed =>
            <Breed key={breed} breed={breed}/>
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

BreedsList.propTypes = {
	  'breeds': PropTypes.array,
};
