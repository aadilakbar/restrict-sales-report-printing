odoo.define('qweb_print_restrict.report', function (require) {
    'use strict';

    var Report = require('report.report');
    var Dialog = require('web.Dialog');
    var Model = require('web.DataModel');
    var ActionManager = require('web.ActionManager');
    var core = require('web.core');
    var framework = require('web.framework');

    var _t = core._t;

    ActionManager.include({
        ir_actions_report_xml: function (action, options) {
            var _super = this._super.bind(this);
            action = _.clone(action);

            var restricted_states = ['draft', 'sent', 'to_hod', 'to_bm', 'to_sd', 'to_finance', 'to_gm', 'call_order']
            if (action.model === 'sale.order'){
                new Model('sale.order').call("get_current_state",[false, action.context.active_id]).then(function (result){
                    if (restricted_states.includes(result)){
                        framework.unblockUI();
                        return new Dialog(this, {
                            size: 'medium',
                            title: 'Report',
                            $content: $('<div>').html('Cannot print report in this stage.')
                        }).open();
                    }
                    else{
                        return _super(action, options);
                    }
                });
            }
            else{
                return _super(action, options);
            }
        }
    });

});