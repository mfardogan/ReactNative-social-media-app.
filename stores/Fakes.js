import { faker } from "@faker-js/faker";

export const Fakes = {
  stories: Array(50)
    .fill(null)
    .map((v) => ({
      id: faker.string.uuid(),
      user: faker.person.firstName(),
      avatar: faker.image.avatarLegacy(),
      seen: faker.datatype.boolean(),
    })),

  posts: Array(500)
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

  profiles: Array(50)
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
      images: Array(50)
        .fill(null)
        .map((v, _) => ({
          id: faker.string.uuid(),
          image: faker.image.urlPicsumPhotos(),
        })),
    })),
};
