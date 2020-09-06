import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList = [];
//private http: HttpClient
  constructor(private http: HttpClient) {
    this.productList = [{
      id: 1,
      name: 'Keyboard',
      price: 2000,
      description: 'description',
      image: ''
    },
    {
      id: 2,
      name: 'Mouse',
      price: 300,
      description: 'description',
      image: ''
    }];
   }
  // generateBreakdownYearWise(year) {
  //   var year = year;
  //   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  //   let url = InfinityInitService.rootUrl + 'report/YearWiseBreakdown/yearAllLinewiseTotal';
  //   //let url = 'http://192.168.1.107:8080/report/breakdown/year';
  //   const params = new HttpParams()
  //     .set('year', year)
  //   return this.http.get(url + "/?" + params, { headers: httpHeaders });
  // }
//   getOperatorAssignmentList() {
//     this.http.get<Array<UserMasterModel>>(environment.ROOT_URL + 'operator/assignment').subscribe(oprator => {
//         this.operatoerAssignment = oprator;
//         this.operatoerAssignmentSubject.next(this.operatoerAssignment);
//     });
// }
getProductById(productId) {
    return this.http.get<Array<any>>(environment.ROOT_URL + 'product/getProductById');
}
getProductList() {
  this.http.get<Array<any>>(environment.ROOT_URL + '/list').subscribe(data => {
      this.productList = data;
  });
  return this.productList;
}
addProduct(productDetails) {
  this.http.get<Array<any>>(environment.ROOT_URL + 'product/insert').subscribe(data => {
      this.productList = data;
  });
}
removeProduct(productId) {
  this.http.get<Array<any>>(environment.ROOT_URL + 'product/delete').subscribe(data => {
      this.productList = data;
  });
}
}
