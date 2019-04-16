import React from 'react';
import Webcam from 'react-webcam'

class MyWebcam extends React.Component{

    setRef = webcam =>{
        this.webcam =webcam;
    }

    render(){
        const videoConstraints = {
            width: 750,
            height : 500,
            facingMode: 'user'
        };


        return(
            <div>
                <Webcam
                ref={this.setRef}
                audio={false}
                height={250}
                width={375}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                />
            </div>
        )
    }
}
export default MyWebcam