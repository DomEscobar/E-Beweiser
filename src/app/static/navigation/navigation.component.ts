import { Component, OnInit } from '@angular/core';
import { BlockstackService } from '../../services/blockstack.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  constructor(public BlockstackService : BlockstackService) { }

  ngOnInit() {
  }

}
