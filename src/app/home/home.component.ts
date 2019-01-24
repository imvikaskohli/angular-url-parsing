import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  name = 'Angular';
  random: string;
  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.random = this.route.snapshot.queryParamMap.get('random');
    if(this.random)
      this.random = this.random.replace(/\s/g, "+");
    console.log(this.random);
  }


}
