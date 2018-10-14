function sort(resData,VueData) {
  var senf = resData
  // console.log("+++++++++++1")
  // console.log(resData);
  // console.log("+++++++++++11111")
  var weighs=[]
  var nublist=[]
  for(var a in senf){
    // console.log("+++++++++++")
    nublist.push(a)
    // console.log( this.nublist)
    weighs.push(senf[a].weigh)
  }

  function solo(a,b) {
    return a-b
  }
  weighs =  weighs.sort(solo).reverse();
  // console.log(2);
  // console.log(weighs)
  // console.log(2);

  VueData =[]
  for(var i=0;i<weighs.length;i++){
    for(var j=0;j<nublist.length;j++){
      if( senf[nublist[j]].weigh==weighs[i]){
        VueData.push(senf[nublist[j]])
      }
    }
  }
  // console.log("+++++++++++1")
  // console.log(VueData);
  // console.log("+++++++++++11111")
  return VueData
}
export default sort
