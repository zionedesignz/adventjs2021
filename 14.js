export default function missingReindeer(ids) {
  const totalLength = ids.length+1
  let idMissed=null
  for(let i=0;i<totalLength;i++){
    ids.includes(i)
      ? ''
      : (idMissed=i)
  }
  return idMissed
}