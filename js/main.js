'use strict';
var gQuests;

var gCurrQuestIdx;

function createQuests() {
    var quests = [
        { id: 1, opts: ['A male peacock', 'A female peacock', 'Yossi'], correctOptIndex: 0 },
        { id: 2, opts: ['David Ben Ishai', 'A Sloath'], correctOptIndex: 1 }
    ]

    return quests
}

function renderQuest(currQuestIdx) {
    var elImg = document.querySelector('img');
    elImg.src = './img/' + (currQuestIdx) + '.jpeg';
    renderButtons();
    // document.querySelector('.button0').innerText = gQuests[currQuestIdx].opts[0];
    // document.querySelector('.button1').innerText = gQuests[currQuestIdx].opts[1];
}

// todo renderButtons()
// strHtml = ''
// for length = gQuests[currQuestIdx].opt.length
// strHtml+=`<button class = "restartBtn" onclick ="checkAnswer(${i+1})">${gQuests[currQuestIdx].opts[i]} </button>`
// buttons div innerHtml

function initGame() {
    gQuests = createQuests()
    gCurrQuestIdx = 0;
    document.querySelector('.restartBtn').style.display = 'none';
    renderQuest(gCurrQuestIdx);
}

function renderButtons() {
    var strHtml = '';
    var loopLength = gQuests[gCurrQuestIdx].opts.length;
    for (var i = 0; i < loopLength; i++) {
        // var style = 'left:' + (i * 100);
        strHtml += `<button class = "buttons" onclick ="checkAnswer(${i})">${gQuests[gCurrQuestIdx].opts[i]} </button>`
    }
    document.querySelector('.buttons').innerHTML = strHtml;
}

function checkAnswer(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        alert('You chose the correct answer! Moving to next Question...')
        gCurrQuestIdx++;
        if (gCurrQuestIdx === gQuests.length) {
            alert('You are victorius!!')
            document.querySelector('.restartBtn').style.display = 'block';
        } else {
            renderQuest(gCurrQuestIdx);
        }

    } else {
        alert('Not true...');
    }
}