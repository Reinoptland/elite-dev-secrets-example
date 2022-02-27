export function createPost(postInput, user) {
  return (posts) => {
    return [
      ...posts,
      {
        ...postInput,
        user,
        id: posts.length + 1,
        comments: postInput.commentsEnabled ? [] : null,
        likes: [],
        createdAt: new Date(),
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
