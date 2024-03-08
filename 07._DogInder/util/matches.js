import { fakerEN_IN } from "@faker-js/faker";

console.log(fakerEN_IN.person.fullName());
console.log(fakerEN_IN.person.bio());
/* console.log(fakerEN_IN.person.location.streetAdress()) */
/* console.log(fakerEN_IN.person.location.city()) */

export default async function getMatches(numberOfMatches = 5) {
  console.log("matching...");
  const promises = [];
  for (let i = 0; i <= numberOfMatches; i++) {
    const promise = fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json());
    promises.push(promise);

    /* .then((result) => console.log(result)) */
  }
  console.log(promises);
  const results = await Promise.all(promises); // køre parallet. men det
  const matches = results.map((match) => ({ ...match, ...getIndianProfile() })); // pakkes ind i en paranteser, så det bliver en "unit"
  console.log(matches);

  return matches;
}

function getIndianProfile() {
  return {
    name: fakerEN_IN.person.fullName(),
    bio: fakerEN_IN.person.bio(),
    streetAddress: fakerEN_IN.location.streetAddress(),
    city: fakerEN_IN.location.city(),
  };
}
