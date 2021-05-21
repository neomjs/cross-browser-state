import Viewport from './view/Viewport.mjs';

const onStart = () => Neo.app({
    mainView: Viewport,
    name    : 'MyApp'
});

export {onStart as onStart};
