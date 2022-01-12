import { Component } from '@angular/core';
import { InterceptorService } from './interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private  interceptorService: InterceptorService ){
    interceptorService.getUsers()
    .subscribe( 
      resp => console.log('Esto viene appComponent')
    )
  }


 

}
