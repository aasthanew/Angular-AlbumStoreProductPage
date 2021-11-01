import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import {HttpClient,HttpResponse} from '@angular/common/http';
//import {rxjs}

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})//((res:Response) => res.json())
export class ProductService {

  constructor(private _http: HttpClient) {}
  private _albumUrl = '../assets/album.json';
  getAlbum(id: number) {
      return this._http.get(this._albumUrl).map((res:Response) => res.json());
     }
   
    
    }

  

  