// Real YouTube videos from Thecla's channel "Unbox your Aura with Evergreen-Thecla".
// Thumbnails are downloaded locally to /public/images for fast, dependency-free posters.

export const channelUrl = "https://youtube.com/@evergreenthecla";

export const videos = {
  callMeWoman: {
    id: "lpjuzgh37LU",
    title: "CALL ME WOMAN",
    subtitle: "A Powerful Spoken Word for International Women’s Day",
    poster: "/images/yt-lpjuzgh37LU.jpg",
    tag: "Spoken Word",
  },
  behindScenes: {
    id: "4xzUJJkiLCk",
    title: "Behind the Scenes of CALL ME WOMAN",
    subtitle: "Spoken Word Production",
    poster: "/images/yt-4xzUJJkiLCk.jpg",
    tag: "Behind the Scenes",
  },
  vision: {
    id: "owMSadN_HvA",
    title: "Guiding Your Vision to Reality",
    subtitle: "Conversations on purpose & growth",
    poster: "/images/yt-owMSadN_HvA.jpg",
    tag: "Feature",
  },
};

export const videoList = Object.values(videos);

export const embedUrl = (id, autoplay = true) =>
  `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1${
    autoplay ? "&autoplay=1" : ""
  }`;
