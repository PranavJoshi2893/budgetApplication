let budgetButtonFlag=true;
function budgetEntered(){
    budgetButtonFlag=false;
    let BudgetButton=document.getElementById('budgetButton');
    BudgetButton.style.display='none';

    let ReloadButton=document.createElement('button');
    ReloadButton.innerHTML='Reload';
    ReloadButton.type='submit';
    ReloadButton.style.marginLeft='50px';

    let addBudgetFieldsetElement=document.getElementById('budgetFieldset');
    addBudgetFieldsetElement.appendChild(ReloadButton);


    let BudgetTableAmt=document.getElementById('budgetTableAmt');
    let Budget=document.getElementById('budget');
    
    if(Budget.value===''){
        BudgetTableAmt.innerHTML+=0;
    }
    else{
        BudgetTableAmt.innerHTML+=Budget.value;
    }
}


let counter=0;


let remaingAmt=0;
let budgetAmt=0;
let expenceAmt=0;

function expensesButton(){

    if(budgetButtonFlag){
        alert('Enter Valid Budget Amount');
    }
    else{

        let newListItem=document.createElement('li');
        let ExpensesName=document.getElementById('expensesName');
        let ExpensesAmt=document.getElementById('expensesAmt');
        let AddListItems=document.getElementById('addListItems');


        if(ExpensesName.value==='' || ExpensesAmt===''){
            alert('Enter Valid Expenses Catagory and Amount');
        }
        else{
            counter++;
            if(!isNaN(ExpensesAmt.value) && isNaN(ExpensesName.value))
            {
            
                newListItem.innerHTML=(ExpensesName.value+'-'+ExpensesAmt.value);
                AddListItems.appendChild(newListItem);

                let newRow=document.createElement('tr');
                let AddRowElement=document.getElementById('addRowElement');

                for(let i=0;i<4;i++){
                    let newCell=document.createElement('td');
                
                    if(i===0){
                        if(counter===1){
                            let Budget=document.getElementById('budget');
                            console.log(Budget.value);
                            if(Budget.value===''){
                                newCell.innerHTML=0;
                                newRow.appendChild(newCell);
                                budgetAmt=0;
                            }
                            else{
                                newCell.innerHTML=Budget.value;
                                newRow.appendChild(newCell);
                                budgetAmt=Budget.value;
                            }
                        }
                        else{
                            budgetAmt=remaingAmt;
                            newCell.innerHTML=budgetAmt;
                            newRow.appendChild(newCell);
                        }
                    }
                    else if(i===1){
                        newCell.innerHTML=ExpensesName.value;
                        newRow.appendChild(newCell);
                    }
                    else if(i===2){
                        newCell.innerHTML=ExpensesAmt.value;
                        newRow.appendChild(newCell);
                        expenceAmt=ExpensesAmt.value;
                    }
                    else{
                        remaingAmt=budgetAmt-expenceAmt;
                        newCell.innerHTML=remaingAmt;
                        newRow.appendChild(newCell);
                    }
                }
                AddRowElement.appendChild(newRow);
            }
        
        }
    }
}