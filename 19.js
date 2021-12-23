export default function learn(time, courses) {
  const optionalCourses = courses.filter((course) => course < time)
  if (optionalCourses.length === 0) {
    return null
  } else {
    const selectCourses = []
    let maxProfitHours = 0
    courses.forEach((courseA, indA) => {
      if(courseA<time) {
        const restTime = time - courseA
        courses.forEach((courseB, indB) => {
          if (courseB <= restTime &&
              indA !== indB &&
              courseA + courseB > maxProfitHours &&
              courseA+courseB !== maxProfitHours
          ) {
            maxProfitHours = courseA+courseB
            selectCourses[0] = indA
            selectCourses[1] = indB
          }
        })
      }
    })
    return selectCourses
  }
}