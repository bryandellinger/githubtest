import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IJquerydatatableWebPartProps {
    description: string;
}
export default class JquerydatatableWebPart extends BaseClientSideWebPart<IJquerydatatableWebPartProps> {
    render(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=JquerydatatableWebPart.d.ts.map