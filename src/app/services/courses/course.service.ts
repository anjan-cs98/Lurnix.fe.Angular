import { inject, Injectable } from '@angular/core';
import { urlGenerator } from '../../constants/globalURL';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiService=inject(ApiService);
  constructor() { }

  public GetAllCouses(state: string, data: any): Observable<{ data: Array<any> }> {
    return this.apiService.GetPostApiCall(
      urlGenerator(environment.CoursesModule, 'GetAllCourses'),
      state,
      true,
      data
    );
  }

}

