import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  profile = {
    name: 'alex',
    weight_lbs: 200,
    activity_level: "average"
  }

  constructor() { }
}
