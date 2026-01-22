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

  class AdvancedCreateAndEditPageTemplateSpPrimaryActionChain1 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      await Actions.fireNotificationEvent(context, {
        displayMode: 'transient',
        summary: 'Saved successfully',
        message: 'Data Saved Successfully ',
      });
    }
  }

  return AdvancedCreateAndEditPageTemplateSpPrimaryActionChain1;
});
