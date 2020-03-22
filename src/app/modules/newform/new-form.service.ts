import { Injectable } from '@angular/core';
import { Fromtype } from '../../models/fromtype.enum';
import { TypeOption } from './type-selection/type-selection.component';
import { FormObject } from './form-content/form-content.component';
import { DocumentDetail } from '../../models/documentDetail';
import { BlockstackService } from '../../services/blockstack.service';

@Injectable({
  providedIn: 'root'
})
export class NewFormService
{
  /**
   * TODO Subject and Obsv.
   *
   * @type {TypeOption}
   * @memberof NewFormService
   */
  public signature: string;
  public type: TypeOption;
  public formObjects: FormObject[];
  public image: string;
  public step = 0;

  public documentDetail: DocumentDetail;

  constructor(private blockstackService: BlockstackService) { }

  public refresh():void
  {
    this.signature = null
    this.formObjects = null
    this.image = null
    this.step = 0;
    this.documentDetail = null;
  }

  public updateFormObjects(formObjects: FormObject[]): void
  {
    this.formObjects = formObjects;
  }

  public async initDocumentDetail(): Promise<void>
  {
    const userData = await this.blockstackService.getUser();

    const documentDetail = new DocumentDetail();
    documentDetail.firstname = userData.firstname;
    documentDetail.lastname = userData.lastname;
    documentDetail.birth = userData.birth;
    documentDetail.signature = this.signature;
    documentDetail.type = this.type;
    documentDetail.formObjects = this.formObjects;
    documentDetail.image = this.image;
    documentDetail.date = new Date();

    this.documentDetail = documentDetail;
  }
}
