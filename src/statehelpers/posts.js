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
