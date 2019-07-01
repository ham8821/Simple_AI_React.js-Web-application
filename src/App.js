import React, { Component } from 'react'
import './components/stylesheet.css'
import Title from './components/Title'
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
            <Title title={'Stay Poker Face'} />
            <br/>
            <div className="App">
              <h2><EmotionAnalysis/></h2>
            </div>
        </div>
        )
    }
}

export default App;