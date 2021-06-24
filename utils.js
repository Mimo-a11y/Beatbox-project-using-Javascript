//making a class beat to control the play
class Beat{
    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
    }
    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

//making a class button to take control of buttons
class Button{
    constructor(color,keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColourInHtml();
        this.element.addEventListener('transitionend',this.transitionEndFunction);
    }

    transitionEndFunction = () => {
        this.deselect();
    }

    //making a function to set border colour of buttons 
    setButtonColourInHtml = () => {
        this.element.style.borderColor = this.color;
    }

    //making a function to change the bakground color and add box shadow upon the press
    select = () => {
        this.element.style.background = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    //making a function to deselect the background color and box shadow
    deselect = () => {
        this.element.style.background = 'transparent';
        this.element.style.boxShadow = 'none';
    }

}