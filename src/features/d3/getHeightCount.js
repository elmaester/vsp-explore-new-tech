const getHeightCount = (people) => {
  const heightCount = people.map((person) => ({
    name: person.name,
    height: parseInt(person.height) || 0,
  }));
  return heightCount;
};

export default getHeightCount;
