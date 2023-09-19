let cardNumber = document.getElementById("FrontCardNumber");
const numberInp = document.getElementById("cardNumberInp");

let cardName = document.getElementById("FrontCardName");
const cardNameInp = document.getElementById("cardNameInp");

let cardMonth = document.getElementById("FrontCardMonth");
const cardMonthInp = document.getElementById("monthInp");

let cardYear = document.getElementById("FrontCardYear");
const cardYearInp = document.getElementById("yearInp");

let cardCVC = document.getElementById("BackCardCVC");
const cardCVCInp = document.getElementById("CVCInp");

const CardNameInpError = document.getElementById("CardNameInpError");
const CardNumberInpError = document.getElementById("CardNumberInpError");
const CardDateInpError = document.getElementById("CardDateInpError");
const CardCVCInpError = document.getElementById("CVCInpError"); 


const submitBtn = document.getElementById("Submit__Btn");
const confirmBtn = document.getElementById("Confirm__Btn");

const Form = document.getElementById("InputForm");

const FormSubmittedNotification = document.getElementById("FormSubmittedNotification");

//-------------Assign Inputs to Credit Card Visualization------------------//

function setCardNumber(e) {
    cardNumber.innerText = format(numberInp.value);
}
function setCardName(e) {
    cardName.innerText = cardNameInp.value;
}
function setCardMonth(e) {
    cardMonth.innerText = cardMonthInp.value;
}
function setCardYear(e) {
    cardYear.innerText = cardYearInp.value;
}
function setCardCVC(e) {
    cardCVC.innerText = cardCVCInp.value;
}
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

function handleSubmit(e){
    e.preventDefault();
    let FormValid = true;
    /*CHECK Card Name Input */
    if(cardNameInp.value.length == 0){
        // add red border colors
        GiveBorderErrorColor(cardNameInp);
        //show error msg
        CardNameInpError.style.display="block";
        FormValid = false;
    }
    else {
       RemoveBorderErrorColor(cardNameInp);
        CardNameInpError.style.display="none";
    }

    //CHECK Card Number Input 
    if(numberInp.value.length != 16 ){

        GiveBorderErrorColor(numberInp);
        ShowErrorMsg(CardNumberInpError);
        FormValid = false;
    }
    else {
        RemoveBorderErrorColor(numberInp);
        RemoveErrorMsg(CardNumberInpError);
    }

    //CHECK Card Month Input
    if(cardMonthInp.value.length != 2 || cardMonthInp.value >12 || cardMonthInp.value == 0){

    GiveBorderErrorColor(cardMonthInp);
    ShowErrorMsg(CardDateInpError);
    FormValid = false;
    }
    else {
        CardDateInpError.style.display="none";
        RemoveBorderErrorColor(cardMonthInp);
    }

    //CHECK Card Year Input
    if(cardYearInp.value.length != 2){

        GiveBorderErrorColor(cardYearInp);
        ShowErrorMsg(CardDateInpError);
        FormValid = false;
    }
    else {
        RemoveErrorMsg(CardDateInpError);
        RemoveBorderErrorColor(cardYearInp);
    }

    //CHECK Card CVC Input 
    if(cardCVCInp.value.length != 3){
    GiveBorderErrorColor(cardCVCInp);
    ShowErrorMsg(CardCVCInpError);
    FormValid = false;
    }
    else {
        RemoveErrorMsg(CardCVCInpError);
        RemoveBorderErrorColor(cardCVCInp);
    } 

    if(FormValid == true)
    {
        console.log("Form Check passed!");
        FormCheckPassed();
    }
}

//-----------------------add and remove red borders for wrong input------------------------------//
function GiveBorderErrorColor(element)
{
    element.style.border = "0.1rem solid var( --input-errors)";
}
function RemoveBorderErrorColor(element)
{
    element.style.border = "0.1rem solid var(--Light-grayish-violet)";
}
//-----------------------add and remove error message for wrong input------------------------------//
function ShowErrorMsg(element)
{
    element.style.display="block";
}
function RemoveErrorMsg(element)
{
    element.style.display="none";
}

//-----------------------hide form and display the thank you notification-------------------------//
function FormCheckPassed(){
    Form.style.display = "none";
    FormSubmittedNotification.style.display = "flex";

    resetCardVisualization();
}

function handleConfirm(e){
    e.preventDefault();
    Form.reset();
    Form.style.display = "grid";
    FormSubmittedNotification.style.display = "none";
}
// reset visualized data in the credit cards
function resetCardVisualization(){
    cardNumber.innerText = "0000 0000 0000 0000";
    cardName.innerText  = "Jane Appleseed";
    cardMonth.innerText  ="00";
    cardYear.innerText  = "00";
    cardCVC.innerText  = "000";
}

//Detect Autocompletion and refresh Card Visualization
document.addEventListener('onautocomplete', function(e) {

    switch(e.target){
        case cardNameInp:
            cardName.innerText = cardNameInp.value;
            break;

        case numberInp:
            cardNumber.innerText = numberInp.value;
            break;

        case cardCVCInp:
            cardCVC.innerText = cardCVCInp.value;
            break;

        case cardMonthInp:
            cardMonth.innerText = cardMonthInp.value;
            break;
            
        case cardYearInp:
            cardYear.innerText = cardYearInp.value;
            break;
    }
    

    e.target.innerText = e.value;
  /*  cardNumber.innerText = numberInp.value;
    cardName.innerText = cardNameInp.value;
    cardCVC.innerText = cardCVCInp.value;
    cardMonth.innerText = cardMonthInp.value;
    cardYear.innerText =cardYearInp.value;*/
})

numberInp.addEventListener("keyup", setCardNumber);
cardNameInp.addEventListener("keyup", setCardName);
cardMonthInp.addEventListener("keyup", setCardMonth);
cardYearInp.addEventListener("keyup", setCardYear);
cardCVCInp.addEventListener("keyup", setCardCVC);
submitBtn.addEventListener("click", handleSubmit);
confirmBtn.addEventListener("click", handleConfirm);