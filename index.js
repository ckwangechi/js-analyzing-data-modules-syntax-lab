function combineUsers(...args) {

  const combinedObject = {users: []};
  for (const arg of args) {
    if (Array.isArray(arg)) {
      combinedObject.push(...arg);
    }
  }

  CombinedObject.merge_date = Date.today().toString("M/d/yyyy");
  return {combinedObject};
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};