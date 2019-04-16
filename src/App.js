import React, { Component } from 'react';
import Title from './components/Title'
import Displayer from './components/Displayer'
import Addvideo from './components/Addvideo'
import stylesheet.css from './components/stylesheet.css'


class App extends Component {
// Constructors
constructor(){
  super()
  this.state = {
    posts: [{
      VideoLink: ""
    }]
  }
}

// Method called Addvideo
addvideo(postSubmitted){
  this.setState(state => ({
    posts: [postSubmitted]
  }))
  }

  // Rendering
  render() {
    return (
     <div>
       <Title title={'No-Laugh Chanllenge'} />
       <Addvideo onAddvideo={(addedPost)=>{
         this.addvideo(addedPost)
       }
       }/>
       <div className ="Video-wrapper">
       <Displayer post= {this.state.posts} />
       </div>
     </div>
    );
  }
}

export default App;
