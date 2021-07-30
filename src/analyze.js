const analyze = (arr) => ({
  average: arr.reduce((acc, el) => acc + el, 0),
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

export default analyze;
