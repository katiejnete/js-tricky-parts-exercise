function curriedAdd(sum) {
    if (sum === undefined) return sum || 0;
  function add(num) {
    if (num === undefined) return sum;
    return curriedAdd(sum + num);
  }

  return add;
}

module.exports = { curriedAdd };
