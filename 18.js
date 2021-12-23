export default function fixFiles(files) {
  const repeat={}
  return files.map(file=>{
    if(repeat.hasOwnProperty(file)) {
       const value = repeat[file]
       repeat[file] = value+1
       return `${file}(${value})`
    } else {
      Object.defineProperty(repeat,file,{value:1, enumerable:true, writable:true})
      return file
    }
  })
}