export function objectHasValue(obj, term) {
  for (const prop in obj) {
    // loop through every property in the object
    if (Object.prototype.hasOwnProperty.call(obj, prop) && !!obj[prop]) {
      const thisProp = obj[prop]
      
      if (isObject(thisProp)) {
        // we have an object. recursive filter on its properties.
        if (objectHasValue(thisProp, term)) {
          return true
        }
      } else if (Array.isArray(thisProp)) {
        if (arrayContainsValue(thisProp, term)) {
          return true
        }
      } else if (thisProp.toString().toLowerCase().includes(term.toLowerCase())) {
        return true
      }
    }
  }
  return false
}

export function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function arrayContainsValue(arr, val) {
  return arr.some((el) => {
    if (isObject(el)) {
      if (objectHasValue(el, val)) {
        return true
      }
    } else if (el.toString().toLowerCase().includes(val.toLowerCase())) {
      return true
    }
    
    return false
  })
}

export function sortByKey(array, key) {
  return array.sort(function (a, b) {
    const x = a[key].toLowerCase()
    const y = b[key].toLowerCase()
    return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}