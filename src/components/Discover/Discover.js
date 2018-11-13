import React, {Component} from 'react';
import API from '../../utils/API';

// on load, page will call dog-ceo api for a random dog image and we'll print to
// page add buttons for upvoting and downvoting dogs if upvote, run 1/5 chance
// for dog to like you too, if it's match, update state to reflect how many dogs
// you've matched with

class Discover extends Component {

  state = {
    dogMatchCount: 0,
    activeDogImg: ""
  }

  // on load, call below method for random dog
  componentDidMount() {
    // call api
    this.getRandomDog();
  }

  // write method to hold onto API call for random dog
  getRandomDog = () => {
    API
      .getRandomDog()
      .then((res) => {
        console.log(res.data);
        this.setState({activeDogImg: res.data.message})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // write method to handle upvoting
  handleUpvote = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber === 4) {
      this.setState({
        dogMatchCount: this.state.dogMatchCount + 1
      });
    } 

    this.getRandomDog();
  } 


  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 text-center">
          <h2>You've matched with {this.state.dogMatchCount} dogs!</h2>
          <img
            src={this.state.activeDogImg}
            alt={this.state.activeImg}
            className="img-fluid"/>

          <button className="btn btn-block btn-success my-4" onClick={this.handleUpvote}>
            <i className="fa fa-thumbs-up"></i>
            Vote for this doggo.
          </button>

          <button className="btn btn-block btn-danger my-4" onClick={this.getRandomDog}>
            <i className="fa fa-thumbs-down"></i>
            No vote for this doggo.
          </button>

        </div>
      </div>
    )
  }
}

export default Discover;
