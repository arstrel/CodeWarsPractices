function changeCount( change ){
  let counter = 0;
  change.split(' ').forEach((coin)=>{
  counter += CHANGE[coin]
  })
  return "$"+(Math.round(counter * 100) / 100).toFixed(2)
  }