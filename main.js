let QuizQuestionComponent = {

    props: {
        isCompleted: Boolean,
        question: Object
    },

    template: '#quiz-question-template'
}

var QuizReportComponent  = {
    template: '#quiz-report-template',
    props: {
        isCompleted: Boolean
    }

}

var QuizFormComponent = {
    template: '#quiz-form-template',

    components: {
        'quiz-question': QuizQuestionComponent,
        'quiz-report': QuizReportComponent
    },

    data() {
        return {
            isCompleted: false,
            totalAnswered: 0,
            totalScore: 0,
            errors: [],
            questions: [
                {
                    qstId: 1,
                    qstText: "This is the text for question 1.",
                    optA: "This is option A for question 1.",
                    optB: "This is option B for question 1.",
                    optC: "This is option C for question 1.",
                    optD: "This is option D for question 1.",
                    userInput: null,
                    correctAns: "A",
                    explanation: "The correct answer is option A."
                },
                {
                    qstId: 2,
                    qstText: "This is the text for question 2.",
                    optA: "This is option A for question 2.",
                    optB: "This is option B for question 2.",
                    optC: "This is option C for question 2.",
                    optD: "This is option D for question 2.",
                    userInput: null,
                    correctAns: "B",
                    explanation: "The correct answer is option B."
                },
                {
                    qstId: 3,
                    qstText: "This is the text for question 3.",
                    optA: "This is option A for question 3.",
                    optB: "This is option B for question 3.",
                    optC: "This is option C for question 3.",
                    optD: "This is option D for question 3.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "The correct answer is option C."
                },
                {
                    qstId: 4,
                    qstText: "This is the text for question 4.",
                    optA: "This is option A for question 4.",
                    optB: "This is option B for question 4.",
                    optC: "This is option C for question 4.",
                    optD: "This is option D for question 4.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "The correct answer is option D."
                },
                {
                    qstId: 5,
                    qstText: "This is the text for question 5.",
                    optA: "This is option A for question 5.",
                    optB: "This is option B for question 5.",
                    optC: "This is option C for question 5.",
                    optD: "This is option D for question 5.",
                    userInput: null,
                    correctAns: "A",
                    explanation: "The correct answer is option A."
                }
            ]
        }
    },

    methods: {
        checkSubmission: function() {
            console.log('Checking the user submission!');
            this.totalAnswered = 0;
            this.errors= [];

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user has answered the question.
                this.questions[i].userInput === null ? this.errors.push(`Question ${this.questions[i].qstId}`) : 
                this.totalAnswered++;
            }
            
            console.log('The length of the questions array is ' + this.questions.length);

            if(this.totalAnswered == this.questions.length) {
                alert("Your answers are being marked.");
                this.isCompleted = true;
                alert("Your answers have been marked. You can view the explanations now.");
                this.markAnswers();

            }
        },

        markAnswers: function() {
            this.totalScore = 0;

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user's answer is correct.
                this.questions[i].userInput == this.questions[i].correctAns ? this.totalScore++ : 
                console.log(`You got question ${this.questions[i].qstId} wrong.`);
            }
        }
    }
}

var Quiz = new Vue({
    el: '#app',
    components: {
        'quiz-form': QuizFormComponent
    }
})
