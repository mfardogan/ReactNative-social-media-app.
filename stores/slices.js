import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "app",
  initialState: {
    stories: Array(10)
      .fill(null)
      .map((v) => ({
        id: faker.string.uuid(),
        user: faker.person.firstName(),
        image: faker.image.urlPicsumPhotos(),
        avatar: faker.image.avatarLegacy(),
        seen: faker.datatype.boolean(),
      })),

    posts: Array(20)
      .fill(null)
      .map((v, _) => ({
        id: faker.string.uuid(),
        avatar: faker.image.avatarLegacy(),
        name: faker.person.firstName(),
        image: faker.image.urlPicsumPhotos(),
        surname: faker.person.lastName(),
        text: faker.string.sample(),
        location: faker.location.state() + "#" + faker.location.country(),
        tags: "#fashion #sport #travelling",
        likeCount: faker.number.int() % 500,
        commentCount: faker.number.int() % 30,
      })),

    profiles: Array(10)
      .fill(null)
      .map((v, index) => ({
        id: index,
        country: faker.location.country() + "#" + faker.location.city(),
        userId: faker.string.uuid(),
        avatar: faker.image.avatarLegacy(),
        nick: faker.internet.userName(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
        followers: faker.number.int() % 1000,
        follewed: faker.number.int() % 1000,
        posts: faker.number.int() % 100,
        stories: Array(10)
          .fill(null)
          .map((v) => ({
            id: faker.string.uuid(),
            image: faker.image.urlPicsumPhotos(),
            title: faker.location.city().substring(0, 10),
          })),
        images: Array(12)
          .fill(null)
          .map((v, _) => ({
            id: faker.string.uuid(),
            likes: faker.number.int() % 100,
            comments: faker.number.int() % 50,
            image: faker.image.urlPicsumPhotos(),
          })),
      })),

    activeUser: {
      userId: faker.string.uuid(),
      country: "Turkey#Kocaeli",
      avatar: "https://avatars.githubusercontent.com/u/23241672?v=4",
      nick: "Mf.ardoğan",
      name: "M.furkan",
      surname: "ARDOĞAN",
      email: "mfardogan@gmail.com",
      followers: faker.number.int() % 500,
      follewed: faker.number.int() % 300,
      posts: faker.number.int() % 30,
      stories: Array(10)
        .fill(null)
        .map((v) => ({
          id: faker.string.uuid(),
          image: faker.image.urlPicsumPhotos(),
          title: faker.location.city().substring(0, 10),
        })),
      images: Array(12)
        .fill(null)
        .map((v, _) => ({
          id: faker.string.uuid(),
          image: faker.image.urlPicsumPhotos(),
        })),
    },
  },

  reducers: {
    setSeen(state, action) {
      const id = action.payload;
      const story = state.stories.find((e) => e.id === id);

      if (story) {
        story.seen = true;
      }
    },
    editProfile(state, action) {
      const data = action.payload;
      const user = state.activeUser;
      user.name = data.name;
      user.surname = data.surname;
      user.nick = data.nick;
      user.country = data.country;
    },
  },
});

export const { setSeen, editProfile } = slice.actions;
export default slice.reducer;
