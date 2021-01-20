class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'for', 'at', 'by', 'from', 'and']
    let words = string.split(' ')
    let firstWord = Formatter.capitalize(words[0])
    let capitalized = words.slice(1).map(function(word) { 
      return exceptions.includes(word) ? word : Formatter.capitalize(word)
    })
    
    return firstWord + ' ' + capitalized.join(' ')
  }
}

