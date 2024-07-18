export const GOOGLE_API_KEY = "AIzaSyBBR5cei8RFSOIf-G0iOP_I2s7MZK6tKeA";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

  export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const YOUTUBE_VIDEO_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

  export const commentsData = [
    {
      name: "John Doe",
      text: "This is an amazing article!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      replies: [],
    },
    {
      name: "Jane Smith",
      text: "I completely agree with the points made here.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      replies: [
        {
          name: "Alice Johnson",
          text: "Thanks for sharing your thoughts, Jane.",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          replies: [],
        },
        {
          name: "Bob Brown",
          text: "I have a different perspective on this.",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          replies: [
            {
              name: "Charlie Davis",
              text: "Interesting point, Bob. Could you elaborate?",
              image: "https://randomuser.me/api/portraits/men/3.jpg",
              replies: [
                {
                  name: "Dana Evans",
                  text: "I'd love to hear more too!",
                  image: "https://randomuser.me/api/portraits/women/3.jpg",
                  replies: [
                    {
                      name: "Edward Wilson",
                      text: "Here's a detailed explanation.",
                      image: "https://randomuser.me/api/portraits/men/4.jpg",
                      replies: [
                        {
                          name: "Fiona Green",
                          text: "Thanks for the explanation, Edward!",
                          image: "https://randomuser.me/api/portraits/women/4.jpg",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "George Harris",
                      text: "I found this very helpful.",
                      image: "https://randomuser.me/api/portraits/men/5.jpg",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Henry Clark",
      text: "Great insights!",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      replies: [],
    },
    {
      name: "Isabella Lewis",
      text: "I learned a lot from this post.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      replies: [],
    },
    {
      name: "Jack Miller",
      text: "Thank you for this information.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      replies: [],
    },
    {
      name: "Karen Thompson",
      text: "Very well written.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      replies: [],
    },
  ];

export const LIVE_CHAT_OFFSET=19;