import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BaseURL='http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model='projects';
  constructor(private http:HttpClient) { }//end of constructor
  getURL(){
    return `${BaseURL}${this.model}`;
  }//end of getURL()
  getURLForID(id){
    return `${BaseURL}${this.model}/${id}`;
  }//end of getURLForID()
  all():Observable<any>{
    return this.http.get(this.getURL());
  }//end of all()
  create(project){
    return this.http.post(this.getURL(),project);
  }//end of create()
  update(project){
    return this.http.patch(this.getURLForID(project.id),project);
  }//end of update()
  delete(projectId){
    return this.http.delete(this.getURLForID(projectId));
  }//end of delete()


}//end of Class
