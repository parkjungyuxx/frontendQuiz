const posts = [
    { id: 1, title: "JavaScript Basics", likes: 10, comments: 5, author: "Alice" },
    { id: 2, title: "Learning React", likes: 50, comments: 15, author: "Bob" },
    { id: 3, title: "Advanced Node.js", likes: 20, comments: 8, author: "Charlie" },
    { id: 4, title: "CSS Tips and Tricks", likes: 5, comments: 2, author: "Alice" },
    { id: 5, title: "Understanding Vue.js", likes: 30, comments: 10, author: "Dave" },
    { id: 6, title: "Async Programming in JS", likes: 25, comments: 12, author: "Eve" },
    { id: 7, title: "Python for Beginners", likes: 15, comments: 5, author: "Alice" },
    { id: 8, title: "Mastering Django", likes: 45, comments: 20, author: "Bob" },
    { id: 9, title: "React Hooks Deep Dive", likes: 35, comments: 18, author: "Charlie" },
    { id: 10, title: "Getting Started with TypeScript", likes: 12, comments: 4, author: "Eve" },
    { id: 11, title: "Building REST APIs with Express", likes: 28, comments: 7, author: "Dave" },
    { id: 12, title: "Effective Debugging in JavaScript", likes: 40, comments: 12, author: "Alice" },
    { id: 13, title: "Introduction to Machine Learning", likes: 60, comments: 25, author: "Bob" },
    { id: 14, title: "Functional Programming in JS", likes: 22, comments: 9, author: "Charlie" },
    { id: 15, title: "GraphQL Basics", likes: 18, comments: 6, author: "Dave" },
    { id: 16, title: "UI/UX Design Principles", likes: 50, comments: 22, author: "Eve" },
    { id: 17, title: "Web Security Essentials", likes: 30, comments: 14, author: "Alice" },
    { id: 18, title: "Data Structures in JavaScript", likes: 17, comments: 5, author: "Charlie" },
    { id: 19, title: "HTML5 and Accessibility", likes: 23, comments: 3, author: "Bob" },
    { id: 20, title: "Intro to WebSockets", likes: 21, comments: 8, author: "Eve" }
  ];

  const result = posts.filter(v => v["likes"] >= 20);
  console.log(result);