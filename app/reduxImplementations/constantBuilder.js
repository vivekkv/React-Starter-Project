export function createConstant(moduleName, subModuleName, actionTypeName) {

    return "TLNT_APP_" + moduleName + "_" + subModuleName + (actionTypeName ? "_" + actionTypeName : "");
}

export default createConstant;