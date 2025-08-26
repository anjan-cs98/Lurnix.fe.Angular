import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, StateKey, TransferState, makeStateKey } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class DataStateService {

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private transferState: TransferState
  ) { }

  getSetData(key: string, getDataObservable: Observable<any>, defaultValue: any = []) {
    return getDataObservable.pipe(
      tap((data) => {
        if (isPlatformServer(this.platformID)) {
          this.transferState.set(makeStateKey(key), data);
        } else if (isPlatformBrowser(this.platformID)) {
          this.transferState.get(makeStateKey(key), defaultValue);
          this.transferState.remove(makeStateKey(key));
        }
      })
    );
  }

}
