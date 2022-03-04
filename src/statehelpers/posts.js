export function createPost(postData, user) {
  return (posts) => {
    return [
      ...posts,
      {
        ...postData,
        user,
        comments: [],
        likes: [],
      },
    ];
  };
}

export function addLikeToPost(postId, userId) {
  return (posts) =>
    posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: [...post.likes, userId] };
      }
      return post;
    });
}

export function removeLikeFromPost(postId, userId) {
  return (posts) =>
    posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes.filter((id) => id !== userId) };
      }
      return post;
    });
}

export function addCommentToPost(comment) {
  return (posts) =>
    posts.map((post) => {
      if (post.id === comment.postId && post.commentsEnabled) {
        return {
          ...post,
          comments: [comment, ...post.comments],
        };
      }
      return post;
    });
}
