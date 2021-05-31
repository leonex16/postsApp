const matchStr = (mainStr, str) => {
	let match = false;
	let mainStrUpCs = mainStr.toUpperCase();
	let strUpcs = str.toUpperCase();
	const strToArr = strUpcs.split(' ');

	for (let i = 0; i < strToArr.length; i++) {
		if (mainStrUpCs.includes(strToArr[i])) {
			match = true;
			break;
		}
	}

	return match;
};

export default matchStr;
