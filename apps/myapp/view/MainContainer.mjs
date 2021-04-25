import MainContainerController from './MainContainerController.mjs'
import Panel                   from '../../../node_modules/neo.mjs/src/container/Panel.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Panel
 */
class MainContainer extends Panel {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.MainContainer'
         * @protected
         */
        className: 'MyApp.view.MainContainer',
        /**
         * @member {Object} containerConfig
         */
        containerConfig: {
            layout: {
                ntype: 'vbox',
                align: 'start'
            },

            style: {
                padding: '20px'
            }
        },
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object[]} headers
         */
        headers: [{
            dock : 'top',
            items: [{
                ntype: 'label',
                bind : {
                    text: data => `Current user: ${data.user.firstname} ${data.user.lastname}`
                }
            }, {
                ntype: 'component',
                flex : 1
            }, {
                handler  : 'onEditUserButtonClick',
                iconCls  : 'fa fa-user',
                reference: 'edit-user-button',
                text     : 'Edit user'
            }]
        }],
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype: 'label',
            text : 'Click the edit user button to edit the user data inside this container view model.'
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};