import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm:FormGroup;
  users=[];
  dataconsists=['a','b','c','d','e','f'];
  flag=false;
  // index=0;
  // ipregex="^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$";
  constructor(private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      Hostname: ['', Validators.required],
      Loopback: ['', Validators.required]
    });
  }
  saveUser(d,a,b) {
      this.users.push(d);
      // console.log(this.users);
      // this.index=this.index +1;
      this.userForm.reset();
      return false;

    // if (this.userForm.dirty && this.userForm.valid) {
    //   alert(`Name: ${this.userForm.value.Hostname} Email: ${this.userForm.value.Loopback}`);
    }
    deleteitem(d1)
    {
      this.users.indexOf(d1);
      this.users.splice(d1,1);
    }
    edititem(d2,d3,d4)
    {
      d3.value=d2.Hostname;
      d4.value=d2.Loopback;
      // this.index=this.users.indexOf(d2);
      // console.log(this.index);
      this.users.splice(d2,1);
}
    viewitem(d5) {
      console.log("data displayed");
    }
    onRowClick(eventer)
    {
      if(this.dataconsists.includes(eventer.target.textContent))
      {
        console.log(this.users.indexOf(eventer.target.textContent));
        console.log("exists");
      }
      else{
        console.log("Doesn't exists");
      }
      // console.log(eventer.target.textContent);
    }
  }
