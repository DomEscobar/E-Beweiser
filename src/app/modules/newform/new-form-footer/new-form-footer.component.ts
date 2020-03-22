import { Component, OnInit } from '@angular/core';
import { NewFormService } from '../new-form.service';
import { Loading } from '../../../static/loading/Loading';
import { BlockstackService } from '../../../services/blockstack.service';
import { Popup } from '../../../static/popup/Popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-form-footer',
  templateUrl: './new-form-footer.component.html',
  styleUrls: ['./new-form-footer.component.less']
})
export class NewFormFooterComponent implements OnInit
{

  constructor(
    private router: Router,
    private BlockstackService: BlockstackService,
    public NewFormService: NewFormService) { }

  ngOnInit()
  {
  }

  public setStep(step: number): void
  {
    this.NewFormService.step = this.NewFormService.step + step;

    if (this.NewFormService.step == 3)
    {
      this.NewFormService.initDocumentDetail();
    }

  }

  public async save(): Promise<void>
  {
    Loading.show();
    await this.BlockstackService.addDocument(this.NewFormService.documentDetail);
    setTimeout(() =>
    {
      Loading.hide();
      Popup.saveCheck();
      this.router.navigate(['/documents']);
    }, 1000);
  }
}
