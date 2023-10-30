import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getData } from "../utils/helpers";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";
import VideoCard from "../components/VideoCard";

const VideoDetails = () => {
  const [searchParam] = useSearchParams();
 
  const [related, setRelated]=useState(null);
  const id = searchParam.get('v');


  useEffect(() => {
   
  getData(`/related?id=${id}`)
      .then((res) => setRelated(res.data.data))
    }, []);

  


  return (
    <div className="h-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row lg:px-[100p] gap-5 p-4 min-h-[95vh]">
      <div>
        <ReactPlayer 
        controls
        url={`https://www.youtube.com/watch?v=${id}`}
        width={'100%'}
        height={'60vh'}/>

     <VideoInfo id={id} />
      </div>
      <div>
{!related ? '...' : related.map((item) => {
  if(item.type !== 'video') return;
  return <VideoCard video={item}/>
})}

      </div>
    </div>
  )
}

export default VideoDetails