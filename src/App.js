import React, { Component} from 'react';
import SearchEngine from './components/SerachEngine';
import Results from './components/Results';

class App extends Component {

  state = {
    words: '',
    images: [],
    page: ''
  }

  prevPage = () => {
    console.log("Prev");
    let page = this.state.page;

    if(page === 1) return null;

    page --
    
   this.setState({
     page
  }, () => {
    this.consultApi();
  });

  }

  nextPage = () => {
    console.log("Next")
    let page = this.state.page;

    page ++
    
   this.setState({
     page
   }, () => {
    this.consultApi();
  });

  }

  consultApi = () => {
    const word = this.state.words;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=21699074-abf7b4c7bfe9ac3ab0e58bbd7&q=${word}&per_page=20&${page}`;
    
    fetch(url)
    .then(response => response.json())
    .then(result =>this.setState({images: result.hits}))

  }

  dataSearched = (words) => {
    this.setState({
      words : words,
      page : 1
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
        <div className="row justify-content-center">
         <Results
          images={this.state.images}
          prevPage = {this.prevPage}
          nextPage = {this.nextPage}
        />
        </div>
        
      </div>
    );
  }
}


export default App;
