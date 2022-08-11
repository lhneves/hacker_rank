function abbreviation(a='AbcDE', b='ABDE'){
  const hasAbbreviation = function(a, b){
    if(a.length < b.length){
      return false
    }
    if (b.length === 0){
      return a === a.toLowerCase()
    }
    if (a.toUpperCase() === b){
      return true
    }
  
    if (a[0] === a[0].toUpperCase()){
      if (a[0] === b[0]){
        let a_shift = Array.from(a)
        a_shift.shift()
        a_shift = a_shift.join('')
        
        let b_shift = Array.from(b)
        b_shift.shift()
        b_shift = b_shift.join('')
  
        return hasAbbreviation(a_shift, b_shift)
      } else {
        return false
      }
    } else {
      if (a[0].toUpperCase() !== b[0]){
        let a_shift = Array.from(a)
        a_shift.shift()
        a_shift = a_shift.join('')
  
        return hasAbbreviation(a_shift, b)
      } else {
        let a_shift = Array.from(a)
        a_shift.shift()
        a_shift = a_shift.join('')
        
        let b_shift = Array.from(b)
        b_shift.shift()
        b_shift = b_shift.join('')
  
        return hasAbbreviation(a_shift, b) || hasAbbreviation(a_shift, b_shift)
      }
    }
  }

  const elHasAbbreviation = hasAbbreviation(a, b)

  if (elHasAbbreviation){
    console.log('yes')
    return 'YES'
  } else {
    console.log('no')
    return 'NO'
  }
}

function alternate(s='beabeefeab'){
  if(s.length === 1){
    return 0
  }
  const sArray = Array.from(s)
  const uniqueChars = [...new Set(Array.from(s))]
  let longest = 0

  for (let letter_i of uniqueChars){
    for (let letter_j of uniqueChars){
      let temp = sArray.filter(filteredEl=> {
        return filteredEl === letter_i || filteredEl === letter_j
      }).join('');

      if(temp.indexOf(letter_i+letter_i) === -1 && temp.indexOf(letter_j+letter_j) === -1){
        longest = Math.max(longest, temp.length);
      }
    }
  }
  return longest
}