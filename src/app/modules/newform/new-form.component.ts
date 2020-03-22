import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NewFormService } from './new-form.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.less']
})
export class NewFormComponent implements AfterViewInit
{

  constructor(public NewFormService: NewFormService) { }

  ngAfterViewInit()
  {
    this.NewFormService.refresh();
  }

}
