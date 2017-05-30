import { Directive, ElementRef, Input } from "@angular/core";
var FontAwesomeIcon = (function () {
    function FontAwesomeIcon(el) {
        this.el = el;
    }
    Object.defineProperty(FontAwesomeIcon.prototype, "faName", {
        set: function (val) {
            this.el.nativeElement.className = "fa fa-" + val;
        },
        enumerable: true,
        configurable: true
    });
    return FontAwesomeIcon;
}());
export { FontAwesomeIcon };
FontAwesomeIcon.decorators = [
    { type: Directive, args: [{
                selector: "ion-icon[fa-name]"
            },] },
];
/** @nocollapse */
FontAwesomeIcon.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
FontAwesomeIcon.propDecorators = {
    'faName': [{ type: Input, args: ["fa-name",] },],
};
//# sourceMappingURL=fontawesome.directive.js.map