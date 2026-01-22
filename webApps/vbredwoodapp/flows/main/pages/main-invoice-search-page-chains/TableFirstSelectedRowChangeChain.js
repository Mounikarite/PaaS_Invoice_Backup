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

  class TableFirstSelectedRowChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.rowKey 
     * @param {any} params.rowData 
     */
    async run(context, { rowKey, rowData }) {
      const { $page, $flow, $application } = context;

      const callRestINVOICEFETCHFILEGetINVOICEFETCHFILE10SampleResult = await Actions.callRest(context, {
        endpoint: 'INVOICE_FETCH_FILE/getINVOICE_FETCH_FILE1_0Sample',
        uriParams: {
          'document_id': rowData.documentId,
        },
      });

      await $page.functions.downloadFile(callRestINVOICEFETCHFILEGetINVOICEFETCHFILE10SampleResult.body, 'application/pdf', 'Invoice.pdf');
    }
  }

  return TableFirstSelectedRowChangeChain;
});
