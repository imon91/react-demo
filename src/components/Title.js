import React, { Component } from 'react';


class Title extends Component {
    state= {
          title:this.props.name

    }
    render() {
        return (
            <div className="row">
                <div className=" mx-auto my-2 text-center" >
 
                      <h1 className="text-title"> {this.state.title}</h1>  

                </div>
              
                
            </div>
        );
    }
}

export default Title;