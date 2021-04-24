const nationsList = randomPersonData.map(item => {
    const nations = item.region
    return nations
})
console.log(nationsList)

function showNationsList() {
     
    list = document.getElementById("nations-list")
    results = nationsList.sort()
    results.forEach((movies) => {
        const li = document.createElement("li")
        const liInfo = document.createTextNode (
        movies
    )
    li.appendChild(liInfo)
    list.append(li)
    })
  }

const steenList = randomPersonData.filter(item => {
    const vrouw = item.gender === "female"
    return vrouw
})

console.log(steenList)

const up30 = steenList.filter(item => {
    const both = item.age >= 30
    return both
})

console.log(up30)


function showSteenList() {
   const list = document.getElementById("steenbok-list")
   const results = up30

   results.forEach((movies) => {
    const li = document.createElement("li")
    const liInfo = document.createTextNode (
        movies.name    
    )
    li.appendChild(liInfo)
    list.append(li)
   })
}
