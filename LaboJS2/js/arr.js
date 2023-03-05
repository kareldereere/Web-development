let arr = ['fm1','fm2','fm3','fm4','fm5']
const voegNaamToe = (nieuweNaam) => {
    arr.push(nieuweNaam)
}

console.log("lengte",arr.length)
console.log("eerste", arr[0])
console.log("derde", arr[2])
console.log("vijfde", arr[4])

nieuweNaam = window.prompt("nieuiwe naam?","onbekend")
voegNaamToe(nieuweNaam)

console.log(arr.join())