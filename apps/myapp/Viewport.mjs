import BaseViewport       from '../../node_modules/neo.mjs/src/container/Viewport.mjs';
import ViewportController from './ViewportController.mjs'

/**
 * @class MyApp.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends BaseViewport {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.Viewport'
         * @protected
         */
        className: 'MyApp.Viewport',
        /**
         * @member {Neo.controller.Component} controller=ViewportController
         */
        controller: ViewportController,
        /**
         * @member {Object} style
         */
        style: {
            padding: '20px'
        }
    }}
}

Neo.applyClassConfig(Viewport);

export {Viewport as default};