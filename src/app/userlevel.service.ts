import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserLevelService {

  constructor(
      @Inject('API_URL') private url: string,
      private http: Http
  ) { }

  getAllUserLevel() {
      return new Promise((resolve, reject) => {
          this.http.get(`${this.url}/userlevel`)
          .map(res => res.json())
          .subscribe(data => {
              resolve(data);
          }, error => {
              reject(error);
          })
      })
  }
  save(UserLevelID: any, UserLevelName: any) {
      return new Promise((resolve, reject) => {
          this.http.post(`${this.url}/userlevel`, {
              ul_id: UserLevelID,
              ul_name: UserLevelName
          })
          .map(res => res.json())
          .subscribe(data => {
              resolve(data);
          }, error => {
              reject(error);
          })
      })
  }
  update(UserLevelID: any, UserLevelName: any) {
    return new Promise((resolve, reject) => {
        this.http.put(`${this.url}/userlevel`, {
            ul_id: UserLevelID,
            ul_name: UserLevelName
        })
        .map(res => res.json())
        .subscribe(data => {
            resolve(data);
        }, error => {
            reject(error);
        })
    })
}
del(UserLevelID: any) {
    return new Promise((resolve, reject) => {
        this.http.delete(`${this.url}/userlevel/${UserLevelID}`)
        .map(res => res.json())
        .subscribe(data => {
            resolve(data);
        }, error => {
            reject(error);
        })
    })
}

}
