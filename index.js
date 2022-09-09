let budgetAmmount=0;
let BudgetBtn=document.getElementById('budgetBtn');
let ReloadBtn=document.getElementById('reloadBtn');
BudgetBtn.style.visibility='visible';
ReloadBtn.style.visibility='hidden';

function budgetBtnClicked(){
    
    let BudgetAmt=document.getElementById('budgetAmt');
    BudgetBtn.style.visibility='hidden';
    ReloadBtn.style.visibility='visible';
}