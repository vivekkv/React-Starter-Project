import Root from '../components/root';
import App from '../components/app';

export default [{
    component: Root,
    path: "/",
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: App
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
           callback(null, [
              require("./home"),
              require("./masterEntries"),
          ])    
        })
    },
}, {
    path: "/notauthorized",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../components/common/NotAuthroized'))
        })
    }
}, {
    path: "*",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../components/common/NotFound'))
        })
    }
}]