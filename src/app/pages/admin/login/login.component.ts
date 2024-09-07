import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginObj: any = {
  userName: '',
  password: '',
}

constructor(private router: Router){}


onLogin(){
  if(this.loginObj.userName == "anil" && this.loginObj.password=="anilm"){
    this.router.navigateByUrl('/products')
  }
 else if (this.loginObj.userName == "vanaja" && this.loginObj.password=="vanaja") {
    this.router.navigateByUrl('/products')
    alert("Happy Shopping ${{userName}}")
  }
else{
  alert("wrong credintials")
}
}
}