export default function shouldBuyFidelity(times) {
  const currentPrice = times*12
  let fidelity = 250
  for(let i=1;i<=times;i++){
    fidelity += 12*Math.pow(0.75,i)
  }
  return fidelity<currentPrice ? true : false
}