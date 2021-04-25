import Component from '../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class MyApp.EditUserDialogController
 * @extends Neo.controller.Component
 */
class EditUserDialogController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.EditUserDialogController'
         * @protected
         */
        className: 'MyApp.EditUserDialogController'
    }}

    /**
     *
     * @param {Object} data
     */
    onFirstnameTextFieldChange(data) {
        this.getModel().setData({
            'user.firstname': data.value || ''
        });
    }

    /**
     *
     * @param {Object} data
     */
    onLastnameTextFieldChange(data) {
        this.getModel().setData({
            'user.lastname': data.value || ''
        });
    }
}

Neo.applyClassConfig(EditUserDialogController);

export {EditUserDialogController as default};