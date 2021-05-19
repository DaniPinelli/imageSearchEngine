import React, { Component} from 'react';
import SearchEngine from './components/SerachEngine';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron" >
        <p className="lead text-center" >Image Search Engine</p>
        <SearchEngine/>
        </div>
        
      </div>
    );
  }
}


export default App;
