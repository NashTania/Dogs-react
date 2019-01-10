import React from 'react';
import ImageBreed from './image-breed.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

export default class ImagesList extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      items: this.props.images.slice( 0, 19 ),
      lastIndex: 19,
      hasMore: true
    };
  }

  fetchMoreData = () => {
    if ( this.state.items.length >= this.props.images.length ) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      items: this.state.items.concat( this.props.images.slice( this.state.lastIndex, this.state.lastIndex + 20 ) ),
      lastIndex: this.state.lastIndex + 20
    });
  };

  render() {
    return (
      <div>
        <InfiniteScroll className='flex-wrapper'
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={null}
          endMessage={<p></p>}
        >
          {this.state.items.map( img =>
            <ImageBreed key={img.split( '_' )[1]} image={img}/>
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

ImagesList.propTypes = {
  'images' : PropTypes.array
};
