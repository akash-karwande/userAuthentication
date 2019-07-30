import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

    constructor(public apiService: ApiService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setParams: {["auth"]: `${this.apiService.getToken()}`}
        });
        return next.handle(request);
    }
}
