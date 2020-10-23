var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { NotificationComponent } from './components/notification/notification.component';
import { SimpleNotificationsComponent } from './components/simple-notifications/simple-notifications.component';
import { DEFAULT_OPTIONS } from './consts/default-options.const';
import { NotificationsService } from './services/notifications.service';
export var OPTIONS = new InjectionToken('options');
export function optionsFactory(options) {
    return __assign(__assign({}, DEFAULT_OPTIONS), options);
}
var SimpleNotificationsModule = /** @class */ (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule_1 = SimpleNotificationsModule;
    SimpleNotificationsModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [
                NotificationsService,
                {
                    provide: OPTIONS,
                    useValue: options
                },
                {
                    provide: 'options',
                    useFactory: optionsFactory,
                    deps: [OPTIONS]
                }
            ]
        };
    };
    var SimpleNotificationsModule_1;
    SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                SimpleNotificationsComponent,
                NotificationComponent
            ],
            exports: [SimpleNotificationsComponent]
        })
    ], SimpleNotificationsModule);
    return SimpleNotificationsModule;
}());
export { SimpleNotificationsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLW5vdGlmaWNhdGlvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxNQUFNLENBQUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQVUsU0FBUyxDQUFDLENBQUM7QUFDOUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFPO0lBQ3BDLDZCQUNLLGVBQWUsR0FDZixPQUFPLEVBQ1Y7QUFDSixDQUFDO0FBWUQ7SUFBQTtJQWtCQSxDQUFDO2tDQWxCWSx5QkFBeUI7SUFDN0IsaUNBQU8sR0FBZCxVQUFlLE9BQXFCO1FBQXJCLHdCQUFBLEVBQUEsWUFBcUI7UUFDbEMsT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBeUI7WUFDbkMsU0FBUyxFQUFFO2dCQUNULG9CQUFvQjtnQkFDcEI7b0JBQ0UsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsVUFBVSxFQUFFLGNBQWM7b0JBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQWpCVSx5QkFBeUI7UUFWckMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBNEI7Z0JBQzVCLHFCQUFxQjthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ3hDLENBQUM7T0FDVyx5QkFBeUIsQ0FrQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaW1wbGUtbm90aWZpY2F0aW9ucy9zaW1wbGUtbm90aWZpY2F0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnLi9jb25zdHMvZGVmYXVsdC1vcHRpb25zLmNvbnN0JztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvb3B0aW9ucy50eXBlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxPcHRpb25zPignb3B0aW9ucycpO1xuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbnNGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5ERUZBVUxUX09QVElPTlMsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtTaW1wbGVOb3RpZmljYXRpb25zQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogT1BUSU9OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ29wdGlvbnMnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IG9wdGlvbnNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtPUFRJT05TXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19