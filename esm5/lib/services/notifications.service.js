var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_ICONS } from '../consts/default-icons.const';
import { NotificationType } from '../enums/notification-type.enum';
var NotificationsService = /** @class */ (function () {
    function NotificationsService(globalOptions) {
        this.globalOptions = globalOptions;
        this.emitter = new Subject();
        this.icons = DEFAULT_ICONS;
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ?
            notification.override.id :
            Math.random().toString(36).substring(3);
        notification.click = new EventEmitter();
        notification.clickIcon = new EventEmitter();
        notification.timeoutEnd = new EventEmitter();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    NotificationsService.prototype.success = function (title, content, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: NotificationType.Success, icon: this.icons.success, override: override, context: context }, true);
    };
    NotificationsService.prototype.error = function (title, content, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: NotificationType.Error, icon: this.icons.error, override: override, context: context }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: NotificationType.Alert, icon: this.icons.alert, override: override, context: context }, true);
    };
    NotificationsService.prototype.info = function (title, content, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: NotificationType.Info, icon: this.icons.info, override: override, context: context }, true);
    };
    NotificationsService.prototype.warn = function (title, content, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: NotificationType.Warn, icon: this.icons.warn, override: override, context: context }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: NotificationType.Bare, icon: 'bare', override: override, context: context }, true);
    };
    // With type method
    NotificationsService.prototype.create = function (title, content, type, override, context) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = NotificationType.Success; }
        return this.set({ title: title, content: content, type: type, icon: this.icons[type], override: override, context: context }, true);
    };
    // HTML Notification method
    NotificationsService.prototype.html = function (html, type, override, icon, context) {
        if (type === void 0) { type = NotificationType.Success; }
        if (icon === void 0) { icon = 'bare'; }
        return this.set({ html: html, type: type, icon: this.icons[icon], override: override, context: context }, true);
    };
    // Remove all notifications method
    NotificationsService.prototype.remove = function (id) {
        if (id) {
            this.emitter.next({ command: 'clean', id: id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    };
    NotificationsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['options',] }] }
    ]; };
    NotificationsService = __decorate([
        Injectable(),
        __param(0, Inject('options'))
    ], NotificationsService);
    return NotificationsService;
}());
export { NotificationsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTW5FO0lBQ0UsOEJBQzRCLGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBRzlDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUMzQyxVQUFLLEdBQVUsYUFBYSxDQUFDO0lBSHpCLENBQUM7SUFLTCxrQ0FBRyxHQUFILFVBQUksWUFBMEIsRUFBRSxFQUFXO1FBQ3pDLFlBQVksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBTSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU0sQ0FBQztRQUNoRCxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFNLENBQUM7UUFFakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksY0FBQSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQ0FBTyxHQUFQLFVBQVEsS0FBZSxFQUFFLE9BQWlCLEVBQUUsUUFBYyxFQUFFLE9BQWE7UUFBakUsc0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxZQUFpQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sS0FBZSxFQUFFLE9BQWlCLEVBQUUsUUFBYyxFQUFFLE9BQWE7UUFBakUsc0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxZQUFpQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sS0FBZSxFQUFFLE9BQWlCLEVBQUUsUUFBYyxFQUFFLE9BQWE7UUFBakUsc0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxZQUFpQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssS0FBZSxFQUFFLE9BQWlCLEVBQUUsUUFBYyxFQUFFLE9BQWE7UUFBakUsc0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxZQUFpQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssS0FBZSxFQUFFLE9BQWlCLEVBQUUsUUFBYyxFQUFFLE9BQWE7UUFBakUsc0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxZQUFpQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssS0FBZSxFQUFFLE9BQWlCLEVBQUUsUUFBYyxFQUFFLE9BQWE7UUFBakUsc0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxZQUFpQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxVQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6SCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLHFDQUFNLEdBQU4sVUFBTyxLQUFlLEVBQUUsT0FBaUIsRUFBRSxJQUErQixFQUFFLFFBQWMsRUFBRSxPQUFhO1FBQWxHLHNCQUFBLEVBQUEsVUFBZTtRQUFFLHdCQUFBLEVBQUEsWUFBaUI7UUFBRSxxQkFBQSxFQUFBLE9BQU8sZ0JBQWdCLENBQUMsT0FBTztRQUN4RSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLEVBQUcsSUFBSSxDQUFDLEtBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsbUNBQUksR0FBSixVQUFLLElBQVMsRUFBRSxJQUErQixFQUFFLFFBQWMsRUFBRSxJQUFhLEVBQUUsT0FBYTtRQUE3RSxxQkFBQSxFQUFBLE9BQU8sZ0JBQWdCLENBQUMsT0FBTztRQUFrQixxQkFBQSxFQUFBLGFBQWE7UUFDNUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxFQUFHLElBQUksQ0FBQyxLQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLHFDQUFNLEdBQU4sVUFBTyxFQUFXO1FBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7O2dEQTNERSxNQUFNLFNBQUMsU0FBUzs7SUFGUixvQkFBb0I7UUFEaEMsVUFBVSxFQUFFO1FBR1IsV0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7T0FGVCxvQkFBb0IsQ0E4RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTlEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OUyB9IGZyb20gJy4uL2NvbnN0cy9kZWZhdWx0LWljb25zLmNvbnN0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICcuLi9lbnVtcy9ub3RpZmljYXRpb24tdHlwZS5lbnVtJztcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pY29ucyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25FdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbm90aWZpY2F0aW9uLWV2ZW50LnR5cGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub3RpZmljYXRpb24udHlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBwdWJsaWMgZ2xvYmFsT3B0aW9uczogYW55XG4gICkgeyB9XG5cbiAgZW1pdHRlciA9IG5ldyBTdWJqZWN0PE5vdGlmaWNhdGlvbkV2ZW50PigpO1xuICBpY29uczogSWNvbnMgPSBERUZBVUxUX0lDT05TO1xuXG4gIHNldChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbiwgdG86IGJvb2xlYW4pOiBOb3RpZmljYXRpb24ge1xuICAgIG5vdGlmaWNhdGlvbi5pZCA9IG5vdGlmaWNhdGlvbi5vdmVycmlkZSAmJiBub3RpZmljYXRpb24ub3ZlcnJpZGUuaWQgP1xuICAgICAgbm90aWZpY2F0aW9uLm92ZXJyaWRlLmlkIDpcbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygzKTtcbiAgICBub3RpZmljYXRpb24uY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAgIG5vdGlmaWNhdGlvbi5jbGlja0ljb24gPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAgIG5vdGlmaWNhdGlvbi50aW1lb3V0RW5kID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ3NldCcsIG5vdGlmaWNhdGlvbiwgYWRkOiB0byB9KTtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG5cbiAgc3VjY2Vzcyh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VjY2VzcywgaWNvbjogdGhpcy5pY29ucy5zdWNjZXNzLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIGVycm9yKHRpdGxlOiBhbnkgPSAnJywgY29udGVudDogYW55ID0gJycsIG92ZXJyaWRlPzogYW55LCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyB0aXRsZSwgY29udGVudDogY29udGVudCB8fCAnJywgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5FcnJvciwgaWNvbjogdGhpcy5pY29ucy5lcnJvciwgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICBhbGVydCh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQWxlcnQsIGljb246IHRoaXMuaWNvbnMuYWxlcnQsIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgaW5mbyh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuSW5mbywgaWNvbjogdGhpcy5pY29ucy5pbmZvLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIHdhcm4odGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50OiBjb250ZW50IHx8ICcnLCB0eXBlOiBOb3RpZmljYXRpb25UeXBlLldhcm4sIGljb246IHRoaXMuaWNvbnMud2Fybiwgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICBiYXJlKHRpdGxlOiBhbnkgPSAnJywgY29udGVudDogYW55ID0gJycsIG92ZXJyaWRlPzogYW55LCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyB0aXRsZSwgY29udGVudDogY29udGVudCB8fCAnJywgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5CYXJlLCBpY29uOiAnYmFyZScsIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgLy8gV2l0aCB0eXBlIG1ldGhvZFxuICBjcmVhdGUodGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgdHlwZSA9IE5vdGlmaWNhdGlvblR5cGUuU3VjY2Vzcywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50LCB0eXBlLCBpY29uOiAodGhpcy5pY29ucyBhcyBhbnkpW3R5cGVdLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8vIEhUTUwgTm90aWZpY2F0aW9uIG1ldGhvZFxuICBodG1sKGh0bWw6IGFueSwgdHlwZSA9IE5vdGlmaWNhdGlvblR5cGUuU3VjY2Vzcywgb3ZlcnJpZGU/OiBhbnksIGljb24gPSAnYmFyZScsIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IGh0bWwsIHR5cGUsIGljb246ICh0aGlzLmljb25zIGFzIGFueSlbaWNvbl0sIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGFsbCBub3RpZmljYXRpb25zIG1ldGhvZFxuICByZW1vdmUoaWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ2NsZWFuJywgaWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ2NsZWFuQWxsJyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==