import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlockstackService } from '../../services/blockstack.service';
import { DocumentDetail } from '../../models/documentDetail';
import { Loading } from '../../static/loading/Loading';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.less']
})
export class DocumentsComponent implements AfterViewInit
{
  documents: DocumentDetail[] = new Array();
  selectedDocumentDetail: DocumentDetail;

  constructor(public BlockstackService: BlockstackService) { }

  async ngAfterViewInit()
  {
  }
}
