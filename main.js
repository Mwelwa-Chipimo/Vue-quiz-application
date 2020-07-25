Vue.component('question', {

    props: {
        qst: Object
    },

    template: `
    <div>
    <form @submit.prevent="createQuestion" class="mt-5" method="post">

                <fieldset class="form-group">
                    <div class="row">

                    <div class="col-sm-12">
                        <h4>{{qst.text}}</h4>
                    </div>

                    <div class="col-sm-12">
                        <div class="form-check">
                        <input v-model="qst.userInput" class="form-check-input" type="radio" name="userInput" id="gridRadios1" value="A">
                        <label class="form-check-label" for="gridRadios1">
                            {{qst.optA}}
                        </label>
                        </div>
                        <div class="form-check">
                        <input v-model="qst.userInput" class="form-check-input" type="radio" name="userInput" id="gridRadios1" value="B">
                        <label class="form-check-label" for="gridRadios1">
                            {{qst.optB}}
                        </label>
                        </div>
                        <div class="form-check">
                        <input v-model="qst.userInput" class="form-check-input" type="radio" name="userInput" id="gridRadios1" value="C">
                        <label class="form-check-label" for="gridRadios1">
                            {{qst.optC}}
                        </label>
                        </div>
                        <div class="form-check">
                        <input v-model="qst.userInput" class="form-check-input" type="radio" name="userInput" id="gridRadios1" value="D">
                        <label class="form-check-label" for="gridRadios1">
                            {{qst.optD}}
                        </label>
                        </div>
                    </div>
                    </div>
                </fieldset>
            </form>
            </div>
        `


})

var Quiz = new Vue({
    el: '#app',
    data: {
        questions: [
            {
                id: 1,
                text: "This is the text for question 1.",
                optA: "This is option A for question 1.",
                optB: "This is option B for question 1.",
                optC: "This is option C for question 1.",
                optD: "This is option D for question 1.",
                userInput: null,
                correctAns: "A",
                explanation: "The correct answer is option A."
            },
            {
                id: 2,
                text: "This is the text for question 2.",
                optA: "This is option A for question 2.",
                optB: "This is option B for question 2.",
                optC: "This is option C for question 2.",
                optD: "This is option D for question 2.",
                userInput: null,
                correctAns: "B",
                explanation: "The correct answer is option B."
            },
            {
                id: 3,
                text: "This is the text for question 3.",
                optA: "This is option A for question 3.",
                optB: "This is option B for question 3.",
                optC: "This is option C for question 3.",
                optD: "This is option D for question 3.",
                userInput: null,
                correctAns: "C",
                explanation: "The correct answer is option C."
            },
            {
                id: 4,
                text: "This is the text for question 4.",
                optA: "This is option A for question 4.",
                optB: "This is option B for question 4.",
                optC: "This is option C for question 4.",
                optD: "This is option D for question 4.",
                userInput: null,
                correctAns: "D",
                explanation: "The correct answer is option D."
            },
            {
                id: 5,
                text: "This is the text for question 5.",
                optA: "This is option A for question 5.",
                optB: "This is option B for question 5.",
                optC: "This is option C for question 5.",
                optD: "This is option D for question 5.",
                userInput: null,
                correctAns: "A",
                explanation: "The correct answer is option A."
            }
        ],

        questionNum: 1,     
    },

    methods: {
        
    }
})
