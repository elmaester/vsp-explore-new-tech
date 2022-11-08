import people from '../../data/people';

const getHairCount = () => {
	const hairCountObj = {};
	people.forEach((person) => {
		if (!hairCountObj[person.hair_color]) {
			hairCountObj[person.hair_color] = 1;
		} else {
			hairCountObj[person.hair_color]++;
		}
	});
	const hairCountArr = [];
	for (const [color, count] of Object.entries(hairCountObj)) {
		hairCountArr.push({ color, count });
	}
	return hairCountArr;
};

export default getHairCount;
