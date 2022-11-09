import React from "react";
import "./index.css";
import InfiniteScroll from "react-infinite-scroll-component";

const index = (props) => {
  return (
    <div className="images-container">
      <InfiniteScroll
        dataLength={props.images.length}
        next={() => {
          props.setPgNo(props.pgNo + 1);
          props.fetchImages(props.pgNo + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {props.images.map((image) => (
          <div className="image-div" id={image.id}>
            <img alt={image.alt_description} src={image.urls.small}/>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default index;
