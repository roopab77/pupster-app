import React, { Component } from 'react';
import API from '../../utils/API';

// on load, get list of breeds from api and store it in state to use in our autocomplete search box

// when user wants to conduct a search, take dog breed name out of state and pass into api call to get images for that breed

// map over returned dog images in state and print them out

class Search extends Component {
  
  state = {
    dogBreedList: [],
    breedToSearch: "",
    dogImages: []
  }

  componentDidMount() {
    this.getDogBreeds();
  }

  // method to get all dog breeds on load
  getDogBreeds = () => {
    API.getDogBreeds()
      .then((res) => {
        console.log(res.data);
        this.setState({
          dogBreedList: res.data.message
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    
    API.getDogList(this.state.breedToSearch)
      .then((res) => {
        console.log(res.data);
        this.setState({
          dogImages: res.data.message,
          breedToSearch: ""
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Search For Some Doggos</h1>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <input 
            className="form-control"
            value={this.state.breedToSearch}
            onChange={this.handleInputChange}
            name="breedToSearch"
            placeholder="Search for a dog"
            type="text"
            list="breed-list"
            />

          <button className="btn btn-block btn-outline-primary" onClick={this.handleSearch}>Search For Doggos</button>
          
          <datalist id="breed-list">
            {this.state.dogBreedList.map((breed) => {
              return (
                <option key={breed} value={breed}/>
              )
            })}
          </datalist>
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          <div className="row align-items-center">
            {
              (this.state.dogImages.length === 0) 
              ? 
              (<h1>Search For Dogs</h1>) 
              : 
              (this.state.dogImages.map((dog) => {
                return (
                  <div key={dog} className="col-12 col-md-4 text-center">
                    <img src={dog} alt={dog} className="img-fluid"/>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
