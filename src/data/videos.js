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
  auraEp1: {
    id: "e7bNjYD26rg",
    title: "This Is For Anyone Who Is Afraid To Start",
    subtitle: "Unbox Your Aura · Episode 1",
    poster: "/images/yt-e7bNjYD26rg.jpg",
    tag: "Unbox · Ep. 1",
  },
  auraEp2: {
    id: "E1aB9BwWN94",
    title: "Everyone Has a Gift",
    subtitle: "Unbox Your Aura · Episode 2",
    poster: "/images/yt-E1aB9BwWN94.jpg",
    tag: "Unbox · Ep. 2",
  },
  auraEp3: {
    id: "ZgVsMT4fjME",
    title: "Why People Shy Away From Public Speaking",
    subtitle: "Unbox Your Aura · Episode 3",
    poster: "/images/yt-ZgVsMT4fjME.jpg",
    tag: "Unbox · Ep. 3",
  },
  auraEp4: {
    id: "4j8qAdz1WLU",
    title: "Comfort Zone Is a Beautiful Prison",
    subtitle: "Unbox Your Aura · Episode 4",
    poster: "/images/yt-4j8qAdz1WLU.jpg",
    tag: "Unbox · Ep. 4",
  },
};

export const videoList = Object.values(videos);

export const embedUrl = (id, autoplay = true) =>
  `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1${
    autoplay ? "&autoplay=1" : ""
  }`;
