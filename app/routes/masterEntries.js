import Dashboard from '../components/pages/dashboard';
import SensorPage from '../components/pages/sensor';
import Website from '../components/pages/website';
import IpPage from '../components/pages/ipPage';
import Users from '../components/pages/users';
import RequestPage from '../components/pages/requestPage';

module.exports = {
  path: "/settings",
  getComponents(nextState, callback) {
    require.ensure([], function(require) {
      callback(null, Dashboard);
    })
  },
  getIndexRoute(partialNextState, callback) {
    require.ensure([], function(require) {
      callback(null, {
        component: require(SensorPage)
      })
    })
  },
  getChildRoutes(partialNextState, callback) {
    callback(null, [{
      path: "sensor",
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, SensorPage)
        })
      }
    }, {
      path: "website",
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, Website)
        })
      }
    }, {
      path: "ipPage",
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, IpPage)
        })
      }
    }, {
      path: "users",
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, Users)
        })
      }
    },  {
      path: "requestPage",
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, RequestPage)
        })
      }
    }])
  }
}