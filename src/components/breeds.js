import React  from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css';
import BreedsList from './breeds-list.js';

export default class Breeds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: {}
    }
  }

  componentDidMount() {
    console.log(this.props.breedsList)
    if ( this.props.breedsList === null ){
      this.props.setDogsList().then(() => {
        this.setState({
          breeds: this.props.breedsList
        })
      })
    } else {
      this.setState({
        breeds: this.props.breedsList
      })
    }
  }

  render() {
    return(
      <div>
        <div className='navigation-block'>
          <Link to='/' className='navigation-link'>Back</Link>
        </div>
        <BreedsList breeds={this.state.breeds}/>
      </div>
    )
  }
}
