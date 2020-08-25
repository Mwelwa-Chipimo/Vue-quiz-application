

var QuizAnsExplanationComponent = {
    template: "#quiz-ans-explanation-template",
    props: {
        question: Object
    },

    data() {
        return {
            show: false,
        }
    }
}

let QuizQuestionComponent = {
    components: {
        'quiz-ans-explanation': QuizAnsExplanationComponent
    },

    props: {
        isCompleted: Boolean,
        isDisabled: Boolean,
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

// CHANGE TO BE MADE
// Make quiz form a global component.

var QuizFormComponent = {
    template: '#quiz-form-template',

    components: {
        'quiz-question': QuizQuestionComponent,
        'quiz-report': QuizReportComponent,
        'quiz-ans-explanation': QuizAnsExplanationComponent

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
                    category: 0,
                    qstText: "This is the text for question 1.",
                    optA: "A. This is option A for question 1.",
                    optB: "B. This is option B for question 1.",
                    optC: "C. This is option C for question 1.",
                    optD: "D. This is option D for question 1.",
                    userInput: null,
                    correctAns: "A",
                    explanation: "The correct answer is option A."
                },
                {
                    qstId: 2,
                    category: 1,
                    qstText: "This is the text for question 2.",
                    optA: "A. This is option A for question 2.",
                    optB: "B. This is option B for question 2.",
                    optC: "C. This is option C for question 2.",
                    optD: "D. This is option D for question 2.",
                    userInput: null,
                    correctAns: "B",
                    explanation: "The correct answer is option B."
                },
                {
                    qstId: 3,
                    category: 0,
                    qstText: "This is the text for question 3.",
                    optA: "A. This is option A for question 3.",
                    optB: "B. This is option B for question 3.",
                    optC: "C. This is option C for question 3.",
                    optD: "D. This is option D for question 3.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "The correct answer is option C."
                },
                {
                    qstId: 4,
                    category: 1,
                    qstText: "This is the text for question 4.",
                    optA: "A. This is option A for question 4.",
                    optB: "B. This is option B for question 4.",
                    optC: "C. This is option C for question 4.",
                    optD: "D. This is option D for question 4.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "The correct answer is option D."
                },
                {
                    qstId: 5,
                    category: 1,
                    qstText: "This is the text for question 5.",
                    optA: "A. This is option A for question 5.",
                    optB: "B. This is option B for question 5.",
                    optC: "C. This is option C for question 5.",
                    optD: "D. This is option D for question 5.",
                    userInput: null,
                    correctAns: "A",
                    explanation: "The correct answer is option A."
                }
            ],
            categories: {
                category_1: 0,
                category_2: 0
            }
        }
    },

//  CHANGE TO BE MADE
//  Add a computed property for the category breakdown (It shows users a breakdown of their performance by category).
    computed: {
        isDisabled () {
            return this.isCompleted
        },

        categoryBreakDown () {

        }
    },

    methods: {
        checkSubmission: function() {
            //console.log('Checking the user submission!');
            this.totalAnswered = 0;
            this.errors= [];

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user has answered the question.
                this.questions[i].userInput === null ? this.errors.push(`Question ${this.questions[i].qstId}`) : 
                this.totalAnswered++;
            }
            
            console.log('The length of the questions array is ' + this.questions.length);

            if(this.totalAnswered == this.questions.length) {
                //alert("Your answers are being marked.");
                this.isCompleted = true;
                //alert("Your answers have been marked. You can view the explanations now.");
                this.markAnswers();
            }
        },

        markAnswers: function() {
            this.totalScore = 0;

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user's answer is correct.
                this.questions[i].userInput == this.questions[i].correctAns ? this.totalScore++ && this.categories[this.questions[i].category]++: 
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
