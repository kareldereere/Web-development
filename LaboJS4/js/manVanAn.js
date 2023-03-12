let tekst = "De man van An geeft geen hand aan ambetante verwanten"
let count = 0
let start = 0
let i = 0
let index = 0
while (i+start <tekst.length){
    index = tekst.indexOf("an",start)
    if ( index !== -1){
        count++
    }
    start = index + 2
    i++
}
console.log("met de gewone indexOF: " + count)


count = 0
let end = tekst.length -1
i = tekst.length-1
while (i>0){
    index = tekst.lastIndexOf("an",end)
    if (index !== -1){
        count++
    }
    end = index -2
    i--
}
console.log("met lastIndexOf: " + count)