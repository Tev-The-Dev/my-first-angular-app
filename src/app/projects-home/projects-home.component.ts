import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  standalone: true,
  imports: [],
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.css'
})
export class ProjectsHomeComponent implements OnInit{
  firstName: string="William";
  lastName: string="Wallace";
  phoneNumber: string=" (201) 748-6000";
  jobTitle: string="Vice President";
  email: string="willwallace@bank.com";

  zero: number = 0;
  one: number = 1;
  two: number = 2;
  three: number = 3;
  four: number = 4;
  five: number = 5;
  six: number = 6;
  seven: number = 7;
  eight: number = 8;
  nine: number = 9;
  add: string="+";
  multiply: string='*';
  subtract: string ="-";
  divide: string = "/";
  clear: string = "C";
  equals: string = '=';
  display: string = '0';
  storeValue: string = '';
  operator: string = '';
  operand:  number | null  = null;
  displayResult: boolean = false;

 
  setProperty(event: Event){
    let target = event.target as HTMLInputElement
    let property: string = target.id
    switch(property){
      case "firstNameInput":
        this.firstName = target.value;
        break;
      case "lastNameInput":
        this.lastName = target.value;
        break;
      case "phoneNumberInput":
        this.phoneNumber = target.value;
        break;
      case "emailInput":
        this.email = target.value;
        break;
      case "jobTitle":
        this.jobTitle = target.value;
        break;
      default:
        console.warn("No matching ID found!")
        break;
    }
  }

  onClear(event?: MouseEvent){
    //when user clicks the 'C' button on the calucualter
    this.display = '0';
    this.storeValue = '';
    this.operator = '';
    this.operand = null;
    this.displayResult= false;
  }

  getNum(num: number){
    //display the numbers being clicked
    if(this.displayResult){
      this.storeValue = '';
      this.displayResult = false;
    }
    this.storeValue += num.toString();
    this.display = this.storeValue;
  }

  getOperator(op: string){
    if(this.storeValue){
      this.operand = parseFloat(this.storeValue)
      this.operator = op;
      this.storeValue = '';
      this.display = this.operator;
      
    }
  }
  calculate() {
    if (this.operand !== null && this.storeValue) {
      const operand2 = parseFloat(this.storeValue);
      let result: number;

      switch (this.operator) {
        case '+':
          result = this.operand + operand2;
          break;
        case '-':
          result = this.operand - operand2;
          break;
        case '*':
          result = this.operand * operand2;
          break;
        case '/':
          result = this.operand / operand2;
          break;
        default:
          return;
      }

      this.display = result.toString();
      this.displayResult = true;
      //this.onClear(); // Reset after calculation
    }
  }



  constructor() {}

  ngOnInit(): void {
    
  }
}
