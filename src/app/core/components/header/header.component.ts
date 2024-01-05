import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required : true}) name:string  = '';
  @Input({required : true}) profile:string = '';
  @Output() onSignOut: EventEmitter<any> = new EventEmitter();
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]

  signOut(){
    console.log("SignOut Triggered")
    this.onSignOut.emit();
  }

}
