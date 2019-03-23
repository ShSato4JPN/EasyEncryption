var isNothing = function(target) {
    if (target == null) return true;
    if (target === undefined) return true;
    if (target == "") return true;
    return false;
}


var finishBabbling = function(event) {
    event.stopPropagation();
    event.preventDefault();
}
