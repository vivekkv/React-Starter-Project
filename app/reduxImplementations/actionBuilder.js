import createConstant from './constantBuilder';

export default function actionCreator(moduleName, actionName, payLoad, actionTypeName) {

    return {
        type: createConstant(moduleName, actionName),
        ...payLoad
    }
}