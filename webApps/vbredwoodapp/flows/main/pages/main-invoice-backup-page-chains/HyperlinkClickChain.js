define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class HyperlinkClickChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {object} params.event
     */
    async run(context, { event }) {
      const { $page, $flow, $application, $constants, $variables, $functions } = context;

      await $functions.navigateTo('https://fa-etao-dev20-saasfademo1.ds-fa.oraclepdemos.com/analytics/saw.dll?bipublisherEntry&Action=open&itemType=.xdo&bipPath=%2FCustom%2FInvoice_Backup%2FRED%20Path%2FInvoice%20Backup%20Missing%20Attachment%20Report.xdo&path=%2Fshared%2FCustom%2FInvoice_Backup%2FRED%20Path%2FInvoice%20Backup%20Missing%20Attachment%20Report.xdo');
    }
  }

  return HyperlinkClickChain;
});
