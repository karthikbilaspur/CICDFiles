import React from 'react';

function Blog() {
  const posts = [
    { id: 1, title: 'The Benefits of Regular Exercise', content: 'Regular exercise can help improve overall health and well-being.' },
    { id: 2, title: 'How to Get Started with a Fitness Routine', content: 'Starting a fitness routine can be intimidating, but with a little planning and preparation, you can set yourself up for success.' },
    { id: 3, title: 'The Importance of Stretching Before a Workout', content: 'Stretching before a workout can help prevent injuries and improve flexibility.' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;