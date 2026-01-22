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

  class ButtonsetValueChangeChain1 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     */
    async run(context, { value }) {
      const { $page, $flow, $application } = context;

      const navigateToPageMainDashboardResult = await Actions.navigateToPage(context, {
        page: 'main-dashboard',
      });
    }
  }

  return ButtonsetValueChangeChain1;
});
