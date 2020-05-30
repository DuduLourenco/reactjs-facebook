import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Eduardo Lourenço",
              avatar: "avatar.png"
            },
            date: "May 29th, 2020",
            time: "07:30 PM",
            content: "Hey, what's up guys?\n\nthis is an application that is part of my ReactJs studies.",
            comments: [
              {
                id: 1,
                author: {
                  name: "Josh Vandal",
                  avatar: "avatar.png"
                },
                content: "Is the application part of GoStack?"
              },
              {
                id: 2,
                author: {
                  name: "Eduardo Lourenço",
                  avatar: "avatar.png"
                },
                content: "Yeap, that's right."
              },
              {
                id: 3,
                author: {
                  name: "Josh Vandal",
                  avatar: "avatar.png"
                },
                content: "So cool, Edu!"
              },
              {
                id: 4,
                author: {
                  name: "Josh Vandal",
                  avatar: "avatar.png"
                },
                content: "I'm excited to get to the next stage :)"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Richard Carrol",
              avatar: "avatar.png"
            },
            date: "May 27th, 2020",
            time: "08:00 AM",
            content: "Good morning guys, how is a going?\n\nI created this post with the intention of helping people in the group to leverage their career.  Deposit in the comments the link to Gihub and your linkendin.",
            comments: [
              {
                id: 1,
                author: {
                  name: "Eduardo Lourenço",
                  avatar: "avatar.png"
                },
                content: "Good morning Richard! That's great idea!\nGitHub: https://github.com/DuduLourenco\nLinkedin: https://www.linkedin.com/in/eduardo-louren%C3%A7o-da-silva-7a62b3182/"
              },
              {
                id: 2,
                author: {
                  name: "Josh Vandal",
                  avatar: "avatar.png"
                },
                content: "I don't have it yet, I'm new here :("
              }
            ]
          }
        ]
    };

    render(){
      return(
          <div className="post-list" >
            {this.state.posts.map(post => (                      
              <PostItem key={post.id} data={post} />
            ))}
          </div>            
      );
    }
}

export default PostList;
