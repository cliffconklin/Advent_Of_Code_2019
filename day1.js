// Day 1
// var fs = require('fs')

// try {
//     var contents = fs.readFileSync('./day1_input.txt', 'utf8')
// } catch (err) {
//     console.error(err)
// }
// const input = contents.split('\n')
// console.log(input)

const fs = require('fs')
const input = fs
    .readFileSync('day2_input.txt', 'utf8')
    .split(',')
    .map(Number)

console.log(input)

class fuelCalculator {
    constructor() {
        this.totalFuel = 0
        this.moduleFuel = 0
    }
    fuelRequiredForModule(mass) {
        this.totalFuel = this.totalFuel + (Math.floor(mass / 3) - 2)
    }
    fuelRequiredForModuleRecur(mass) {
        if (mass < 7) {
            return this.moduleFuel
        }
        let fuel = Math.floor(mass / 3) - 2
        this.moduleFuel = this.moduleFuel + fuel
        //console.log (fuel)
        return this.fuelRequiredForModuleRecur(fuel)
    }
    getTotalFuel() {
        return this.totalFuel
    }
}

let fuelNeeded = new fuelCalculator()
for (let i = 0; i < input.length; i++) {
    fuelNeeded.fuelRequiredForModule(input[i])
}
console.log(`Day 1 Part One Answer: ${fuelNeeded.totalFuel}`)

let fuelNeededRecur = new fuelCalculator()
for (let i = 0; i < input.length; i++) {
    let moduleFuel = fuelNeededRecur.fuelRequiredForModuleRecur(input[i])
    fuelNeededRecur.totalFuel += moduleFuel

    // Reset module fuel for next time
    fuelNeededRecur.moduleFuel = 0
}
console.log(`Day 1 Part Two Answer: ${fuelNeededRecur.totalFuel}`)
