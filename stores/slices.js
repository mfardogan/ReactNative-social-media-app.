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
        tags: "#fashion #sport #travelling",
        likeCount: faker.number.int() % 500,
        commentCount: faker.number.int() % 30,
      })),

    profiles: Array(10)
      .fill(null)
      .map((v, index) => ({
        id: index,
        userId: faker.string.uuid(),
        avatar: faker.image.avatarLegacy(),
        nick: faker.internet.userName(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
        followers: faker.number.int() % 1000,
        follewed: faker.number.int() % 1000,
        posts: faker.number.int() % 100,
        images: Array(10)
          .fill(null)
          .map((v, _) => ({
            id: faker.string.uuid(),
            image: faker.image.urlPicsumPhotos(),
          })),
      })),
  },

  reducers: {
    setSeen(state, action) {
      const id = action.payload;
      const story = state.find((e) => e.id === id);
      if (story) {
        story.seen = true;
      }
    },
  },
});

export const { setSeen } = slice.actions;
export default slice.reducer;
