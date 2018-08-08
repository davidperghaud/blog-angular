import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postDate: Date;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  onLove(){
    this.postLoveIts +=1;
    console.log(this.postLoveIts)
  }
  unLove(){
    this.postLoveIts -=1;
    console.log(this.postLoveIts)
  }
}
