import React  from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css';
import ImagesList from './images-list.js'

export default class AllImgesBreed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    const breed = this.props.match.params.breed;
    if(this.props.breedImages === null || this.props.breedImages[breed] === undefined) {
      this.props.setBreedImages(breed).then(() => {
        this.setState({
          images: this.props.breedImages[breed]
        })
      })
    } else {
      this.setState({
        images: this.props.breedImages[breed]
      })
    }
  }

  componentDidUpdate(prevProps) {
    const breed = this.props.match.params.breed;
    console.log(this.props.match.params.breed)
    console.log(this.props.match)
    if(prevProps.match.params.breed !== this.props.match.params.breed) {
      if(this.props.breedImages === null || this.props.breedImages[breed] === undefined) {
        this.props.setBreedImages(breed).then(() => {
          this.setState({
            images: this.props.breedImages[breed]
          })
        })
      } else {
        this.setState({
          images: this.props.breedImages[breed]
        })
      }
    }
  }

  render() {
    return(
      <div>
        <p className='page-header'>
          {this.props.match.params.breed}
        </p>
        <ImagesList images={this.state.images} />
      </div>
    )
  }
}
