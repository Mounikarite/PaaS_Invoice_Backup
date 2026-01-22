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

  class ButtonActionChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      const callRestINVOICEFETCHFILEGetINVSEARCHRITEINVOICBACKUP10Result = await Actions.callRest(context, {
        endpoint: 'INVOICE_FETCH_FILE/getINV_SEARCH_RITE_INVOIC_BACKUP1_0',
        uriParams: {
          'P_INVOICE_ID': current.invoice_id,
        },
      });

      $page.variables.Inv_Backup_Search_Obj = callRestINVOICEFETCHFILEGetINVSEARCHRITEINVOICBACKUP10Result.body;

      const callComponentMethodSearchInvDataOpenResult = await Actions.callComponentMethod(context, {
        selector: '#searchInvData',
        method: 'open',
      });

      const callComponentMethodSearchDataINVTableRefreshResult = await Actions.callComponentMethod(context, {
        selector: '#searchDataINVTable',
        method: 'refresh',
      });
    }
  }

  return ButtonActionChain;
});
