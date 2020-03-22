import { Component, OnInit, Input } from '@angular/core';
import { NewFormService } from '../new-form.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.less']
})
export class FormContentComponent implements OnInit
{
  @Input()
  formObjects: FormObject[];

  formObjectType = FormObjectType;

  constructor(
    private http: HttpClient,
    private NewFormService: NewFormService) { }

  async ngOnInit()
  {
    if (!this.formObjects)
    {
      this.formObjects = await this.initFormStructure().toPromise();
    }
  }

  private initFormStructure(): Observable<FormObject[]>
  {
    return this.http.get<FormObject[]>(`assets/forms/${ this.NewFormService.type.fromtype }.json`);
  }

  public async updateFormObjects()
  {
    this.NewFormService.updateFormObjects(this.formObjects);
  }
}

export class FormObject
{
  type: FormObjectType;
  text: string;

  checked?: boolean;
}

export enum FormObjectType
{
  TEXT = 'text',
  TITLE = 'title',
  CHECKBOX = 'checkbox'
}