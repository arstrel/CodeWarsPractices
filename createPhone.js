function createPhoneNumber(numbers){
  let mask = "(xxx) xxx-xxxx"
 for(let i =0; i< numbers.length; i++) {
  mask = mask.replace('x', numbers[i])
  }
  return mask
}