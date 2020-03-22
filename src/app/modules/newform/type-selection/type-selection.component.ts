import { Component, OnInit } from '@angular/core';
import { Fromtype } from '../../../models/fromtype.enum';
import { NewFormService } from '../new-form.service';

@Component({
  selector: 'app-type-selection',
  templateUrl: './type-selection.component.html',
  styleUrls: ['./type-selection.component.less']
})
export class TypeSelectionComponent implements OnInit
{
  types: TypeOption[] = new Array();

  constructor(public NewFormService: NewFormService) { }

  ngOnInit()
  {
    this.types.push(new TypeOption(Fromtype.CURFEW, 1));
    this.NewFormService.type = this.types[0];
  }

}

export class TypeOption
{
  constructor(public fromtype: Fromtype, public id: number)
  {

  }
}
