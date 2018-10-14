function Sort(Data,property) {
  function compare(property){
    return function(a,b){
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    }
  }
  Data.sort(compare(property))
}
export default Sort
