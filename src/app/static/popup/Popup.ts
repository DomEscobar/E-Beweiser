export class Popup
{
  static isOnShow: boolean;

  public static saveCheck(): void
  {
    Popup.isOnShow = true;

    setTimeout(() =>
    {
      Popup.isOnShow = false;
    }, 2000);
  }
}
