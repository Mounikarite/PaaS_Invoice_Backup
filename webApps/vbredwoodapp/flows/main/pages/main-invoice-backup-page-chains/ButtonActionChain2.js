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

  class ButtonActionChain2 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {object} params.event
     * @param {any} params.originalEvent
     */
    async run(context, { event, originalEvent }) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const ojDialog1061370691Close = await Actions.callComponentMethod(context, {
        selector: '#oj-dialog--106137069-1',
        method: 'close',
      });

      await Actions.resetVariables(context, {
        variables: [
    '$variables.email',
  ],
      });
    }
  }

  return ButtonActionChain2;
});
