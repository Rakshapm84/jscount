const bankAccount=
{
name:"Raksha",
accountnumber:672546289727,
ifsc:"vjy2898398",
branch:"Hassan",
balance:2000,

 deposit:function(amount)
           {
              this.balance=this.balance+amount
              console.log("Amount Deposited" +this.balance)
           },
 balanceenquiry:() =>
  {
  console.log(" Available balance is: " +bankAccount.balance)
  },

 withdraw:function(amount)
           {
              if(amount<=this.balance)
              {
                 this.balance=this.balance-amount
                 console.log("Amount withdraw: " +this.balance)
            }
            else
            {
               console.log("insufficent balance")
            }
           }
}
//console.log(bankAccount)
//bankAccount.deposite(3000)
bankAccount.balanceenquiry()
bankAccount.withdraw(500)