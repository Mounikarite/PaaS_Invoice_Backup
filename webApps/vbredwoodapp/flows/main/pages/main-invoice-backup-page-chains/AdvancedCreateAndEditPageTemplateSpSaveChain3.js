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

  class AdvancedCreateAndEditPageTemplateSpSaveChain3 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const navigateToPageMainInvoiceSearchResult = await Actions.navigateToPage(context, {
        page: 'main-invoice-search',
      });
    }
  }

  return AdvancedCreateAndEditPageTemplateSpSaveChain3;
});
