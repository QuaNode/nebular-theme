import { Router } from '@angular/router';
export declare class NbRegisterComponent {
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    constructor(router: Router);
    register(): void;
    getConfigValue(key: string): any;
}
