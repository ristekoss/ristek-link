// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}

export { eachAxis };
