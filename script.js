// 初始化狀態
let currentQuestionIndex = 0; // 當前題目索引值
let userAnswers = {}; // 已儲存的答案
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
        text: `承上題，之後你會怎麼做？\nQ1回答「帶回家」的選上三個選項裡的，\n回答「不帶回家」的下三個選項中的）`,
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            {
                id: "A",
                text: "不管怎樣都一定要養！"
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
    {
        id: 6,
        text: "早上醒來你發現自己變成動物了。是什麼動物？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            {
                id: "A",
                text: "綿羊"
            },
            {
                id: "B",
                text: "黑豹"
            },
            {
                id: "C",
                text: "猴子"
            },
            {
                id: "D",
                text: "老虎"
            },
            {
                id: "E",
                text: "狼"
            },
            {
                id: "F",
                text: "珀伽索斯（希臘神話中的飛馬）"
            },
            {
                id: "G",
                text: "獅子"
            },
        ]
    },
    {
        id: 7,
        text: "承 Q6，為什麼這麼想？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            {
                id: "A",
                text: "因為動物占卜裡自己測出來是它　"
            },
            {
                id: "B",
                text: "因為喜歡這種動物"
            },
            {
                id: "C",
                text: "因為想變成這種動物"
            },
            {
                id: "D",
                text: "不為什麼"
            },
        ]
    },
    {
        id: 8,
        text: "你最擅長的是",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            {
                id: "A",
                text: "數理"
            },
            {
                id: "B",
                text: "語文"
            },
            {
                id: "C",
                text: "社會"
            },
            {
                id: "D",
                text: "創作"
            },
            {
                id: "E",
                text: "體育"
            },
            {
                id: "F",
                text: "無"
            },
        ]
    },
    {
        id: 9,
        text: "你最討厭的是？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            {
                id: "A",
                text: "數理"
            },
            {
                id: "B",
                text: "語文"
            },
            {
                id: "C",
                text: "社會"
            },
            {
                id: "D",
                text: "創作"
            },
            {
                id: "E",
                text: "體育"
            },
            {
                id: "F",
                text: "無"
            },
        ]
    },
    {
        id: 10,
        text: "如果你成為了盜賊，第一件想偷的是什麼？",
        type: "single", // 題目類型:"single"(單選)/"multiple"(多選)/"boolean"(是非)
        options: [
            {
                id: "A",
                text: "人命"
            },
            {
                id: "B",
                text: "錢"
            },
            {
                id: "C",
                text: "鑽石、寶石"
            },
            {
                id: "D",
                text: "美術品"
            },
            {
                id: "E",
                text: "古書"
            },
            {
                id: "F",
                text: "絕對不會成為盜賊"
            },
        ]
    },
    {
        id: 11,
        text: "你覺得自己的優點有？",
        type: "multiple", // 這是多選題
        options: [
            { id: "A", text: "規規矩矩" },
            { id: "B", text: "有責任感" },
            { id: "C", text: "被人信賴" },
            { id: "D", text: "有引人注目的特長" },
            { id: "E", text: "對自己要求嚴格" },
            { id: "F", text: "有行動力" },
            { id: "G", text: "朋友多" },
            { id: "H", text: "反覆無常難以捉摸" },
            { id: "I", text: "畫畫唱歌很好" },
            { id: "J", text: "利己主義" },
            { id: "K", text: "擅長精細活" },
            { id: "L", text: "我行我素" }
        ]
    },
    {
        id: 12,
        text: "覺得自己的缺點有？",
        type: "multiple",
        options: [
            { id: "A", text: "沒有協調性" },
            { id: "B", text: "粗心大意" },
            { id: "C", text: "愛說謊" },
            { id: "D", text: "討厭的人有10個以上" },
            { id: "E", text: "對錢斤斤計較" },
            { id: "F", text: "覺得沒道理的事就無法接受" },
            { id: "G", text: "自我中心" },
            { id: "H", text: "為達到目的不擇手段" },
            { id: "I", text: "容易生氣" },
            { id: "J", text: "淚點低" },
            { id: "K", text: "行動遲緩" },
            { id: "L", text: "容易上當" }
        ]
    },
    {
        id: 13,
        text: "什麼樣的人會讓你真的起殺心？",
        type: "multiple",
        options: [
            { id: "A", text: "殺了自己家人的人" },
            { id: "B", text: "殺了自己喜歡的人的人" },
            { id: "C", text: "給了自己最大屈辱的人" },
            { id: "D", text: "想殺自己的人" },
            { id: "E", text: "在自己面前大量濫殺無辜的人" },
            { id: "F", text: "背叛自己的人" }
        ]
    },
    {
        id: 14,
        text: "什麼時候你會哭？",
        type: "multiple",
        options: [
            { id: "A", text: "重要的人死去時" },
            { id: "B", text: "悲傷或是感動時" },
            { id: "C", text: "被甩時" },
            { id: "D", text: "被求婚時" },
            { id: "E", text: "看體育項目感動時" },
            { id: "F", text: "達成某重大目標時" },
            { id: "G", text: "工作出現大失敗時" },
            { id: "H", text: "身邊長時間沒人時" },
            { id: "I", text: "回憶痛苦往事時" },
            { id: "J", text: "自尊被傷害時" },
            { id: "K", text: "被朋友背叛" },
            { id: "L", text: "不大哭" }
        ]
    },
    {
        id: 15,
        text: "覺得魔術師很厲害嗎？",
        type: "boolean",
        options: [
            { id: "Y", text: "是" },
            { id: "N", text: "否" }
        ]
    },
    {
        id: 16,
        text: "用行動力逮捕犯人的警察是不對的嗎？",
        type: "boolean",
        options: [
            { id: "Y", text: "是" },
            { id: "N", text: "否" }
        ]
    },
    {
        id: 17,
        text: "書架上的書順序排得亂七八糟的話會不舒服嗎？",
        type: "boolean",
        options: [
            { id: "Y", text: "是" },
            { id: "N", text: "否" }
        ]
    },
    {
        id: 18,
        text: "絕對不會花心嗎？",
        type: "boolean",
        options: [
            { id: "Y", text: "是" },
            { id: "N", text: "否" }
        ]
    },

    {
        id: 19,
        text: "只要自己好的話其他怎樣都無所謂嗎？",
        type: "boolean",
        options: [
            { id: "Y", text: "是" },
            { id: "N", text: "否" }
        ]
    },
    {
        id: 20,
        text: "不喜歡整理收拾嗎？",
        type: "boolean",
        options: [
            { id: "Y", text: "是" },
            { id: "N", text: "否" }
        ]
    }



];

// DOM 載入完成後初始化測驗
document.addEventListener('DOMContentLoaded', function () {
    initializeQuiz();
});

// 初始化測驗
function initializeQuiz() {
    const startButton = document.getElementById('quiz-start');
    if (startButton) {
        startButton.addEventListener('click', quizStart);
    }
}
// 開始測驗
function quizStart() {
    const instructionsElement = document.querySelector('.quiz-instructions');
    if (instructionsElement) {
        instructionsElement.remove();
    }

    const buttonGroup = document.querySelector('.questions-button-group');
    if (buttonGroup) {
        buttonGroup.innerHTML = `
            <button id="previous" disabled>上一題</button>
            <button id="next" disabled>下一題</button>
        `;

        const previousButton = document.querySelector('#previous');
        const nextButton = document.querySelector('#next');

        if (previousButton) {
            previousButton.addEventListener('click', previousQuestion);
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                if (currentQuestionIndex === questions.length - 1) {
                    showResult();
                } else {
                    nextQuestion();
                }
            });
        }
    }

    showQuestion();
    updateNavigationButtons();
}

// 顯示題目
function showQuestion() {
    const container = document.querySelector('.container');
    const currentQuestion = questions[currentQuestionIndex];

    clearCurrentQuestion();

    const questionsContainer = createQuestionContainer(currentQuestion);
    container.appendChild(questionsContainer);

    loadSavedAnswer();

    // 綁定選項事件
    const options = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    options.forEach(option => {
        option.addEventListener('change', () => {
            saveCurrentAnswer();
            updateNextButtonState();
        });
    });

    // 初始化下一題按鈕狀態
    updateNextButtonState();
}


// 創建題目容器
function createQuestionContainer(question) {
    const container = document.createElement('div');
    container.classList.add('questions-container');

    const content = `
        <div class="question-content">
            <h2>第 ${question.id} 題</h2>
            <p>${question.text}</p>
        </div>
        <div class="options-container">
            ${createOptionsHTML(question)}
        </div>
    `;

    container.innerHTML = content;
    return container;
}


// 創建選項 HTML
function createOptionsHTML(question) {
    return question.options.map(option => {
        const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';
        return `
            <div class="option">
                <input type="${inputType}" 
                       name="question${question.id}" 
                       value="${option.id}"
                       id="option${question.id}_${option.id}">
                <label for="option${question.id}_${option.id}">${option.text}</label>
            </div>
        `;
    }).join('');
}

// 清除當前題目
function clearCurrentQuestion() {
    const existingContainer = document.querySelector('.questions-container');
    if (existingContainer) {
        existingContainer.remove();
    }
}

// 設置事件監聽
function setupEventListeners() {
    // 導航按鈕事件
    const previousButton = document.querySelector('#previous');
    const nextButton = document.querySelector('#next');

    if (previousButton) {
        previousButton.addEventListener('click', previousQuestion);
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            saveCurrentAnswer();
            if (currentQuestionIndex === questions.length - 1) {
                finishQuiz();
            } else {
                nextQuestion();
            }
        });
    }
}

// 儲存當前答案
function saveCurrentAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionId = currentQuestion.id;

    if (currentQuestion.type === 'multiple') {
        const selectedCheckboxes = document.querySelectorAll(`input[name="question${questionId}"]:checked`);
        userAnswers[questionId] = Array.from(selectedCheckboxes).map(cb => cb.value);
    } else {
        const selectedRadio = document.querySelector(`input[name="question${questionId}"]:checked`);
        if (selectedRadio) {
            userAnswers[questionId] = selectedRadio.value;
        }
    }

    // 添加日誌
    console.log(`題目 ${questionId} 儲存答案:`, userAnswers[questionId]);
    console.log('目前所有答案:', userAnswers);
}

// 載入已儲存的答案
function loadSavedAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const savedAnswer = userAnswers[currentQuestion.id];

    if (!savedAnswer) return;

    if (Array.isArray(savedAnswer)) {
        // 多選題
        savedAnswer.forEach(value => {
            const checkbox = document.querySelector(`input[value="${value}"]`);
            if (checkbox) checkbox.checked = true;
        });
    } else {
        // 單選題
        const radio = document.querySelector(`input[value="${savedAnswer}"]`);
        if (radio) radio.checked = true;
    }
}

// 上一題
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        saveCurrentAnswer();
        currentQuestionIndex--;
        showQuestion();
        updateNavigationButtons();
    }
}

// 下一題
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        saveCurrentAnswer();
        currentQuestionIndex++;
        showQuestion();
        updateNavigationButtons();
    }
}

// 更新導航按鈕狀態
// 在最後一題時，"下一題"按鈕會變成"完成"按鈕
function updateNavigationButtons() {
    const previousButton = document.querySelector('#previous');
    const nextButton = document.querySelector('#next');

    if (previousButton) {
        previousButton.disabled = currentQuestionIndex === 0;
    }
    if (nextButton) {
        nextButton.textContent = currentQuestionIndex === questions.length - 1 ? '完成' : '下一題';
        updateNextButtonState();
    }
}

// 選項改變時更新按鈕狀態
function updateNextButtonState() {
    const currentQuestion = questions[currentQuestionIndex];
    const hasAnswer = userAnswers[currentQuestion.id];
    const nextButton = document.querySelector('#next');

    if (nextButton) {
        nextButton.disabled = !hasAnswer;
    }
}

// 完成測驗
function finishQuiz() {
    saveCurrentAnswer();
    console.log('測驗完成！答案：', userAnswers);
    // 這裡可以加入計分邏輯
}

// 顯示結果頁面
function showResult() {
    const container = document.querySelector('.container');
    const buttonGroup = document.querySelector('.questions-button-group');

    // 計算測驗結果
    const result = calculateResult();

    // 清空容器
    container.innerHTML = `
        <div class="result-container">
            <h2>測驗結果</h2>
            <div class="result-content">
                ${result.content}
            </div>
            <button onclick="restartQuiz()">重新測驗</button>
        </div>
    `;

    // 隱藏導航按鈕
    if (buttonGroup) {
        buttonGroup.style.display = 'none';
    }
}
// 先加入計算結果的函式
function calculateResult() {

    // 初始化六大系統的分數
    let scores = {
        強: 0,  // 強系
        具: 0,  // 具系
        放: 0,  // 放系
        操: 0,  // 操系
        變: 0,  // 變系
        特: 0   // 特系
    };

    const systemFullNames = {
        '強': '強化系',
        '放': '放出系',
        '變': '變化系',
        '具': '具現化系',
        '操': '操作系',
        '特': '特質系'
    };

    // 輔助函式：為指定的系統加分
    function addPoints(systems, points) {
        systems.forEach(sys => scores[sys] += points);
    }

    // 輔助函式：為除了指定系統外的所有系統加分
    function addPointsToOthers(excludeSystem, points) {
        Object.keys(scores).forEach(sys => {
            if (sys !== excludeSystem) {
                scores[sys] += points;
            }
        });
    }

    // 處理每個答案並計算分數
    Object.entries(userAnswers).forEach(([questionId, answer]) => {
        const qId = parseInt(questionId);

        // 處理多選題
        if (Array.isArray(answer)) {
            answer.forEach(option => {
                switch (qId) {
                    case 11:  // 第11題
                        switch (option) {
                            case 'A': addPoints(['具'], 30); break;
                            case 'B': addPoints(['強'], 30); break;
                            case 'C': addPoints(['操'], 30); break;
                            case 'D': addPoints(['特'], 30); break;
                            case 'E': addPoints(['放'], 30); break;
                            case 'F': addPoints(['強'], 30); break;
                            case 'G': addPoints(['放'], 30); break;
                            case 'H': addPoints(['變'], 30); break;
                            case 'I': addPoints(['特'], 30); break;
                            case 'J': addPoints(['變'], 30); break;
                            case 'K': addPoints(['具'], 30); break;
                            case 'L': addPoints(['操'], 30); break;
                        }
                        break;
                    case 12:  // 第12題
                        switch (option) {
                            case 'A': addPoints(['強'], 30); break;
                            case 'B': addPoints(['放'], 30); break;
                            case 'C': addPoints(['變'], 30); break;
                            case 'D': addPoints(['具'], 30); break;
                            case 'E': addPoints(['變'], 30); break;
                            case 'F': addPoints(['操'], 30); break;
                            case 'G': addPoints(['特'], 30); break;
                            case 'H': addPoints(['具'], 30); break;
                            case 'I': addPoints(['放'], 30); break;
                            case 'J': addPoints(['特'], 30); break;
                            case 'K': addPoints(['操'], 30); break;
                            case 'L': addPoints(['強'], 30); break;
                        }
                        break;
                    case 13:  // 第13題
                        switch (option) {
                            case 'A': addPoints(['放'], 30); break;
                            case 'B': addPoints(['強'], 30); break;
                            case 'C': addPoints(['具'], 30); break;
                            case 'D': addPoints(['操'], 30); break;
                            case 'E': addPoints(['變'], 30); break;
                            case 'F': addPoints(['特'], 30); break;
                        }
                        break;
                    case 14:  // 第14題
                        switch (option) {
                            case 'A': addPoints(['強'], 30); break;
                            case 'B': addPoints(['具'], 30); break;
                            case 'C': addPoints(['具'], 30); break;
                            case 'D': addPoints(['放'], 30); break;
                            case 'E': addPoints(['操'], 30); break;
                            case 'F': addPoints(['強'], 30); break;
                            case 'G': addPoints(['變'], 30); break;
                            case 'H': addPoints(['變'], 30); break;
                            case 'I': addPoints(['放'], 30); break;
                            case 'J': addPoints(['特'], 30); break;
                            case 'K': addPoints(['特'], 30); break;
                            case 'L': addPoints(['操'], 30); break;
                        }
                        break;
                }
            });
            return;
        }

        // 處理單選題
        switch (qId) {
            case 1:  // 第1題
                if (answer === 'A') addPoints(['強', '放', '操'], 10);
                if (answer === 'B') addPoints(['變', '具', '特'], 10);
                break;
            case 2:  // 第2題
                switch (answer) {
                    case 'A': addPoints(['強'], 30); break;
                    case 'B': addPoints(['操'], 30); break;
                    case 'C': addPoints(['放'], 30); break;
                    case 'D': addPoints(['特'], 30); break;
                    case 'E': addPoints(['具'], 30); break;
                    case 'F': addPoints(['變'], 30); break;
                }
                break;
            case 3:  // 第3題
                switch (answer) {
                    case 'A': addPoints(['具', '操'], 15); break;
                    case 'B': addPoints(['放', '特'], 15); break;
                    case 'C': addPoints(['強', '變'], 15); break;
                }
                break;
            case 4:  // 第4題
                switch (answer) {
                    case 'A': addPoints(['放'], 30); break;
                    case 'B': addPoints(['具'], 30); break;
                    case 'C': addPoints(['強'], 30); break;
                    case 'D': addPoints(['特'], 30); break;
                    case 'E': addPoints(['變'], 30); break;
                    case 'F': addPoints(['操'], 30); break;
                }
                break;
            case 5:  // 第5題
                switch (answer) {
                    case 'A': addPoints(['具'], 30); break;
                    case 'B': addPoints(['放'], 30); break;
                    case 'C': addPoints(['特'], 30); break;
                    case 'D': addPoints(['變'], 30); break;
                    case 'E': addPoints(['操'], 30); break;
                    case 'F': addPoints(['強'], 30); break;
                }
                break;
            case 6:  // 第6題
                switch (answer) {
                    case 'A': addPoints(['放'], 30); break;
                    case 'B': addPoints(['操'], 30); break;
                    case 'C': addPoints(['具'], 30); break;
                    case 'D': addPoints(['強'], 30); break;
                    case 'E': addPoints(['變'], 30); break;
                    case 'F': addPoints(['放'], 30); break;
                    case 'G': addPoints(['特'], 30); break;
                }
                break;
            case 7:  // 第7題
                switch (answer) {
                    case 'A': addPoints(['具', '操'], 15); break;
                    case 'B': addPoints(['強', '放'], 15); break;
                    case 'C': addPoints(['變', '特'], 15); break;
                    case 'D': Object.keys(scores).forEach(sys => scores[sys] += 5); break;
                }
                break;
            case 8:  // 第8題
                switch (answer) {
                    case 'A': addPoints(['具'], 35); break;
                    case 'B': addPoints(['操'], 35); break;
                    case 'C': addPoints(['放'], 30); break;
                    case 'D': addPoints(['特'], 30); break;
                    case 'E': addPoints(['強'], 30); break;
                    case 'F': addPoints(['變'], 30); break;
                }
                break;
            case 9:  // 第9題
                switch (answer) {
                    case 'A': addPoints(['強'], 30); break;
                    case 'B': addPoints(['特'], 30); break;
                    case 'C': addPoints(['變'], 30); break;
                    case 'D': addPoints(['操'], 30); break;
                    case 'E': addPoints(['具'], 30); break;
                    case 'F': addPoints(['放'], 30); break;
                }
                break;
            case 10:  // 第10題
                switch (answer) {
                    case 'A': addPoints(['變'], 30); break;
                    case 'B': addPoints(['強'], 30); break;
                    case 'C': addPoints(['放'], 30); break;
                    case 'D': addPoints(['特'], 30); break;
                    case 'E': addPoints(['具'], 30); break;
                    case 'F': addPoints(['操'], 30); break;
                }
                break;
            // 處理是非題
            case 15:  // 第15題
                if (answer === 'Y') addPoints(['變'], 30);
                else addPointsToOthers('變', 6);
                break;
            case 16:  // 第16題
                if (answer === 'Y') addPoints(['操'], 30);
                else addPointsToOthers('操', 6);
                break;
            case 17:  // 第17題
                if (answer === 'Y') addPoints(['具'], 30);
                else addPointsToOthers('具', 6);
                break;
            case 18:  // 第18題
                if (answer === 'Y') addPoints(['強'], 30);
                else addPointsToOthers('強', 6);
                break;
            case 19:  // 第19題
                if (answer === 'Y') addPoints(['特'], 30);
                else addPointsToOthers('特', 6);
                break;
            case 20:  // 第20題
                if (answer === 'Y') addPoints(['放'], 30);
                else addPointsToOthers('放', 6);
                break;
        }
    });


    // 將系統按分數排序（由高到低）
    const sortedSystems = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .map(([system, score]) => ({ system, score }));


    // 生成結果內容的HTML
    const resultContent = `
        <h3>您的測驗結果：</h3>
        <div class="scores-container">
            ${sortedSystems.map(({system, score}) => `
                <div class="score-item">
                    <span class="system">${systemFullNames[system]}：</span>
                    <span class="score">${score}分</span>
                </div>
            `).join('')}
        </div>
        <p>主系統：<strong>${systemFullNames[sortedSystems[0].system]} (${sortedSystems[0].score}分)</strong></p>
        <p>副系統：<strong>${systemFullNames[sortedSystems[1].system]} (${sortedSystems[1].score}分)</strong></p>
    `;
    
    return {
        content: resultContent,  // HTML格式的結果內容
        scores: scores,          // 原始分數資料
        mainSystem: {
            system: systemFullNames[sortedSystems[0].system],
            score: sortedSystems[0].score
        },
        subSystem: {
            system: systemFullNames[sortedSystems[1].system],
            score: sortedSystems[1].score
        }
    };
}