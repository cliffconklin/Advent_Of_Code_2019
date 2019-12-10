// Day 2

const fs = require('fs')
const input = fs
    .readFileSync('day2_input.txt', 'utf8')
    .split(',')
    .map(Number)
let input2 = input.slice()

const opCodeSize = 4
const add = 1
const multiply = 2
const halt = 99

let processOpcode = function(input, index) {
    let inputPos1 = input[index + 1]
    let inputPos2 = input[index + 2]
    let outputPos = input[index + 3]
    let opCode = input[index]
    let input1 = input[inputPos1]
    let input2 = input[inputPos2]

    let output = 0
    if (opCode === add) {
        output = input1 + input2
        input[outputPos] = output
    } else if (opCode === multiply) {
        output = input1 * input2
        input[outputPos] = output
    } else if (opCode === halt) {
        output = halt
    }
    return output
}

let myComputer = function(input) {
    let opcodeIndex = 0
    let answer = 0
    while (input[opcodeIndex] != halt) {
        answer = processOpcode(input, opcodeIndex)
        opcodeIndex += opCodeSize
    }
    return answer
}
let dayTwoAnswer = myComputer(input)
console.log(`Day 2 Answer: ${dayTwoAnswer}`)

// Inputs are put at positions 1 and 2 in the input
// array.  The 12,02 sequence was used for part 1,
// in part 2 we need to figure out what inputs in
// positions 1 and 2 will produce an output that will
// be storred at location 0 that equals 19690720
let findNounVerb = function(input, target) {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            let opcodeIndex = 0
            let myProgram = input.slice()
            myProgram[1] = noun
            myProgram[2] = verb
            while (myProgram[opcodeIndex] != halt) {
                processOpcode(myProgram, opcodeIndex)
                opcodeIndex += opCodeSize
            }
            if (myProgram[0] === target) {
                console.log(
                    `Day 2 Part2 Answer  NOUN: ${noun} VERB: ${verb} (${noun}${verb})`
                )
                return
            }
        }
    }
}
findNounVerb(input2, 19690720)
