export default function daysToXmas(date) {
	if(!date instanceof Date) {
		throw new Error("Fecha no válida")
	}
	const parseDate = Date.parse(date)
  const Navidad = new Date('Dec 25, 2021')
	const parseNavidad = Date.parse(Navidad)
	const diff = parseNavidad-parseDate
  return Math.ceil(diff/86400000)
}