import { Injectable, VERSION } from '@angular/core';

@Injectable()
export class FetchData {
  getVerison() {
    // return VERSION.major;
    return VERSION.minor;
  }
}
