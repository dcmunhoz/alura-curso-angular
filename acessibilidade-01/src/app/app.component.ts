import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acessibilidade-01';
  public yesNoAnswer: string = "no";
  public test: string = "";
  public form: FormGroup = new FormGroup({});


  constructor(formBuilder: FormBuilder){
    
    this.form = formBuilder.group({
      yesNoAnswer: ['no']
    });

  }

  public submit(): void{
    console.log(this.form.value);
  }

}
