import React, { Component } from 'react'
import './components/stylesheet.css'
import Displayer from './components/Displayer'
import Title from './components/Title'
import AddVideo from './components/AddVideo'
import EmotionAnalysis from './components/EmotionAnalysis'
class App extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                videoLink: ""
            }]
        }
    }

    addVideo(postSubmitted) {
        this.setState(state => ({
            posts: [postSubmitted]
        }))
    }

    render() {
        return (
        <div>
            <Title title={'Try Not to laugh Challenge'} />
            <AddVideo onAddVideo={(addedPost) => {
                this.addVideo(addedPost)
            }}/>
            <div className = "video-wrapper">
                <Displayer posts={this.state.posts} />
            </div>
            <div className="App">
              <h2><EmotionAnalysis/></h2>
            </div>
        </div>
        )
    }
}

export default App;