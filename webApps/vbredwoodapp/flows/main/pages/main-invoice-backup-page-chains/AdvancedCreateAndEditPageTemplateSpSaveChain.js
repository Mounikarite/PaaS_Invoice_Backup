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

  class AdvancedCreateAndEditPageTemplateSpSaveChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      await Actions.fireEvent(context, {
        event: 'application:spShowToast',
        payload: {
          message: 'Data Saved Successfully ',
        },
      });

      await Actions.fireNotificationEvent(context, {
        summary: 'Save',
      });
    }
  }

  return AdvancedCreateAndEditPageTemplateSpSaveChain;
});
