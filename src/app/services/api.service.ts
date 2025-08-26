import { Inject, Injectable, PLATFORM_ID, inject, makeStateKey } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { DataStateService } from './db/data-state.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { checkIsBlankOrNullOrUndefined } from '../constants/global';
// import { ToasterService } from './Toaster/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private http = inject(HttpClient);
  private ds = inject(DataStateService);

  public triggerCurrentSessionCall = new BehaviorSubject<boolean>(false);
  public triggerDomainCall = new BehaviorSubject<boolean>(false);
  public menuPath: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  public GetPostApiCall(url: string, state: string, withHeaderToken?: boolean, payload?: any | {}, method?: string): Observable<any> {
    let headerObj: any = {};
    if (isPlatformBrowser(this.platformId)) {

      headerObj = withHeaderToken
        ? {
            'AuthToken': '',
          'Content-Type': 'application/json; charset=utf-8',
          'Menu_url': this.menuPath
        }
        : {
          'Content-Type': 'application/json; charset=utf-8',
          'Menu_url': this.menuPath
        };

    }
    let headers = new HttpHeaders({ ...headerObj });
    if (method === "GET") {
      let options = payload
        ? {
          params: new HttpParams({
            fromObject: JSON.parse(JSON.stringify({ ...payload })),
          }),
          headers: headers,
        }
        : { params: {}, headers: headers };
      return this.ds.getSetData(state, this.http.get(url, options));
    } else {
      return this.ds.getSetData(state, this.http.post(url, payload, { headers: headers }));
    }
  }

  public GetPostApiCallFormData(url: string, state: string, withHeaderToken?: boolean, payload?: any | {}, method?: string): Observable<any> {
    // let headers = new HttpHeaders();
    let headerObj = {
      'AuthToken': '',
      'Menu_url': this.menuPath
    }
    let headers = new HttpHeaders({ ...headerObj });
    return this.ds.getSetData(state, this.http.post(url, payload, { headers: headers }));

  }

  // Method to make API call and display PDF blob response
  public getPdfBlob(url: string, payload: any, fileName: string = 'document.pdf'): Observable<any> {
    const headerObj = {
      'accept': 'application/pdf, application/octet-stream, */*',
      'accept-language': 'en-US,en;q=0.9',
      'authtoken': '',
      'content-type': 'application/json',
      'origin': isPlatformBrowser(this.platformId) ? window.location.origin : '',
      'referer': isPlatformBrowser(this.platformId) ? window.location.origin + '/' : '',
      'user-agent': isPlatformBrowser(this.platformId) ? navigator.userAgent : ''
    };
    const headers = new HttpHeaders(headerObj);
    
    return this.http.post(url, payload, {
      headers,
      responseType: 'blob' as 'json'
    });
  }
}
