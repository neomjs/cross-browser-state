import Viewport from './view/Viewport.mjs';

const onStart = () => Neo.app({
    appPath : 'apps/myapp/',
    mainView: Viewport,
    name    : 'MyApp'
});

export {onStart as onStart};