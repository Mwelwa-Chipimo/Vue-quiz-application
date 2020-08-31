

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
                    qstText: "Which of the following must occur to sustain economic growth in the long-run?.",
                    optA: "A. A higher saving rate.",
                    optB: "B. Capital accumulation.",
                    optC: "C. Technological progress.",
                    optD: "D. All of the above.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "All the options in isolation will enable sustainable economic growth. However, the options combined would lead to sustained economic growth."
                },
                {
                    qstId: 2,
                    category: 1,
                    qstText: "Labor productivity is represented by which of the following?",
                    optA: "A. The ratio of output to employment.",
                    optB: "B. Workers per unit of capital.",
                    optC: "C. Capital per worker.",
                    optD: "D. Ratio of output to population.",
                    userInput: null,
                    correctAns: "A",
                    explanation: "Labour productivity assesses how efficient employed workers are at producing output. Therefore it can be calculaed as the ratio of output to employment."
                },
                {
                    qstId: 3,
                    category: 0,
                    qstText: "The Beveridge curve will shift downward (toward the origin) if:",
                    optA: "A. Vacancies are increasingly concentrated in given sector of the economy.",
                    optB: "B. Vacancies are increasingly concentrated in a geographical region.",
                    optC: "C. Information about job vacancies improves.",
                    optD: "D. Unemployment benefits become more generous.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "The beveridge curve shifts downwards if there exists factors that improve Labour matching efficiency. Only option C would improve Labour matching efficiency."
                },
                {
                    qstId: 4,
                    category: 1,
                    qstText: "In country  X,  GDP  falls from R100billionto R95 billion while  output  per  worker  rises from R5000 to R5020. In this economy there has been:",
                    optA: "A. An increase in production and a fall in productivity.",
                    optB: "B. An increase in production and an increase in productivity.",
                    optC: "C. A fall in production and an increase in productivity.",
                    optD: "D. A fall in production and a fall in productivity.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "Changes in output per worker illustrate changes in productivity. Whilst changes in GDP indicate Changes in production."
                }
                // {
                //     qstId: 5,
                //     category: 1,
                //     qstText: "Using the figure below, which of the following statements is/are true? [image here] ) In Norway, there is more variation over the business cycle in unemployment than in the vacancy rate.ii)If the Beveridge curve is positively sloped, this indicates a deterioration in matching in the labour market.iii)The Beveridge curve is shifted to the right in highly unionized economies..",
                //     optA: "A. only i.",
                //     optB: "B. only ii.",
                //     optC: "C. only iii.",
                //     optD: "D. i, ii, iii.",
                //     userInput: null,
                //     correctAns: "B",
                //     explanation: "The correct answer is option B."
                // }
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
