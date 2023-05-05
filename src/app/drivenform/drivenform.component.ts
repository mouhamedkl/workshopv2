import { Component, OnInit } from '@angular/core';
import { Payment } from './../Model/payment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-drivenform',
  templateUrl: './drivenform.component.html',
  styleUrls: ['./drivenform.component.css']
})
export class DrivenformComponent implements OnInit {
payment =new Payment()
  constructor() { }

  ngOnInit(): void {
  }
  paymentValid = false;
  checkPaymentValidity() {
    this.paymentValid = this.form.form.get('typecaret').valid &&
                        this.form.form.get('numero').valid &&
                        this.form.form.get('date').valid;
  }
num:any
  form:any
  ajouter(ngform:NgForm){
    this.form = ngform.value("num");

    console.log(this.form);


  }
}
