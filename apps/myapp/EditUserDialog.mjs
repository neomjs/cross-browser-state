import Dialog                   from '../../node_modules/neo.mjs/src/dialog/Base.mjs';
import EditUserDialogController from './EditUserDialogController.mjs';
import TextField                from '../../node_modules/neo.mjs/src/form/field/Text.mjs';

/**
 * @class MyApp.EditUserDialog
 * @extends Neo.dialog.Base
 */
class EditUserDialog extends Dialog {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.EditUserDialog'
         * @protected
         */
        className: 'MyApp.EditUserDialog',
        /**
         * @member {Object} containerConfig={style:{padding:'1em'}}
         */
        containerConfig: {
            style: {
                padding: '1em'
            }
        },
        /**
         * @member {Neo.controller.Component} controller=EditUserDialogController
         */
        controller: EditUserDialogController,
        /**
         * @member {String} title='Edit User'
         */
        title: 'Edit User',
        /**
         * @member {Object[]} items
         */
        items: [{
            module    : TextField,
            bind      : {value: data => `${data.user.firstname}`},
            flex      : 'none',
            labelText : 'Firstname:',
            labelWidth: 110,
            listeners : {change: 'onFirstnameTextFieldChange'}
        }, {
            module    : TextField,
            bind      : {value: data => `${data.user.lastname}`},
            flex      : 'none',
            labelText : 'Lastname:',
            labelWidth: 110,
            listeners : {change: 'onLastnameTextFieldChange'}
        }],
        /**
         * @member {Object} wrapperStyle={height: '300px',width : '400px'}
         */
        wrapperStyle: {
            height: '300px',
            width : '400px'
        }
    }}
}

Neo.applyClassConfig(EditUserDialog);

export {EditUserDialog as default};