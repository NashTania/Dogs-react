import React from 'react';
import '../css/styles.css';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

export default class Breed extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      img: null
    }
    this.url = 'https://dog.ceo/api/breed/'+this.props.breed+'/images/random'
  }
  componentDidMount() {

    const breed = this.props.breed
    if(this.props.randomImg === null) {
      fetch(this.url).then(res => res.json()).then((data) => {
        this.setState({
          img: data.message
        })
        this.props.setRandomImg(this.props.breed, data.message)
      })
    } else {
      this.setState({
        img: this.props.randomImg[breed]
      })
    }
  }
  render() {
    const breed = this.props.breed
    return (
      <div className='breed-block'>
      <div className='breed-block-img-wrapper'>
      <Link to={`/list/${breed}`}>
        <img className='breed-block-img' src={this.state.img} ></img>
      </Link>
      </div>
        <p className='breed-block-p'>
          {this.props.breed.toUpperCase()}
        </p>
      </div>
    )
  }
}
