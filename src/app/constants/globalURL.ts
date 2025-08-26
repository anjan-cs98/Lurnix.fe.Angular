import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

let platformId: Object;

export class env {
    isProduction: boolean = false;
    constructor(platformId: Object) {
        if (isPlatformBrowser(platformId as Object)) {
            this.isProduction = !(window.location.hostname.toString().toLowerCase().includes("localhost"));
        }
    }
}

export { platformId };

export function urlGenerator(module: string, methodName: string): string {
    const baseURL = environment.baseUrl;
    return baseURL + environment.apiVersion + module + "/" + methodName;
}