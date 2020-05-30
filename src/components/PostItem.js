import React from 'react';

function PostItem({ data }) {
  return (
    <div className="post-item">
      <div className="post-header">
        <img className="avatar" src={data.author.avatar} />
        <span className="author-name">{data.author.name}</span>
        <span className="date-time">{data.date} at {data.time}</span>
      </div>

      <div className="post-body">
        <p>{data.content}</p>
      </div>

      <div className="line"></div>

      <div className="post-footer">
        {data.comments.map(comment => (
          <>
          <img className="comment-avatar" src={comment.author.avatar} />
            <div key={comment.id} className="comment">
              
              <span className="author-name">{comment.author.name}</span>
              {comment.content}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PostItem;