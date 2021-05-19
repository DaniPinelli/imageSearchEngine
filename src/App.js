import React, { Component} from 'react';
import SearchEngine from './components/SerachEngine';
import Results from './components/Results';

class App extends Component {

  state = {
    words: '',
    images: []
  }

  consultApi = () => {
    const word = this.state.words;
    const url = `https://pixabay.com/api/?key=21699074-abf7b4c7bfe9ac3ab0e58bbd7&q=${word}`;
    
    fetch(url)
    .then(response => response.json())
    .then(result =>this.setState({images: result.hits}))

  }

  dataSearched = (words) => {
    this.setState({
      words
    }, () => {
      this.consultApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron" >
        <p className="lead text-center" >Image Search Engine</p>
        <SearchEngine
        dataSearched= {this.dataSearched}
        />
        </div>
        <Results
        images={this.state.images}
        />
      </div>
    );
  }
}


export default App;
