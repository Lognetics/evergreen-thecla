// Central image manifest. All photos are real images of Thecla,
// downloaded from her existing site into /public/images.
// To swap a photo later, drop a new file in /public/images and update the path here.

const base = "/images/";
const img = (f) => base + f;

// Studio portraits (vertical)
export const portraits = {
  hero: img("f0f11978-13ec-4adf-a961-858f07f55af2.jpg"), // blue ankara, arms crossed
  about: img("72c6a212-6bfd-49c3-a003-21eb9c9d393a.jpg"), // teal dress, pearls, smiling
  speaking: img("000aa61a-e57d-4b7d-b033-010f489953fb.jpg"), // pink, on mic
  feature: img("1341a484-d301-452f-b37d-d05efaebd53d.jpg"), // portrait
  // Newer studio / event portraits (beige blazer set)
  confident: img("thecla-confident.jpg"), // beige blazer, arms crossed, confident
  smile: img("thecla-smile.jpg"), // beige blazer, warm smile
  notes: img("thecla-notes.jpg"), // seated, taking notes at an event
};

// Signature event / stage / press shots (landscape)
export const features = {
  press: img("8660b69c-2090-4802-a203-85d14184be83.jpg"), // press interview, green dress
  panel: img("d7ca22cd-d640-4cd0-9e12-59c9335d302b.jpg"), // African Union panel
  stage: img("ce43f44a-5ea4-4cca-acb7-9e038c8874e5.jpg"),
  host: img("cf6cf188-721c-4f61-bff1-1f7e80393b2b.jpg"),
  community: img("26acd45d-aec0-427c-adb5-3579bbae90a3.jpg"),
  advocacy: img("1cbe445e-8391-4779-bd9f-a7fd72138597.jpg"),
};

// Official brand logo (gold mark + wordmark). Two variants:
//   logoDark  → emerald wordmark, for light backgrounds (navbar)
//   logoLight → white wordmark, for dark backgrounds (footer / dark hero)
export const logoDark = img("Evergreenthecla-logo-2.png");
export const logoLight = img("Evergreenthecla-logo.png");

// Full gallery pool (landscape event photography)
export const gallery = [
  "0439bf34-9607-4bb8-9f49-26f7668add29.jpg",
  "0d3e6250-06cc-419d-9b9e-fadc9da1d534.jpg",
  "0f320330-c2bb-4506-9530-1ff5d3978f65.jpg",
  "1cbe445e-8391-4779-bd9f-a7fd72138597.jpg",
  "1d939a75-4c13-4e86-9680-ad7de8cfe232.jpg",
  "26acd45d-aec0-427c-adb5-3579bbae90a3.jpg",
  "26b78fae-1ace-4199-b522-2c177d27e8d7.jpg",
  "2f4e3975-57f0-4cc8-9560-9f6d1294c171.jpg",
  "36bf710d-06bf-4964-ad94-d0010939bc88.jpg",
  "370a5184-3a01-4588-9222-f4a477b6a2d5.jpg",
  "37ad21eb-100a-4196-a64a-b312a888b7d6.jpg",
  "3d4c8cbc-7ad6-4ece-ae7e-700883b5cc72.jpg",
  "43435bfe-a367-4b3a-adba-e5390e1c8e4f.jpg",
  "60dd19c5-2d80-49c0-b590-58dc40477f89.jpg",
  "70ff2d9f-47e2-4289-80f4-9595e2590d74.jpg",
  "75675a70-e257-4e97-b115-50cd3a91d7a2.jpg",
  "79f254dc-965d-467a-8cf1-3dc8af4562c9.jpg",
  "8660b69c-2090-4802-a203-85d14184be83.jpg",
  "95f75604-8ca2-4904-9a01-6e391b538e9e.jpg",
  "a6135b5c-21f4-41a0-a0cd-64081a02648f.jpg",
  "ab4a0458-1e5b-4ada-b1d1-aa913ce87e62.jpg",
  "ab6bdbb5-70e2-492a-868c-cc1f085c29f9.jpg",
  "b5b65a31-0fb3-4510-9268-03783119e14a.jpg",
  "c94d929d-0603-4850-93d7-740bc28c8ad7.jpg",
  "ce43f44a-5ea4-4cca-acb7-9e038c8874e5.jpg",
  "cf6cf188-721c-4f61-bff1-1f7e80393b2b.jpg",
  "d6806bd6-78d6-4e50-892e-bbfd32b70370.jpg",
  "d7ca22cd-d640-4cd0-9e12-59c9335d302b.jpg",
  "dfbcc870-282c-4153-9d2f-33a1197b852f.jpg",
  "e9b3f9af-5714-4784-8784-413607a8f8ff.jpg",
  "WhatsApp-Image-2026-04-14-at-7.04.00-AM.jpeg",
].map(img);

// Deterministic slice helper so pages don't all show the same photos
export const slice = (start, count) => {
  const out = [];
  for (let i = 0; i < count; i++) out.push(gallery[(start + i) % gallery.length]);
  return out;
};
