import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "./hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length} //This is important field to render the next data
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video) => {
            const { youtubeID, title, noq } = video;

            return noq > 0 ? (
              <Link to={`/quiz/${youtubeID}`} key={youtubeID}>
                <Video  title={title} id={youtubeID} noq={noq} />
              </Link>
            ) : (
              <Video key={youtubeID} title={title} id={youtubeID} noq={noq} />
            );
          })}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div> no data found!</div>}
      {error && <div> there is an error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
