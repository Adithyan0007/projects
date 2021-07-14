class Calculator{

    constructor(prevelement,currentelement){
        this.prevelement = prevelement;
        this.currentelement = currentelement;
        this.allclear();
    }
    allclear(){
        this.currentel = '';
        this.prevel='';
        this.opbuttons=undefined;

    }
    delete(){
        this.currentel = this.currentel.toString().slice(0,-1);

    }
    appendnum(number){
        if(number ==='.' && this.currentel.includes('.'))return
        this.currentel = this.currentel.toString() + number.toString();


    }
    selectoperation(operation){
        if(this.currentel === '')return
       
        

        this.operation = operation;
        this.prevel = this.currentel;
        this.currentel = '';


    }
    updatedisplay(){
        this.currentelement.innerText = this.currentel;
        if(this.operation != null){
        this.prevelement.innerText = `${this.prevel} ${this.operation}`
        }else{
            this.prevelement.innerText = '';
        }

    }
    compute(){
        let computation;
        const firstel = parseFloat(this.prevel);
        const secel = parseFloat(this.currentel)
        if(isNaN(firstel)||isNaN(secel)) return
        switch(this.operation){
            case'+':
                computation = firstel + secel;
                break;
            case'-':
                computation = firstel - secel;
                break;
            case'÷':
                computation = firstel/secel;
                break;
            case'*':
                computation = firstel*secel;
                break;
            default:
                return
        }
        this.currentel = computation;
        this.operation = undefined;
        this.prevel = ''

        

    }




}



const numberbutts = document.querySelectorAll('[data-number]');
const opbuttons = document.querySelectorAll('[data-operation]');
const delbutton = document.querySelector('[data-del]');
const equbuton = document.querySelector('[data-equ]');
const allclearbutton = document.querySelector('[data-allclear]')
const prevelement = document.querySelector('[data-prevelem]')
const currentelement = document.querySelector('[data-currentelem]')

const calculator = new Calculator(prevelement,currentelement)
numberbutts.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.appendnum(button.innerText);
        calculator.updatedisplay();
    })
})
opbuttons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.selectoperation(button.innerText);
        calculator.updatedisplay();
    })
})
equbuton.addEventListener('click',() =>{
    calculator.compute();
    calculator.updatedisplay();
})
allclearbutton.addEventListener('click',()=>{
    calculator.allclear();
    calculator.updatedisplay();
})
delbutton.addEventListener('click',() =>{
    calculator.delete();
    calculator.updatedisplay();
})