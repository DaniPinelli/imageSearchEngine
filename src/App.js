import React, { Component} from 'react';
import SearchEngine from './components/SerachEngine';

class App extends Component {

  state = {
    words: ''
  }

  consultApi = () => {

    const url = `https://pixabay.com/api/?key=21699074-abf7b4c7bfe9ac3ab0e58bbd7&q=${this.state.words}`;
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
        
      </div>
    );
  }
}


export default App;
