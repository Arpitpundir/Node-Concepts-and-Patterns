
function loadModule(fileName, module, exports){
    const wrappedSrc = (function(fileName, module, require){
        ${fs.readFileSync(fileName)};
    })(fileName, module.exports, require);
    console.log('-------------->',wrappedSrc);
    eval(wrappedSrc);
}

function require(moduleName){
    const currentModuleId = require.resolve(moduleName);
    if(require.cache[currentModuleId]){
        return require.cache[currentModuleId].exports;
    }
    const module = {
        id: currentModuleId,
        exports
    };

    /**
     * when code is loaded form module with revealing pattern then it wont conflict with existing code of require as we are exposing only selected variable
     */

    loadModule(moduleName, module, require);

    return module.exports;
};

require.cache = {};
require.resolve = (moduleName) => {
    /**
     * code for resolving a module with a path
     */
}