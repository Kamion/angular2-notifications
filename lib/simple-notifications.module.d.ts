import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { Options } from './interfaces/options.type';
export declare const OPTIONS: InjectionToken<Options>;
export declare function optionsFactory(options: any): any;
export declare class SimpleNotificationsModule {
    static forRoot(options?: Options): ModuleWithProviders<SimpleNotificationsModule>;
}
