export default function wrapGifts(gifts) {
  const widthPresent = gifts[0].length+2
  const linePresent = ()=>{
    let line=''
    for(let i=1;i<=widthPresent;i++){
      line+='*'
    }
    return line
  }
  const present = gifts.map(gift => '*'+gift+'*')
  present.unshift(linePresent())
  present.push(linePresent())
  return present
}