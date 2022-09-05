// random questions with array of questions
const questions = [
    "Question 1 goes here?",
    "Question 2 goes here?",
    "Question 3 goes here?",
    "You can write a new question here...",
];

// ask function goes through the array
const ask = ( index = 0) => {
    process.stdout.write("\n" + questions[index] + "\n");
    process.stdout.write("Answer: ");
}
ask();

// Array that saves answers
const answer = []

// "on" keeps my function running
process.stdin.on("data", data => {
    
    // getting the answer and saving it an array
    answer.push(data.toString().trim());

    // it verifis if the total of questions are answered, if not, ask again
    if (answer.length < questions.length) {
        ask(answer.length);
    } else {
        // it terminates the process and calls the next function
        process.exit();
    }
});

// When exit in the line 30 finishs, it will call this callback function
process.on("exit", () => {
    console.log(`
        Fantastic, Your Name!

        Your answer goes here: 
        ${answer[0]}
        
        Your answer goes here: 
        ${answer[1]}
        
        Your answer goes here: 
        ${answer[2]}
        
        Your answer goes here: 
        ${answer[3]}

        Come back tomorrow for new answers.`)
});
