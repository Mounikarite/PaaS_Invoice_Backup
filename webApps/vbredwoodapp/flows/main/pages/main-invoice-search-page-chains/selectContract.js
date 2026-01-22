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

  class selectContract extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {any} params.data 
     * @param {any} params.metadata 
     */
    async run(context, { key, data, metadata }) {
      const { $page, $flow, $application } = context;

      const callRestINVOICEFETCHFILEGetGLDITC0001LOVARINVOICES10Result = await Actions.callRest(context, {
        endpoint: 'INVOICE_FETCH_FILE/getApiIntegrationV1FlowsRestRITE_INVOICE_INVOICES1_0Get_invoices',
        uriParams: {
          'contract_id': $page.variables.l_contract_id,
        },
      });

      $page.variables.AR_INV_ADP_VAR.data = callRestINVOICEFETCHFILEGetGLDITC0001LOVARINVOICES10Result.body.ARInvoices;

      const callComponentMethodARInvRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#AR_inv',
        method: 'refresh',
      });
    }
  }

  return selectContract;
});
