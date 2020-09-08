import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/layouts/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnDestroy() {
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit()
  {
    this.aSub = this.auth.register(this.form.value).subscribe(
      ()=> {
        this.router.navigateByUrl('/login')
      }
    )

  }
}
