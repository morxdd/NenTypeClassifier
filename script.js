document.addEventListener('DOMContentLoaded', function(){

})

const questions = [
    {
        id: 1,
        text: "有一天你走在路上看到兩隻被拋棄的黑貓，你會怎麼做？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            { 
                id: "A",
                text: "帶回家"
            },
            {
                id: "B",         
                text: "不帶回家"   
            }
        ]
    },
    {
        id: 2,
        text: "承上題，之後你會怎麼做？ Q1回答「帶回家」的選上三個選項裡的，回答「不帶回家」的下三個選項中的）",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            { 
                id: "A",
                text: "管怎樣都一定要養！"
            },
            {
                id: "B",         
                text: "想養，不過被反對了於是去找別人養"   
            },
            {
                id: "C",         
                text: "不想養，找別人養"   
            },
            {
                id: "D",         
                text: "因為家裡不給養"   
            },
            {
                id: "E",         
                text: "因為黑貓不吉利"   
            },
            {
                id: "F",         
                text: "儘管現在是很可愛，總有一天會厭煩的"   
            },
        ]
    },
    {
        id: 3,
        text: "早上起床後發現天空烏雲密布，聽天氣預報說降雨概率為40%。你出門會帶傘嗎？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            { 
                id: "A",
                text: "覺得肯定會下雨，於是帶上手頭的傘"
            },
            {
                id: "B",         
                text: "覺得大概會下雨，就帶了折疊傘"   
            },
            {
                id: "C",         
                text: "不帶傘"   
            },
        ]
    },
    {
        id: 4,
        text: "和朋友約好出去玩，可是約定時間到了朋友卻沒有來。你能等多少分鐘？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            { 
                id: "A",
                text: "等不了"
            },
            {
                id: "B",         
                text: "5分鐘左右"   
            },
            {
                id: "C",         
                text: "10分鐘左右"   
            },
            {
                id: "D",         
                text: "15分鐘左右"   
            },
            {
                id: "E",         
                text: "20分鐘左右"   
            },
            {
                id: "F",         
                text: "可以一直等下去"   
            },
        ]
    },
    {
        id: 5,
        text: "這次是你遲到了。對方生氣了，你會怎麼做？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            { 
                id: "A",
                text: "道歉，3天內為對方做任何事"
            },
            {
                id: "B",         
                text: "道歉，讓對方心情好起來"   
            },
            {
                id: "C",         
                text: "道歉，下次起早來20分鐘"   
            },
            {
                id: "D",         
                text: "辯解，不認錯"   
            },
            {
                id: "E",         
                text: "辯解，讓對方心情好起來"   
            },
            {
                id: "F",         
                text: "這種事不可能發生"   
            },
        ]
    },

];

function renderQuestion(questionIndex) {

}
function quizStart(){
    //找到說明區塊和題目容器
    let quizInstructions = document.querySelector('.quiz-instructions');
    quizInstructions.style.display = 'none';
    showQuestion();
}

// 先宣告一個變數來追蹤目前在第幾題
let currentQuestionIndex = 0;

function showQuestion(){
    let container = document.querySelector('.container');
    //1. 建立容器
    let questionsContainer = document.createElement('div')
    questionsContainer.classList.add('questions-container');
    
    // 2. 加入題目內容
    let questionContent = document.createElement('div');
    questionContent.classList.add('question-content');
    
    // 從題目陣列中取得目前的題目
    let currentQuestion = questions[currentQuestionIndex];
    
    // 加入題目文字
    questionContent.innerHTML = `
        <h2>第 ${currentQuestion.id} 題</h2>
        <p>${currentQuestion.text}</p>
    `;
    // 加入選項
    let optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    
    currentQuestion.options.forEach(option => {
        let optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <input type="radio" 
                   name="question${currentQuestion.id}" 
                   value="${option.id}">
            <label>${option.text}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });


    // 4. 組合所有元素
    let questionsButtonGroup = document.createElement('div');
    questionsButtonGroup.classList.add('questions-button-group');
    let previousButton = document.createElement('button');
    previousButton.id = "Previous";
    previousButton.innerText = "上一題";
    // previousButton.onclick = previousQuestion;

    let nextButton = document.createElement('button');
    nextButton.id = "next";
    nextButton.innerText = "下一題";
    // nextButton.onclick = nextQuestion;


    questionsButtonGroup.appendChild(previousButton);
    questionsButtonGroup.appendChild(nextButton);

    questionsContainer.appendChild(questionContent);
    questionsContainer.appendChild(optionsContainer);
    questionsContainer.appendChild(questionsButtonGroup);

    // 5. 將整個容器加入到頁面中
    container.appendChild(questionsContainer)
}