import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private env?: string;
  private config: any;

  constructor(private http: HttpClient) { }

  public init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.env = environment.production ? 'production' : 'development';
      this.http.get(`./assets/config/${this.env}.json`)
        .subscribe({
          next: res => { 
            this.config = res;
            console.log(res);
            resolve();
          },
          error: (err: any) => reject(`Error while reading config for environment: ${this.env}, ${err}`)
        })

    })
  }

  public getApiBaseUrl() {
    return this.get('apiBaseUrl');
  }

  private get(key: string) {
    return this.config[key];
  }
}
