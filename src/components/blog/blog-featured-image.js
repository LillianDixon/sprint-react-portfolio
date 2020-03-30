import React from 'react';

const BlogFeeaturedImage = props => {

    if(!props.img) {
        return null;
    }

    return(
        <div className="featured-image-wrapper">
          <img src={props.img} />
        </div>
    )
}

export default BlogFeeaturedImage;