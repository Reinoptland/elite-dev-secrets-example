let nextCommentId = 3;

export function loadDummyPosts() {
  return [
    {
      id: 1,
      user: { id: 2, name: "Mauro Nieuwenhuisen", hexColor: "#e83b2e" },
      title: "Developer meetups in Gouda",
      createdAt: new Date() - 200000000,
      likes: [4, 7],
      category: "Meetups",
      comments: null,
      commentsEnabled: false,
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis modi odio, obcaecati at sit non sint qui accusamus deleniti corrupti dolorem facilis, ex sequi. Reiciendis, dolorem! Iste commodi veniam maxime.",
    },
    {
      id: 2,
      user: { id: 1, name: "Harm de Kluiver", hexColor: "#f1c232" },
      title: "You should always style things",
      createdAt: new Date() - 600000,
      likes: [1, 3, 4, 7],
      category: "CSS",
      comments: [
        {
          id: 1,
          body: "Yeah for real! 💯🧑‍🎨 \n Making things pretty is super satisfying",
          user: { id: 3, name: "Rein Op 't Land", hexColor: "#3ca11d" },
        },
        {
          id: 2,
          body: "Yeah - but what do you use in React? \n CSS, CSS-modules or CSS-in-JS?",
          user: { id: 2, name: "Mauro Nieuwenhuisen", hexColor: "#e83b2e" },
        },
      ],
      commentsEnabled: true,
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis modi odio, obcaecati at sit non sint qui accusamus deleniti corrupti dolorem facilis, ex sequi. Reiciendis, dolorem! Iste commodi veniam maxime.",
    },
  ];
}

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
