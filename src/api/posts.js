export async function createNewPostOnServer(postInput, userId) {
  try {
    // 1. post aanmaken voor de server
    const newPost = {
      ...postInput,
      createdAt: Date.now(),
      userId,
    };

    // 2. POST request maken naar /posts
    const response = await fetch(`http://localhost:4000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();
    // 3. response checken (is het gelukt)
    // RETURN SOMETHING HERE
    return [null, data];
  } catch (error) {
    return [error, null];
  }
}
