import BaseViewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp2.view.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends BaseViewport {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp2.view.Viewport'
         * @protected
         */
        className: 'MyApp2.view.Viewport',
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