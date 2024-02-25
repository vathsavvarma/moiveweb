import React from "react";
import Navvbar from './Navvbar';
import {Navigate} from 'react-router-dom'
import Dataa from './videoData.json';
import { useParams } from 'react-router-dom';

function VideoPlayer(){
    const [goback,setGoback] = React.useState(true);
    const { videoId } = useParams();
    // console.log(videoId);
    if(!goback){
        return <Navigate to='https://vathsavvarma.github.io/moiveweb/'/>
    }
    let idx = Dataa.info[videoId-1];
    // console.log(idx);
    return(
        <div>
            <Navvbar />
            <h1>Teasting Video Player Beta</h1>
            {/* <video width='100%' height="400px" controls>
                <source src="https://d46j76fszlqi8.cloudfront.net/nani.mp4" type="video/mp4"/>
            </video> */}
            <div>
            <iframe
            id={idx.id}
            type="text/html"
            width="100%"
            height="360"
            src={idx.src}
            frameBorder="0"
            controls
            />
            </div>
            <button 
                onClick={()=>{
                    setGoback(false);
                }}
            >
                Click Me To Go Back
            </button>
        </div>
    );
}

export default VideoPlayer;