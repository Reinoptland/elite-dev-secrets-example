let nextCommentId = 3;

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

export function addCommentToPost(commentData, postId, user) {
  return (posts) =>
    posts.map((post) => {
      if (post.id === postId && post.commentsEnabled) {
        const commentId = nextCommentId;
        nextCommentId++;
        return {
          ...post,
          comments: [
            { body: commentData, user, id: commentId },
            ...post.comments,
          ],
        };
      }
      return post;
    });
}
