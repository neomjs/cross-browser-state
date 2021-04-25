import Viewport from './view/Viewport.mjs';

const onStart = () => Neo.app({
    mainView: Viewport,
    name    : 'MyApp2'
});

export {onStart as onStart};