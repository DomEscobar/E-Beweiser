import { Component, OnInit, Input } from '@angular/core';
import { DocumentDetail } from '../../models/documentDetail';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.less']
})
export class DocumentDetailComponent implements OnInit
{
  @Input()
  documentDetail: DocumentDetail;

  constructor() { }

  ngOnInit()
  {
  }

}
