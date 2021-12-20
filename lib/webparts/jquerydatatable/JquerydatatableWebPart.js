var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './JquerydatatableWebPart.module.scss';
import * as strings from 'JquerydatatableWebPartStrings';
import * as $ from 'jquery';
var JquerydatatableWebPart = /** @class */ (function (_super) {
    __extends(JquerydatatableWebPart, _super);
    function JquerydatatableWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JquerydatatableWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.jquerydatatable + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n            <span class=\"" + styles.title + "\">SharePoint &hearts; jQuery!</span>\n            <p class=\"" + styles.subTitle + "\">This SPFx webpart is using jQuery " + $.fn.jquery + "</p>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(JquerydatatableWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    JquerydatatableWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return JquerydatatableWebPart;
}(BaseClientSideWebPart));
export default JquerydatatableWebPart;
//# sourceMappingURL=JquerydatatableWebPart.js.map