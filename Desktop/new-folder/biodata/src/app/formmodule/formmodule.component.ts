import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-formmodule',
  templateUrl: './formmodule.component.html',
  styleUrls: ['./formmodule.component.css']
})
export class FormmoduleComponent implements OnInit {
  subjects =['male','female','other'];
  title = 'biodata';
  userModel =new User( "", "","", true );
  
  constructor(private service:AppserviceService) { }

  ngOnInit(){
    this.service.enroll(this.userModel)
  .subscribe(
    data => console.log('success!', data)
  )
  }

}
