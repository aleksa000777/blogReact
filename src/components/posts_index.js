import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount(){
    console.log('this would be good time to call an action creator to fetch posts');
  }

  render(){
    return(
      <div>
        LIst of blog posts
      </div>
    );
  }
}

export default PostsIndex;
