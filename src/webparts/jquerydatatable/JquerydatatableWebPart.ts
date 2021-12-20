import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './JquerydatatableWebPart.module.scss';
import * as strings from 'JquerydatatableWebPartStrings';
import * as $ from 'jquery';

export interface IJquerydatatableWebPartProps {
  description: string;
}

export default class JquerydatatableWebPart extends BaseClientSideWebPart<IJquerydatatableWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.jquerydatatable }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
            <span class="${ styles.title }">SharePoint &hearts; jQuery!</span>
            <p class="${ styles.subTitle }">This SPFx webpart is using jQuery ${$.fn.jquery}</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
