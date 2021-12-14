import { IHttp } from "../models/IHttp";
import request from 'request';

export class Http implements IHttp {
  public async get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      request(url, (error, res, body) => {
        if (error) {
          reject(error);
        } else if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(body);
        } else {
          reject(new Error(res.statusMessage));
        }
      })
    });
  }
}