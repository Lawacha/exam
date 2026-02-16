// data.js

const users = {
  ironman: {
    name: "Iron Man",
    followers: 5000000,
    following: 300,
    posts: [
      {
        photo: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Suiting up!",
        likes: 120000,
        comments: [
          { username: "captainamerica", text: "Looking sharp, Tony!" },
          { username: "spiderman", text: "Love the armor!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Mark L armor ready.",
        likes: 95000,
        comments: [
          { username: "thor", text: "Impressive tech!" }
        ]
      }
    ]
  },

  captainamerica: {
    name: "Captain America",
    followers: 4800000,
    following: 350,
    posts: [
      {
        photo: "https://images.unsplash.com/photo-1563389234902-c856e2302bcd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Avengers Assemble!",
        likes: 110000,
        comments: [
          { username: "ironman", text: "Let's do this!" },
          { username: "blackwidow", text: "Ready!" }
        ]
      },
      {
        photo: "https://images.unsplash.com/photo-1561156772-a44477f220a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Shield on duty.",
        likes: 85000,
        comments: [
          { username: "hawkeye", text: "Looking strong!" }
        ]
      }
    ]
  },

  thor: {
    name: "Thor",
    followers: 4500000,
    following: 200,
    posts: [
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_hero.jpg",
        caption: "Storm is coming.",
        likes: 100000,
        comments: [
          { username: "hulk", text: "Epic!" },
          { username: "ironman", text: "Haha nice!" }
        ]
      },
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_hammer.jpg",
        caption: "Mjolnir in hand.",
        likes: 90000,
        comments: [
          { username: "captainamerica", text: "Classic Thor!" }
        ]
      }
    ]
  },

  blackwidow: {
    name: "Black Widow",
    followers: 4000000,
    following: 220,
    posts: [
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_hero.jpg",
        caption: "Stealth mission.",
        likes: 72000,
        comments: [
          { username: "hawkeye", text: "Nice work!" }
        ]
      },
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_training.jpg",
        caption: "Training hard.",
        likes: 68000,
        comments: [
          { username: "captainamerica", text: "Keep it up!" }
        ]
      }
    ]
  },

  spiderman: {
    name: "Spider-Man",
    followers: 6000000,
    following: 500,
    posts: [
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spiderman_hero.jpg",
        caption: "Swinging through NYC!",
        likes: 150000,
        comments: [
          { username: "ironman", text: "Great job, kid!" },
          { username: "thor", text: "Swing faster!" }
        ]
      },
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spiderman_suit.jpg",
        caption: "New suit unlocked.",
        likes: 130000,
        comments: [
          { username: "doctorstrange", text: "Nice tech!" }
        ]
      }
    ]
  },

  hulk: {
    name: "Hulk",
    followers: 4300000,
    following: 180,
    posts: [
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hulk_hero.jpg",
        caption: "HULK SMASH!",
        likes: 95000,
        comments: [
          { username: "thor", text: "Easy there!" }
        ]
      }
    ]
  },

  doctorstrange: {
    name: "Doctor Strange",
    followers: 3800000,
    following: 100,
    posts: [
      {
        photo: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_hero.jpg",
        caption: "Master of the Mystic Arts.",
        likes: 80000,
        comments: [
          { username: "spiderman", text: "Wow!" }
        ]
      }
    ]
  }
};

module.exports = users;
