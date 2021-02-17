let enterClub = function(agePerson, currentPeople) {
    if (agePerson <= 17) {
        return "this is a club for adults"
    }
    else if (currentPeople >= 250){
        return "it's to busy now, come back later"
    }
    return "please come in"
}

console.log(enterClub(15, 38))
console.log(enterClub(18, 255))
console.log(enterClub(24, 169))