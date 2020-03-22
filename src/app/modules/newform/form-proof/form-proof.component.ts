import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NewFormService } from '../new-form.service';
import { SignaturePad } from 'ngx-signaturepad/signature-pad';

@Component({
  selector: 'app-form-proof',
  templateUrl: './form-proof.component.html',
  styleUrls: ['./form-proof.component.less']
})
export class FormProofComponent implements OnInit
{
  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef;

  @ViewChild('imageElement', { static: false })
  imageElement: ElementRef;

  @ViewChild(SignaturePad, { static: false })
  signaturePad: SignaturePad;

  imgSrc = 'assets/upload.png';

  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 100
  };

  constructor(private NewFormService: NewFormService) { }

  ngOnInit()
  {
  }

  public openUpload(): void
  {
    this.fileUpload.nativeElement.click();
  }

  public handleFileSelect(evt): void
  {
    const files = evt.target.files;
    const file = files[0];

    if (files && file)
    {
      const reader = new FileReader();

      reader.onload = this.fetchBase64.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  private fetchBase64(readerEvt): void
  {
    const binaryString = readerEvt.target.result;
    this.imgSrc = 'data:image/png;base64,' + btoa(binaryString);
    this.imageElement.nativeElement.onload = () =>
    {
      this.NewFormService.image = this.compressImage(400, 400);
    };
  }

  private compressImage(width, height): string
  {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    context.drawImage(this.imageElement.nativeElement, 0, 0, width, height);

    const tempStr = canvas.toDataURL("image/png");

    return tempStr;
  }

  public drawComplete(): void
  {
    this.NewFormService.signature = this.signaturePad.toDataURL();
  }
}
