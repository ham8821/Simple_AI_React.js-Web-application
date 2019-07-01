/* eslint-disable react/style-prop-object */
import React from 'react';
import { useState } from 'react';
import MyWebcam from './MyWebcam'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert'
import {Container, Row, Col} from 'react-bootstrap';
import Draggable from 'react-draggable';

function EmotionAnalysis() {
    const [result, updateResult] = useState(0);
    const [result2,updateResult2] = useState(0);
    const [result3,updateResult3] = useState(0);
    const [result4,updateResult4] = useState(0);
    const [result5,updateResult5] = useState(0);

    return (
        <div>
            <Container>
                    <Row>
                        <Col />
                        <Col xs={6} lg={6}>
                        <MyWebcam onReceivedResult={updateResult} onReceivedResult2={updateResult2} onReceivedResult3={updateResult3} onReceivedResult4={updateResult4} onReceivedResult5={updateResult5}/>
                        </Col>
                        <Col xs={6} lg={6}>
                        <Result result={result} result2={result2} result3={result3} result4={result4} result5={result5}/>
                        </Col>
                    </Row>
                </Container>

        </div>
    );
}

function getProgressBarColour(percent) {
    var variant = "";
        if (percent <= 50) {
            variant = "success";
        } else if (percent <= 90) {
            variant = "warning";
        } else {
            variant = "danger";
        }
        return variant;
    }


    function Result(props) {
        return (
            <div className="resultbox">
                <Container>
                    <Row>
                        <Col />
                        <Col xs={6}>
                            <p className="emotiontitle">Happiness: {props.result < 100 ? props.result + '%' : <GameOver />}</p>
                            <ProgressBar animated now={props.result} variant={"danger"} />
                        </Col>
                        <Col xs={6}>
                            <p className="emotiontitle">Sadness: {props.result2 < 100 ? props.result2 + '%' : <GameOver />}</p>
                            <ProgressBar animated now={props.result2} variant={getProgressBarColour(props.result2)} />
                        </Col>
                        <Col xs={6}>
                            <p className="emotiontitle">Anger: {props.result3 < 100 ? props.result3 + '%' : <GameOver />}</p>
                            <ProgressBar animated now={props.result3} variant={getProgressBarColour(props.result3)} />
                        </Col>
                        <Col xs={6}>
                            <p className="emotiontitle">Surprise: {props.result4 < 100 ? props.result4 + '%' : <GameOver />}</p>
                            <ProgressBar animated now={props.result4} variant={getProgressBarColour(props.result4)} />
                        </Col>
                        <Col xs={6}>
                            <p className="emotiontitle">Contempt: {props.result5 < 100 ? props.result5 + '%' : <GameOver />}</p>
                            <ProgressBar animated now={props.result5} variant={getProgressBarColour(props.result5)} />
                        </Col>                       
                       <Col />
                    </Row>
                </Container>
            </div>
        );
    }

function GameOver() {
    return (
        <div>
            {/* <Alert variant="danger">
                <Alert.Heading>Game Over!</Alert.Heading>
            </Alert> */}
            <p>Over</p>
            
        </div>
    );
}

export default EmotionAnalysis;