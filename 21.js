export default function canCarry(capacity, trip) {
  let canCarryPresents = true
  let chargedPresents = 0
  const stopsToDischarge = {}
  trip.forEach((stop) => {
    if (canCarryPresents) {
      const [presentsToCarry, origin, destiny] = stop
      Object.defineProperty(stopsToDischarge, destiny, {
        value: presentsToCarry,
        enumerable: true,
        writable: true
      })
      if (presentsToCarry > capacity) {
        canCarryPresents = false
      } else {
        const currentStop = origin.toString()
        if (stopsToDischarge.hasOwnProperty(currentStop)) {
          const presentToDischarge = stopsToDischarge.currentStop
          chargedPresents -= presentToDischarge
        }
        presentsToCarry + chargedPresents > capacity
          ? (canCarryPresents = false)
          : (chargedPresents += presentsToCarry)
      }
    }
  })
  return canCarryPresents
}