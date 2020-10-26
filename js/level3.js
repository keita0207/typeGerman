const hamburgermenu = document.querySelector('.hamburgermenu');
const list = document.querySelector('.list');
const showLiteral = document.querySelector('.showLiteral');
const showWords = document.querySelector('.showWords');
const formStart = document.querySelector('.formStart');
const timer = document.querySelector('.timer');
const input = document.querySelector('input');
const result = document.querySelector('.result');
const inputValue = document.getElementById('inputValue');
let time = 20;
let score = document.querySelector('.score');
let error = document.querySelector('.error');
let finalScore = 0;
let errorScore = 0;
let answer = [];
const words = ['reiseführer','schwimmbad','straßenbahn','telefonieren','unterschreiben','ausgegehen','ausgesprachen',
               'windersehen','verheiratet','überweissen','speiselarte','pünktlich','geöffnet','reisebüro','schmecken',
               'einladen','frühstücken','familiename','einzelzimmer','großmutter','diskutieren','anfrubeantworter',
               'Lebensmiffel','mitmachen','geburtsort','glückwunsch','hausaufgabe','international','jugendlich','kennenlernen']
const randomWords = Math.floor(Math.random() * words.length);
let correct = words[randomWords];

hamburgermenu.addEventListener('click',()=>{
    list.classList.toggle('active');
    hamburgermenu.classList.toggle('active');
})

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ß",
            "q", "w", "e", "r", "t", "z", "u", "i", "o", "p","ü",
            "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö","ä",
            "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "スペース"
        ];
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["ß","ü","ä"].indexOf(key) !== -1;
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },
    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

formStart.addEventListener('click',()=>{
    showWords.textContent = words[randomWords];
    showWords.classList.add('show');
    input.focus();
    timer.classList.add('showTimer');
    formStart.classList.add('none'); 
    let id = setInterval(function(){
        countDown();
        if(time < 0){
            clearInterval(id)
            alert('終了！');
            showLiteral.classList.add('none');
            input.classList.add('none');
            result.classList.add('showResult');
        };
    },1000)
});

inputValue.addEventListener('input',() =>{
    if(inputValue.value === correct){
        nextWords();
        finalScore += 10;
    }
    else{
        
    }
});
function nextWords(){
    score.textContent = finalScore;
    answer.push(inputValue.value);
    inputValue.value = '';
    correct++;
    const words = ['reiseführer','schwimmbad','straßenbahn','telefonieren','unterschreiben','ausgegehen','ausgesprachen',
                    'windersehen','verheiratet','überweissen','speiselarte','pünktlich','geöffnet','reisebüro','schmecken',
                    'einladen','frühstücken','familiename','einzelzimmer','großmutter','diskutieren','anfrubeantworter',
                    'Lebensmiffel','mitmachen','geburtsort','glückwunsch','hausaufgabe','international','jugendlich','kennenlernen'];
    const randomWords = Math.floor(Math.random() * words.length);
    correct = words[randomWords];
    showWords.textContent = correct;
};
function countDown(){
    timer.textContent -= 1;
    time -= 1;
    console.log(time);      
};

Keyboard.init();
