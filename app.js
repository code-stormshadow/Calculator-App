let displayAnswer = document.querySelector('#answer');
let buttonData = document.querySelectorAll('[data-val]');
let clear = document.querySelector('#clear');
let back = document.querySelector('#back');

(function calculator(){
    toEval = '';
    buttonData.forEach(function(button) {
        button.onclick = function() {
            
            buttonVal = parseInt(this.dataset.val) || this.dataset.val;
            if (buttonVal != '=') {

                if (this.dataset.val.match(/[+\-*\/]/)) {
                    buttonVal = ' ' + buttonVal + ' '
                }
                
                toEval += buttonVal;
                if (!(toEval.trim().match(/^[+*\/]/))) {
                    displayAnswer.innerHTML = toEval;
                } else {
                    toEval = '';
                    displayAnswer.innerHTML = '';
                }
            }
            try {
                if (buttonVal == '=' && toEval !== '') {
                    const answerVal = eval(toEval.replace(/\s+/g, ''));
                    displayAnswer.innerHTML = answerVal;
                    toEval = '';
                }
            } catch(e) {
                displayAnswer.innerHTML = e.message;
                toEval = '';
            }
        
        }
    })

    clear.onclick = function() {
        toEval = '';
        displayAnswer.innerHTML = '';
    }
    
    back.onclick = function() {
        toEval = toEval.slice(0,-1);
        displayAnswer.innerHTML = toEval;
    }

}())


let noteStyle = 0;

function animateNote() {
    let note = document.querySelector("#footText");
    note.style.position = 'absolute';
    note.style.left = '0px'
    
    intervalHandle = setInterval(function(){
        noteStyle += 5;
        note.style.left = `${noteStyle}px`;    
        if (note.style.left == "420px") {
            note.style.left = "0px";
            noteStyle = 0;
        }
    }, 100);
    
}

window.onload = function() {
    animateNote();
    setInterval(function(){
        $( "#title" ).effect( "shake", "slow" );
    }, 5000);
    
}
