export default function countPackages(carriers, carrierID) {
  const calculatePackages = (id) => {
    const [carrier] = carriers.filter(carrier => carrier[0] === id)
    const packages = carrier[1]
    const subordinateCarriers = carrier[2]
    if(subordinateCarriers.length>0){
      let subordinatePackages = 0
      subordinateCarriers.forEach(subordinate => {
        subordinatePackages+=calculatePackages(subordinate)
      })
      return packages+subordinatePackages
    } 
    return packages
  }
  return calculatePackages(carrierID)
}