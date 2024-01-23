const pianoKeys = document.querySelectorAll(".piano-keys .key"); //pegar todos os elementos que tenham a classe .piano-keys key e jogar na const.

const volumeSlider = document.querySelector(".volume-slider input");

const keyCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=> {clickedKey.classList.remove("active");}, 150);
}

pianoKeys.forEach((key) => {
    //dataset possibilita pegar "variáveis" do html e acessar pelo JS-->
    key.addEventListener("click",() => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => { //deixar apenas as teclas mapeadas serem executadas.
    if(mapedKeys.includes(e.key)){
    playTune(e.key); //"e significa evento."
    }
})

const handleVolume = (e) => { //Controlador de volume
    audio.volume = e.target.value;
}
const showHideKeys = () => {
    pianoKeys.forEach((key => key.classList.toggle("hide")))
}

volumeSlider.addEventListener("input", handleVolume);

keyCheck.addEventListener("click", showHideKeys);