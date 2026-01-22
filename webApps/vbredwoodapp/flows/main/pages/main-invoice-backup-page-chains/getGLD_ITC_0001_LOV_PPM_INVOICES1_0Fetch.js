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

  class getGLD_ITC_0001_LOV_PPM_INVOICES1_0Fetch extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {{hookHandler:'vb/RestHookHandler'}} params.configuration
     */
    async run(context, { configuration }) {
      const { $page, $flow, $application } = context;
      const callRestEndpoint1 = await Actions.callRest(context, {
        endpoint: 'INVOICE_FETCH_FILE/getGLD_ITC_0001_LOV_PPM_INVOICES1_0',
        uriParams: {
          'p_contract_id': $page.variables.contract_id,
        },
        responseType: 'getGLDITC001LOVPPMINVOICES1Response',
        hookHandler: configuration.hookHandler,
        requestType: 'json',
      });

      return callRestEndpoint1;
    }
  }

  return getGLD_ITC_0001_LOV_PPM_INVOICES1_0Fetch;
});
