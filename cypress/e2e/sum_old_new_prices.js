/// <reference types= "cypress" />

describe('assigment ', () => {
    let sumNew = 0;

    let sumOld = 0;

    it('Sum of the new and old prices', () => {

        let sumNew = 0;

        let sumOld = 0;

          cy.visit("https://www.automationteststore.com/");
  
          cy.get('#special > .container-fluid').find('.pricenew').invoke('text').then((new_prices)=>{
            let arrOfNew=new_prices.split("$")

            arrOfNew.forEach( num => {
                
                sumNew += Number(num);
             
            })
            cy.log(sumNew)
           
          })
          cy.get('#special > .container-fluid').find('.priceold').invoke('text').then((old_price)=>{
            let arrOfOld=old_price.split("$")
        
            arrOfOld.forEach( num => {
                sumOld += Number(num);
            })
            cy.log(sumOld)

            
            alert(`the result for sum old prices is ${sumOld} \n the result for sum new prices is ${sumNew}`)
          })



          
  
  
  
    });

   
  });