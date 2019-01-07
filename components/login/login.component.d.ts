import { Router } from '@angular/router';
import {
    Behaviours
} from '../../services/common/behaviours';
export declare class NbLoginComponent {
    protected behaviours: Behaviours;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    errors: string[];
    messages: string[];
    user: any;
    submitted: boolean;
    constructor(behaviours: Behaviours, router: Router);
    login(): void;
    getConfigValue(key: string): any;
}
