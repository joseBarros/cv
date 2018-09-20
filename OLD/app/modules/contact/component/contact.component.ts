import { Component, OnInit } from '@angular/core';
import {Email} from "../../../interfaces/Email";
import {ContactService} from "../../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private intro: string = "Please feel free to send me a message at any time!";
  public message: Email = {name: '', subject: '', email: '', message: ''};

  constructor(private _contactService : ContactService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response){
    // console.log(`msg is: {response.status}`);

    if(response.status =='success'){
      this.message = {name: '', subject: '', email: '', message: ''};
      alert('Danke für deine Nachricht');
    }

    if(response.status =='error'){
      alert('Leider konnten wir deine Nachricht nicht versenden. Probier es nochmals oder sende die email direkt. Danke');
    }
  }
}
