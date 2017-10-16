import Dashboard from '../components/pages/dashboard';

module.exports = {
    path: "/home",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, Dashboard)
        });
    }
}