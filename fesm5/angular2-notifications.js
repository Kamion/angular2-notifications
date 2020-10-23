import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventEmitter, Inject, Injectable, TemplateRef, ChangeDetectorRef, NgZone, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, Output, InjectionToken, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

var DEFAULT_ICONS = {
    alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>\n    ",
    error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
    info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
    success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    ",
    warn: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" width=\"64\" viewBox=\"0 0 64 64\" height=\"64\">\n          <circle cx=\"32.086\" cy=\"50.142\" r=\"2.256\"/>\n          <path d=\"M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z\"/>\n          <path d=\"M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z\"/>\n        </svg>\n    "
};

var NotificationType;
(function (NotificationType) {
    NotificationType["Success"] = "success";
    NotificationType["Error"] = "error";
    NotificationType["Alert"] = "alert";
    NotificationType["Info"] = "info";
    NotificationType["Warn"] = "warn";
    NotificationType["Bare"] = "bare";
})(NotificationType || (NotificationType = {}));

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService, domSanitizer, cd, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.cd = cd;
        this.zone = zone;
        this.titleIsTemplate = false;
        this.contentIsTemplate = false;
        this.htmlIsTemplate = false;
        this.progressWidth = 0;
        this.stopTime = false;
        this.framesPerSecond = 40;
        this.instance = function () {
            var now = new Date().getTime();
            if (_this.endTime < now) {
                _this.remove();
                _this.item.timeoutEnd.emit();
            }
            else if (!_this.stopTime) {
                if (_this.showProgressBar) {
                    // We add this.sleepTime just to have 100% before close
                    _this.progressWidth = Math.min((now - _this.startTime + _this.sleepTime) * 100 / _this.timeOut, 100);
                }
                _this.timer = setTimeout(_this.instance, _this.sleepTime);
            }
            _this.zone.run(function () {
                if (!_this.cd.destroyed) {
                    _this.cd.detectChanges();
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.contentType(this.item.title, 'title');
        this.contentType(this.item.content, 'content');
        this.contentType(this.item.html, 'html');
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
        this.safeInputHtml = this.domSanitizer.bypassSecurityTrustHtml(this.item.html);
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
        this.cd.detach();
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.sleepTime = 1000 / this.framesPerSecond /* ms */;
        this.startTime = new Date().getTime();
        this.endTime = this.startTime + this.timeOut;
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.sleepTime); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
            this.pauseStart = new Date().getTime();
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        var _this = this;
        if (this.pauseOnHover) {
            this.stopTime = false;
            this.startTime += (new Date().getTime() - this.pauseStart);
            this.endTime += (new Date().getTime() - this.pauseStart);
            this.zone.runOutsideAngular(function () { return setTimeout(_this.instance, _this.sleepTime); });
        }
    };
    NotificationComponent.prototype.onClick = function (event) {
        this.item.click.emit(event);
        if (this.clickToClose) {
            this.remove();
        }
    };
    NotificationComponent.prototype.onClickIcon = function (event) {
        this.item.clickIcon.emit(event);
        if (this.clickIconToClose) {
            this.remove();
        }
    };
    // Attach all the overrides
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            setTimeout(function () {
                _this.notificationService.set(_this.item, false);
            }, 310);
        }
        else {
            setTimeout(function () {
                _this.notificationService.set(_this.item, false);
            }, 5310);
        }
    };
    NotificationComponent.prototype.contentType = function (item, key) {
        if (item instanceof TemplateRef) {
            this[key] = item;
        }
        else {
            this[key] = this.domSanitizer.bypassSecurityTrustHtml(item);
        }
        this[key + 'IsTemplate'] = item instanceof TemplateRef;
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: NotificationsService },
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "timeOut", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "showProgressBar", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "pauseOnHover", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "clickToClose", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "clickIconToClose", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "maxLength", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "theClass", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "rtl", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "animate", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "position", void 0);
    __decorate$1([
        Input()
    ], NotificationComponent.prototype, "item", void 0);
    NotificationComponent = __decorate$1([
        Component({
            selector: 'simple-notification',
            encapsulation: ViewEncapsulation.None,
            animations: [
                trigger('enterLeave', [
                    // Fade
                    state('fade', style({ opacity: 1, bottom: '-20px' })),
                    transition('* => fade', [
                        style({ opacity: 0 }),
                        animate('1000ms ease-in-out')
                    ]),
                    state('fadeOut', style({ opacity: 0, bottom: '-400px' })),
                    transition('fade => fadeOut', [
                        style({ opacity: 1 }),
                        animate('1000ms ease-in-out')
                    ]),
                    // Enter from top
                    state('fromTop', style({ opacity: 1, transform: 'translateY(0)' })),
                    transition('* => fromTop', [
                        style({ opacity: 0, transform: 'translateY(-5%)' }),
                        animate('400ms ease-in-out')
                    ]),
                    state('fromTopOut', style({ opacity: 0, transform: 'translateY(5%)' })),
                    transition('fromTop => fromTopOut', [
                        style({ opacity: 1, transform: 'translateY(0)' }),
                        animate('300ms ease-in-out')
                    ]),
                    // Enter from right
                    state('fromRight', style({ opacity: 1, transform: 'translateX(0)' })),
                    transition('* => fromRight', [
                        style({ opacity: 0, transform: 'translateX(5%)' }),
                        animate('400ms ease-in-out')
                    ]),
                    state('fromRightOut', style({ opacity: 0, transform: 'translateX(-5%)' })),
                    transition('fromRight => fromRightOut', [
                        style({ opacity: 1, transform: 'translateX(0)' }),
                        animate('300ms ease-in-out')
                    ]),
                    // Enter from bottom
                    state('fromBottom', style({ opacity: 1, transform: 'translateY(0)' })),
                    transition('* => fromBottom', [
                        style({ opacity: 0, transform: 'translateY(5%)' }),
                        animate('400ms ease-in-out')
                    ]),
                    state('fromBottomOut', style({ opacity: 0, transform: 'translateY(-5%)' })),
                    transition('fromBottom => fromBottomOut', [
                        style({ opacity: 1, transform: 'translateY(0)' }),
                        animate('300ms ease-in-out')
                    ]),
                    // Enter from left
                    state('fromLeft', style({ opacity: 1, transform: 'translateX(0)' })),
                    transition('* => fromLeft', [
                        style({ opacity: 0, transform: 'translateX(-5%)' }),
                        animate('400ms ease-in-out')
                    ]),
                    state('fromLeftOut', style({ opacity: 0, transform: 'translateX(5%)' })),
                    transition('fromLeft => fromLeftOut', [
                        style({ opacity: 1, transform: 'translateX(0)' }),
                        animate('300ms ease-in-out')
                    ]),
                    // Rotate
                    state('scale', style({ opacity: 1, transform: 'scale(1)' })),
                    transition('* => scale', [
                        style({ opacity: 0, transform: 'scale(0)' }),
                        animate('400ms ease-in-out')
                    ]),
                    state('scaleOut', style({ opacity: 0, transform: 'scale(0)' })),
                    transition('scale => scaleOut', [
                        style({ opacity: 1, transform: 'scale(1)' }),
                        animate('400ms ease-in-out')
                    ]),
                    // Scale
                    state('rotate', style({ opacity: 1, transform: 'rotate(0deg)' })),
                    transition('* => rotate', [
                        style({ opacity: 0, transform: 'rotate(5deg)' }),
                        animate('400ms ease-in-out')
                    ]),
                    state('rotateOut', style({ opacity: 0, transform: 'rotate(-5deg)' })),
                    transition('rotate => rotateOut', [
                        style({ opacity: 1, transform: 'rotate(0deg)' }),
                        animate('400ms ease-in-out')
                    ])
                ])
            ],
            template: "<div class=\"simple-notification\"\n     [@enterLeave]=\"item.state\"\n     (click)=\"onClick($event)\"\n     [class]=\"theClass\"\n     [ngClass]=\"{\n            'alert': item.type === 'alert',\n            'error': item.type === 'error',\n            'warn': item.type === 'warn',\n            'success': item.type === 'success',\n            'info': item.type === 'info',\n            'bare': item.type === 'bare',\n            'rtl-mode': rtl,\n            'has-icon': item.icon !== 'bare'\n        }\"\n     (mouseenter)=\"onEnter()\"\n     (mouseleave)=\"onLeave()\">\n\n    <div *ngIf=\"!item.html\">\n\n        <div class=\"sn-title\" *ngIf=\"titleIsTemplate; else regularTitle\">\n            <ng-container *ngTemplateOutlet=\"title; context: item.context\"></ng-container>\n        </div>\n\n        <ng-template #regularTitle>\n            <div class=\"sn-title\" [innerHTML]=\"title\"></div>\n        </ng-template>\n\n        <div class=\"sn-content\" *ngIf=\"contentIsTemplate else regularContent\">\n            <ng-container *ngTemplateOutlet=\"content; context: item.context\"></ng-container>\n        </div>\n\n        <ng-template #regularContent>\n            <div class=\"sn-content\" [innerHTML]=\"content\"></div>\n        </ng-template>\n\n        <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n    </div>\n    <div *ngIf=\"item.html\">\n        <div class=\"sn-html\" *ngIf=\"htmlIsTemplate; else regularHtml\">\n            <ng-container *ngTemplateOutlet=\"item.html; context: item.context\"></ng-container>\n        </div>\n\n        <ng-template #regularHtml>\n            <div class=\"sn-content\" [innerHTML]=\"safeInputHtml\"></div>\n        </ng-template>\n\n        <div class=\"icon\" [class.icon-hover]=\"clickIconToClose\" *ngIf=\"item.icon\" [innerHTML]=\"safeSvg\" (click)=\"onClickIcon($event)\"></div>\n    </div>\n\n    <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n        <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n    </div>\n\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".simple-notification{position:fixed;padding:10px 20px;display:flex;align-items:center;width:520px;min-height:56px;left:50%;bottom:-400px;transform:translateX(-50%);box-sizing:border-box;border-top-left-radius:6px;border-top-right-radius:6px;color:#fff;cursor:pointer;transition:.5s;background:#434f54}.simple-notification .sn-content,.simple-notification .sn-html,.simple-notification .sn-title{margin:0}.simple-notification .sn-title{max-width:314px;font-size:16px;font-style:normal;line-height:1.33;letter-spacing:normal;color:#fff}.simple-notification .sn-content{font-size:16px;line-height:1.33;color:#fff}.simple-notification.has-icon .sn-content,.simple-notification.has-icon .sn-html,.simple-notification.has-icon .sn-title{padding:0 50px 0 0}.simple-notification .icon{position:absolute;width:50px;height:50px;top:55%;right:0;transform:translateY(-50%);box-sizing:border-box}.simple-notification .icon.icon-hover:hover{opacity:.5}.simple-notification .icon svg{fill:#fff;width:100%;height:100%}.simple-notification .icon svg g{fill:#fff}.simple-notification.rtl-mode.has-icon .sn-content,.simple-notification.rtl-mode.has-icon .sn-html,.simple-notification.rtl-mode.has-icon .sn-title{padding:0 0 0 50px}.simple-notification.rtl-mode{direction:rtl}.simple-notification.rtl-mode .sn-content{padding:0 0 0 50px}.simple-notification.rtl-mode svg{left:0;right:auto}.simple-notification .sn-progress-loader{position:absolute;top:0;left:0;width:100%;height:5px}.simple-notification .sn-progress-loader span{float:left;height:100%;border-radius:6px;background:#00a8ea}"]
        })
    ], NotificationComponent);
    return NotificationComponent;
}());

var NotificationAnimationType;
(function (NotificationAnimationType) {
    NotificationAnimationType["Fade"] = "fade";
    NotificationAnimationType["FromTop"] = "fromTop";
    NotificationAnimationType["FromRight"] = "fromRight";
    NotificationAnimationType["FromBottom"] = "fromBottom";
    NotificationAnimationType["FromLeft"] = "fromLeft";
    NotificationAnimationType["Scale"] = "scale";
    NotificationAnimationType["Rotate"] = "rotate";
})(NotificationAnimationType || (NotificationAnimationType = {}));

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var SimpleNotificationsComponent = /** @class */ (function () {
    function SimpleNotificationsComponent(service, cd) {
        this.service = service;
        this.cd = cd;
        this.create = new EventEmitter();
        this.destroy = new EventEmitter();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        // Received values
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        // Sent values
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.clickIconToClose = false;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = NotificationAnimationType.FromRight;
        this.usingComponentOptions = false;
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: function (opt) {
            this.usingComponentOptions = true;
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    SimpleNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Only attach global options if config
         * options were never sent through input
         */
        if (!this.usingComponentOptions) {
            this.attachChanges(this.service.globalOptions);
        }
        this.listener = this.service.emitter
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add) {
                        _this.add(item.notification);
                    }
                    else {
                        _this.defaultBehavior(item);
                    }
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
            if (!_this.cd.destroyed) {
                _this.cd.detectChanges();
            }
        });
    };
    SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
        this.cd.detach();
    };
    // Default behavior on event
    SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.destroy.emit(this.buildEmit(value.notification, false));
    };
    // Add the new notification to the notification array
    SimpleNotificationsComponent.prototype.add = function (item) {
        item.createdOn = new Date();
        var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        // Override icon if set
        if (item.override && item.override.icons && item.override.icons[item.type]) {
            item.icon = item.override.icons[item.type];
        }
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack) {
                    this.notifications.splice(0, 1);
                }
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack) {
                    this.notifications.splice(this.notifications.length - 1, 1);
                }
                this.notifications.splice(0, 0, item);
            }
            this.create.emit(this.buildEmit(item, true));
        }
    };
    // Check if notifications should be prevented
    SimpleNotificationsComponent.prototype.block = function (item) {
        var e_1, _a;
        var toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            try {
                for (var _b = __values(this.notifications), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var notification = _c.value;
                    if (toCheck(notification, item)) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (this.preventLastDuplicates) {
            var comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
        return checker.html ?
            checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html :
            false;
    };
    // Attach all the changes received in the options object
    SimpleNotificationsComponent.prototype.attachChanges = function (options) {
        for (var key in options) {
            if (this.hasOwnProperty(key)) {
                this[key] = options[key];
            }
            else if (key === 'icons') {
                this.service.icons = options[key];
            }
        }
    };
    SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
        var toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
        var indexOfDelete = 0;
        var doDelete = false;
        var noti;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                noti = notification;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
            this.destroy.emit(this.buildEmit(noti, false));
        }
    };
    SimpleNotificationsComponent.ctorParameters = function () { return [
        { type: NotificationsService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate$2([
        Input()
    ], SimpleNotificationsComponent.prototype, "options", null);
    __decorate$2([
        Output()
    ], SimpleNotificationsComponent.prototype, "create", void 0);
    __decorate$2([
        Output()
    ], SimpleNotificationsComponent.prototype, "destroy", void 0);
    SimpleNotificationsComponent = __decorate$2([
        Component({
            selector: 'simple-notifications',
            encapsulation: ViewEncapsulation.None,
            template: "<div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n    <simple-notification\n            *ngFor=\"let a of notifications; let i = index\"\n            [item]=\"a\"\n            [timeOut]=\"timeOut\"\n            [clickToClose]=\"clickToClose\"\n            [clickIconToClose]=\"clickIconToClose\"\n            [maxLength]=\"maxLength\"\n            [showProgressBar]=\"showProgressBar\"\n            [pauseOnHover]=\"pauseOnHover\"\n            [theClass]=\"theClass\"\n            [rtl]=\"rtl\"\n            [animate]=\"animate\"\n            [position]=\"i\">\n    </simple-notification>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".simple-notification-wrapper{position:fixed;width:300px;z-index:1000}.simple-notification-wrapper.left{left:20px}.simple-notification-wrapper.top{top:20px}.simple-notification-wrapper.right{right:20px}.simple-notification-wrapper.bottom{bottom:20px}.simple-notification-wrapper.center{left:50%;transform:translateX(-50%)}.simple-notification-wrapper.middle{top:50%;transform:translateY(-50%)}.simple-notification-wrapper.middle.center{transform:translate(-50%,-50%)}@media (max-width:340px){.simple-notification-wrapper{width:auto;left:20px;right:20px}}"]
        })
    ], SimpleNotificationsComponent);
    return SimpleNotificationsComponent;
}());

var DEFAULT_OPTIONS = {
    position: ['bottom', 'right'],
    timeOut: 0,
    showProgressBar: true,
    pauseOnHover: true,
    lastOnBottom: true,
    clickToClose: true,
    clickIconToClose: false,
    maxLength: 0,
    maxStack: 8,
    preventDuplicates: false,
    preventLastDuplicates: false,
    theClass: '',
    rtl: false,
    animate: NotificationAnimationType.FromRight,
    icons: DEFAULT_ICONS
};

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
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OPTIONS = new InjectionToken('options');
function optionsFactory(options) {
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
    SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate$3([
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

/**
 * Generated bundle index. Do not edit.
 */

export { NotificationAnimationType, NotificationComponent, NotificationType, NotificationsService, OPTIONS, SimpleNotificationsComponent, SimpleNotificationsModule, optionsFactory };
//# sourceMappingURL=angular2-notifications.js.map
