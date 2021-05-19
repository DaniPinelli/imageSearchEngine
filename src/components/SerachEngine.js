import React, { Component} from 'react';

class SearchEngine extends Component{

    searchRef = React.createRef();

    render() {
        return ( 
          <form>
              <div className="row" >
                <div className="form-group col-md-8 " >
                    <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Type a word, example: Cars" />
                </div>
                <div className="form-group col-md-4 " >
                    <input type="submit" className="btn btn-lg btn-success btn-block" value="Search" />
                </div>
              </div>
          </form> 
        );
    }
}

export default SearchEngine;