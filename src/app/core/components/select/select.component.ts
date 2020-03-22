import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent
{
  public showOptions: boolean = false;

  @Input()
  withBorder: boolean = true;

  @Input()
  property: string = 'name';

  @Input()
  public title = '';

  @Input()
  public options: any[] = new Array();

  @Input()
  selected: any;

  @Output()
  selectedChange: EventEmitter<any> = new EventEmitter();

  @Input()
  search: string = '';

  @Output()
  searchChange: EventEmitter<string> = new EventEmitter();

  width: number = 300;

  @ViewChild('selectbox', { static: false })
  selectbox: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() { }

  public select(opt: any): void
  {
    this.search = '';
    this.showOptions = false;
    this.selectedChange.emit(opt);
  }

  public getSelected(): string
  {
    const data = this.selected != null ? this.selected[this.property] : ' - ';
    return data;
  }

  public focusme()
  {
    this.showOptions = true;
    this.calcWidth();
    this.changeDetectorRef.markForCheck();
  }

  keyupHandler(keycode: number)
  {
    if (keycode == 38)
    {
      this.selected = this.options[this.options.indexOf(this.selected) - 1];
      this.selectedChange.emit(this.selected);
      return;
    }

    if (keycode == 40)
    {
      this.selected = this.options[this.options.indexOf(this.selected) + 1];
      this.selectedChange.emit(this.selected);
      return;
    }

    this.searchChange.emit(this.search);
  }

  public calcWidth(): void
  {
    this.width = (<HTMLElement>this.selectbox.nativeElement).clientWidth;
  }
}
