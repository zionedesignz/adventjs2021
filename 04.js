export default function createXmasTree(height) {
	if (height > 100 || height < 1) {
		throw new Error("Altura no válida")
	}

	let tree = ''
	let trunk = ''
	const width = height * 2 - 1 

	const drawTree = (line) => {
		let lineTree = ''
		for (let i = 1; i <= width; i++) {
			if(line===0){
				i === height ? (lineTree += '*') : (lineTree += '_')
			} else {
				i<(height-line) || i>(height+line) ? (lineTree += '_') : (lineTree += '*')
			}
			i === width ? (lineTree += "\n") : ""
		}
		return lineTree;
	}

	const drawTrunk = (line) => {
		let lineTrunk = ''
		for (let i = 1; i <= width; i++) {
			i === height ? (lineTrunk += '#') : (lineTrunk += '_')
			i === width && line !==2 ? (lineTrunk += '\n') : ''
		}
		return lineTrunk
	}

	for (let i = 0; i < height; i++) {
		tree += drawTree(i)
	}
	for (let i = 1; i<=2; i++) {
		trunk += drawTrunk(i)
	}

	return `${tree}${trunk}`
}

console.log(createXmasTree(7))