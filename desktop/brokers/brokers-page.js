/** @decorator */

import { BrokersPage } from '../../base/brokers/brokers-page.js';
import { html } from '../../lib/template.js';
import { css } from '../../lib/element/styles/css.js';
import { when } from '../../lib/element/templating/when.js';
import { ref } from '../../lib/element/templating/ref.js';
import {
  basePageStyles,
  loadingIndicator
} from '../../design/leafygreen/styles/page.js';

export const brokersPageTemplate = (context, definition) => html`
  <template>
    <${'ppp-page-header'}>
      <${'ppp-button'}
        appearance="primary"
        slot="controls"
        @click="${(x) => (x.app.page = 'new-broker')}"
      >
        Добавить брокера
      </ppp-button>
      Список брокеров
    </ppp-page-header>
    <div class="loading-wrapper" ?busy="${(x) => x.busy}">
      <${'ppp-table'} ${ref('table')}
        :columns="${(x) => x.columns}">
      </ppp-table>
      ${when((x) => x.busy, html`${loadingIndicator()}`)}
    </div>
  </template>
`;

export const brokersPageStyles = (context, definition) =>
  css`
    ${basePageStyles}
    .loading-wrapper {
      margin-top: 8px;
    }
  `;

export const brokersPage = BrokersPage.compose({
  baseName: 'brokers-page',
  template: brokersPageTemplate,
  styles: brokersPageStyles
});
