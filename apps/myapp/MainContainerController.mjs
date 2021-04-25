import Component from '../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class MyApp.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    /**
     * @member {MyApp.EditUserDialog|null} dialog=null
     */
    dialog = null

    static getConfig() {return {
        /**
         * @member {String} className='MyApp.MainContainerController'
         * @protected
         */
        className: 'MyApp.MainContainerController'
    }}

    /**
     *
     * @param {Object} data
     */
    onEditUserButtonClick(data) {
        let me = this;

        if (!me.dialog) {
            import(
                /* webpackChunkName: 'examples/model/dialog/EditUserDialog' */
                './EditUserDialog.mjs'
            ).then(module => {
                me.dialog = Neo.create({
                    module         : module.default,
                    animateTargetId: me.getReference('edit-user-button').id,
                    appName        : me.component.appName,
                    closeAction    : 'hide',

                    model: {
                        parent: me.getModel()
                    }
                });
            });
        } else {
            me.dialog.show();
        }
    }
}

Neo.applyClassConfig(MainContainerController);

export {MainContainerController as default};