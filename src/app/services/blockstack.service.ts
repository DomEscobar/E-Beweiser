import { Injectable } from '@angular/core';
import * as blockstack from 'blockstack';
import { UserData } from 'blockstack/lib/auth/authApp';
import { User } from '../models/user';
import { DocumentDetail } from '../models/documentDetail';
import { Loading } from '../static/loading/Loading';

import
{
  UserSession,
  AppConfig
} from 'blockstack';

@Injectable({
  providedIn: 'root'
})
export class BlockstackService
{
  user: UserData;
  documents: DocumentDetail[] = new Array();

  constructor()
  {

  }

  public async initDocuments()
  {
    Loading.show();
    this.documents = await this.getDocuments();
    Loading.hide();
  }

  public getUsersession(): UserSession
  {
    const appConfig = new AppConfig(['store_write', 'publish_data']);
    appConfig.appDomain = 'https://nokol.net/ebeweiser';
    appConfig.manifestPath = '/manifest.json';

    return new UserSession({ appConfig: appConfig });
  }

  public async setUser(user: User): Promise<void>
  {
    const userSession = this.getUsersession();
    await userSession.putFile(`User.json`, JSON.stringify(user));
  }

  public async getUser(): Promise<User>
  {
    const userSession = this.getUsersession();
    const user = await userSession.getFile(`User.json`);

    if (user == null)
    {
      return new User();
    }

    return JSON.parse(user.toString());
  }

  public async addDocument(document: DocumentDetail): Promise<void>
  {
    this.documents.unshift(document);
    const userSession = this.getUsersession();
    await userSession.putFile(`Documents.json`, JSON.stringify(this.documents));
  }

  public async getDocuments(): Promise<DocumentDetail[]>
  {
    const userSession = this.getUsersession();
    const documents = await userSession.getFile(`Documents.json`);

    if (documents == null)
    {
      return [];
    }

    return JSON.parse(documents.toString());
  }
}
