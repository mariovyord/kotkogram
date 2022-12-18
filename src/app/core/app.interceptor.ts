import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Provider } from '@angular/core';
import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            return next.handle(req.clone({
                url: req.url.replace('/api', API_URL),
                withCredentials: true,
                headers: req.headers
                    .set('Cache-Control', 'no-cache')
                    .set('Pragma', 'no-cache')
                    .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT')
            }))
        }

        return next.handle(req);
    }
}

export const appInterceportProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true,
}

