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

  class AdvancedCreateAndEditPageTemplateSpSaveChain2 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      await Actions.fireNotificationEvent(context, {
        summary: 'Saved successfully',
        message: 'Data Saved Successfully ',
        displayMode: 'persist',
        type: 'confirmation',
      });
    }
  }

  return AdvancedCreateAndEditPageTemplateSpSaveChain2;
});
