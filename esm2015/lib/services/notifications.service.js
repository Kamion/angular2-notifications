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
let NotificationsService = class NotificationsService {
    constructor(globalOptions) {
        this.globalOptions = globalOptions;
        this.emitter = new Subject();
        this.icons = DEFAULT_ICONS;
    }
    set(notification, to) {
        notification.id = notification.override && notification.override.id ?
            notification.override.id :
            Math.random().toString(36).substring(3);
        notification.click = new EventEmitter();
        notification.clickIcon = new EventEmitter();
        notification.timeoutEnd = new EventEmitter();
        this.emitter.next({ command: 'set', notification, add: to });
        return notification;
    }
    success(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Success, icon: this.icons.success, override, context }, true);
    }
    error(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Error, icon: this.icons.error, override, context }, true);
    }
    alert(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Alert, icon: this.icons.alert, override, context }, true);
    }
    info(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Info, icon: this.icons.info, override, context }, true);
    }
    warn(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Warn, icon: this.icons.warn, override, context }, true);
    }
    bare(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Bare, icon: 'bare', override, context }, true);
    }
    // With type method
    create(title = '', content = '', type = NotificationType.Success, override, context) {
        return this.set({ title, content, type, icon: this.icons[type], override, context }, true);
    }
    // HTML Notification method
    html(html, type = NotificationType.Success, override, icon = 'bare', context) {
        return this.set({ html, type, icon: this.icons[icon], override, context }, true);
    }
    // Remove all notifications method
    remove(id) {
        if (id) {
            this.emitter.next({ command: 'clean', id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    }
};
NotificationsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['options',] }] }
];
NotificationsService = __decorate([
    Injectable(),
    __param(0, Inject('options'))
], NotificationsService);
export { NotificationsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTW5FLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQzRCLGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBRzlDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUMzQyxVQUFLLEdBQVUsYUFBYSxDQUFDO0lBSHpCLENBQUM7SUFLTCxHQUFHLENBQUMsWUFBMEIsRUFBRSxFQUFXO1FBQ3pDLFlBQVksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBTSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU0sQ0FBQztRQUNoRCxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFNLENBQUM7UUFFakQsSUFB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QUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUcsSUFBSSxDQUFDLEtBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixJQUFJLENBQUMsSUFBUyxFQUFFLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBYyxFQUFFLElBQUksR0FBRyxNQUFNLEVBQUUsT0FBYTtRQUMzRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRyxJQUFJLENBQUMsS0FBYSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU0sQ0FBQyxFQUFXO1FBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7NENBNURJLE1BQU0sU0FBQyxTQUFTOztBQUZSLG9CQUFvQjtJQURoQyxVQUFVLEVBQUU7SUFHUixXQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtHQUZULG9CQUFvQixDQThEaEM7U0E5RFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERFRkFVTFRfSUNPTlMgfSBmcm9tICcuLi9jb25zdHMvZGVmYXVsdC1pY29ucy5jb25zdCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi4vZW51bXMvbm90aWZpY2F0aW9uLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaWNvbnMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vdGlmaWNhdGlvbi1ldmVudC50eXBlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvbm90aWZpY2F0aW9uLnR5cGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdvcHRpb25zJykgcHVibGljIGdsb2JhbE9wdGlvbnM6IGFueVxuICApIHsgfVxuXG4gIGVtaXR0ZXIgPSBuZXcgU3ViamVjdDxOb3RpZmljYXRpb25FdmVudD4oKTtcbiAgaWNvbnM6IEljb25zID0gREVGQVVMVF9JQ09OUztcblxuICBzZXQobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24sIHRvOiBib29sZWFuKTogTm90aWZpY2F0aW9uIHtcbiAgICBub3RpZmljYXRpb24uaWQgPSBub3RpZmljYXRpb24ub3ZlcnJpZGUgJiYgbm90aWZpY2F0aW9uLm92ZXJyaWRlLmlkID9cbiAgICAgIG5vdGlmaWNhdGlvbi5vdmVycmlkZS5pZCA6XG4gICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMyk7XG4gICAgbm90aWZpY2F0aW9uLmNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgICBub3RpZmljYXRpb24uY2xpY2tJY29uID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgICBub3RpZmljYXRpb24udGltZW91dEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgICB0aGlzLmVtaXR0ZXIubmV4dCh7IGNvbW1hbmQ6ICdzZXQnLCBub3RpZmljYXRpb24sIGFkZDogdG8gfSk7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIHN1Y2Nlc3ModGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50OiBjb250ZW50IHx8ICcnLCB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlN1Y2Nlc3MsIGljb246IHRoaXMuaWNvbnMuc3VjY2Vzcywgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICBlcnJvcih0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuRXJyb3IsIGljb246IHRoaXMuaWNvbnMuZXJyb3IsIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgYWxlcnQodGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50OiBjb250ZW50IHx8ICcnLCB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFsZXJ0LCBpY29uOiB0aGlzLmljb25zLmFsZXJ0LCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIGluZm8odGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50OiBjb250ZW50IHx8ICcnLCB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkluZm8sIGljb246IHRoaXMuaWNvbnMuaW5mbywgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICB3YXJuKHRpdGxlOiBhbnkgPSAnJywgY29udGVudDogYW55ID0gJycsIG92ZXJyaWRlPzogYW55LCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyB0aXRsZSwgY29udGVudDogY29udGVudCB8fCAnJywgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5XYXJuLCBpY29uOiB0aGlzLmljb25zLndhcm4sIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgYmFyZSh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQmFyZSwgaWNvbjogJ2JhcmUnLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8vIFdpdGggdHlwZSBtZXRob2RcbiAgY3JlYXRlKHRpdGxlOiBhbnkgPSAnJywgY29udGVudDogYW55ID0gJycsIHR5cGUgPSBOb3RpZmljYXRpb25UeXBlLlN1Y2Nlc3MsIG92ZXJyaWRlPzogYW55LCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyB0aXRsZSwgY29udGVudCwgdHlwZSwgaWNvbjogKHRoaXMuaWNvbnMgYXMgYW55KVt0eXBlXSwgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBIVE1MIE5vdGlmaWNhdGlvbiBtZXRob2RcbiAgaHRtbChodG1sOiBhbnksIHR5cGUgPSBOb3RpZmljYXRpb25UeXBlLlN1Y2Nlc3MsIG92ZXJyaWRlPzogYW55LCBpY29uID0gJ2JhcmUnLCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyBodG1sLCB0eXBlLCBpY29uOiAodGhpcy5pY29ucyBhcyBhbnkpW2ljb25dLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgbm90aWZpY2F0aW9ucyBtZXRob2RcbiAgcmVtb3ZlKGlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0aGlzLmVtaXR0ZXIubmV4dCh7IGNvbW1hbmQ6ICdjbGVhbicsIGlkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXR0ZXIubmV4dCh7IGNvbW1hbmQ6ICdjbGVhbkFsbCcgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=