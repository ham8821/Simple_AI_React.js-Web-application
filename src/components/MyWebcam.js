import React from 'react';
import Webcam from 'react-webcam';
import Button from 'react-bootstrap/Button';

class MyWebcam extends React.Component {
    constructor(props) {
        super(props);
        this.timerId = null;
        this.isCapturing = false;
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    startCapturing = () => {
        this.isCapturing = true;
        this.timerId = setInterval(() => {
            const image = this.webcam.getScreenshot();
            const byteArrayImage = this.convertToByteArray(image);
            this.fetchData(byteArrayImage);
        }, 100);
    }

    convertToByteArray = (image) => {
        const base64 = require('base64-js');
        const base64string = image.split(',')[1];
        return base64.toByteArray(base64string)
    };

    fetchData = (byteArray) => {
        const apiKey = 'c7cb923ce41544a39adeb3da51781ab1';
        const apiEndpoint = 'https://australiaeast.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion'
        fetch(apiEndpoint, {
            body: byteArray,
            headers: {
                'cache-control': 'no-cache', 'Ocp-Apim-Subscription-Key': apiKey, 'Content-Type': 'application/octet-stream'
            },
            method: 'POST'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    var happiness = (data[0] != null ? data[0].faceAttributes.emotion.happiness : 0);
                    var sadness= (data[0] != null ? data[0].faceAttributes.emotion.sadness : 0);
                    var anger= (data[0] != null ? data[0].faceAttributes.emotion.anger : 0);
                    var surprise= (data[0] != null ? data[0].faceAttributes.emotion.surprise : 0);
                    var contempt= (data[0] != null ? data[0].faceAttributes.emotion.contempt : 0);
                    happiness = (Math.round(happiness * 100))
                    sadness = (Math.round(sadness * 100))
                    anger = (Math.round(anger * 100))
                    surprise = (Math.round(surprise * 100))
                    contempt = (Math.round(contempt * 100))


                    if (this.isCapturing && happiness < 100 && sadness< 100) {
                        this.props.onReceivedResult(happiness);
                        this.props.onReceivedResult2(sadness);
                        this.props.onReceivedResult3(anger);
                        this.props.onReceivedResult4(surprise);
                        this.props.onReceivedResult5(contempt);

                    } else {
                        clearInterval(this.timerId);
                        // this.isCapturing = false;
                        this.props.onReceivedResult(100);
                        this.props.onReceivedResult2(100);
                        this.props.onReceivedResult3(100);
                        this.props.onReceivedResult4(100);
                        this.props.onReceivedResult5(100);
                    }
                });
            }
        });
    }

    render() {
        const videoConstraints = {
            width: 750,
            height: 500,
            facingMode: "user"
        };
        return (
            <div>
                <div>
                    <Webcam
                        audio={false}
                        height={320}
                        width={500}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                </div>
                
                <Button variant="primary" onClick={this.startCapturing}>FIND OUT NOW</Button>
            </div>
        );
    }
}

export default MyWebcam;