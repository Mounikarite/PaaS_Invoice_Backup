/* Copyright (c) 2023, Oracle and/or its affiliates */

define([
  'vb/action/actionChain',
  'vb/action/actions',
], (
  ActionChain,
  Actions
) => {
  'use strict';

  class firePageLayoutEventChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $variables, $functions } = context;
      
      await Actions.fireEvent(context, {
        event: 'ojSpRedwoodPageLayout',
        payload: {
          pageType: 'edgeToEdge',
        },
      }, { id: 'firePageLayoutEventAction' });

      await Actions.fireNotificationEvent(context, {
        summary: 'Submit',
      });

      if (true) {

        const response2 = await Actions.callRest(context, {
          endpoint: 'Databridge_Oracle_Invoice_Backup/getApiOracleLovBusinessUnits',
        });

        $variables.bu_list.data = response2.body.data.BusinessUnits;
      }
    

     
    }
  }

  return firePageLayoutEventChain;
});
