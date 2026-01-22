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

  class SelectValueItemChangeChain4 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {object} params.event
     * @param {any} params.previousValue
     * @param {any} params.value
     * @param {string} params.updatedFrom
     * @param {any} params.key
     * @param {any} params.data
     * @param {any} params.metadata
     * @param {any} params.valueItem
     */
    async run(context, { event, previousValue, value, updatedFrom, key, data, metadata, valueItem }) {
      const { $page, $flow, $application, $constants, $variables, $event } = context;

      await Actions.resetVariables(context, {
        variables: [
    '$variables.projectsADP.data',
  ],
      });

      $variables.bid = $variables.bu_id;

      const response = await Actions.callRest(context, {
        endpoint: 'Databridge_Oracle_Invoice_Backup/getApiOracleLovProjects',
        uriParams: {
          'P_BU_ID': $variables.bid,
        },
      });

      $variables.projectsADP.data = response.body.data.Projects;
    }
  }

  return SelectValueItemChangeChain4;
});
