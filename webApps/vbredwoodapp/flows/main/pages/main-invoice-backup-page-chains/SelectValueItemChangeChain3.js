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

  class SelectValueItemChangeChain3 extends ActionChain {

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
      const { $page, $flow, $application, $constants, $variables } = context;
     
      console.log(data)

      await Actions.resetVariables(context, {
        variables: [
    '$variables.contract_list.data',
  ],
      });

       const response = await Actions.callRest(context, {
         endpoint: 'Databridge_Oracle_Invoice_Backup/getApiOracleLovContracts',
         uriParams: {
           'P_BU_ID': $variables.bid,
           'P_PROJECT_ID': $variables.projectValue,
         },
       });

      $variables.contract_list.data = response.body.data.Contracts;
       


    }
  }

  return SelectValueItemChangeChain3;
});
