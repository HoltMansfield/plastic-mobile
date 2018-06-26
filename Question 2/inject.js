$(document).ready(() => {
  craigslistSearch($('query').val())
})

function craigslistSearch(searchQuery) {
 // this already does not quite make sense as the query has happened
 var results = $('.result-row')
 var json = convertToJson(results)

 console.log(json.length)
 console.log(json)
}

function convertToJson(results) {
  var json = []
  for(i = 0; i < results.length; i ++) {
    json.push({
      image: getImageSrc(results, i),
      title: getTitle(results, i),
      date: getDate(results, i),
      location: getLocation(results, i)
    })
  }
  
  return json
}

function getImageSrc(results, index) {
  var tag = $(results).find('.thumb')[index]
  return $(tag).attr('src')
}

function getTitle(results, index) {
  var tag = $(results).find('.result-title')[i]
  return $(tag).text()
}

function getDate(results, index) {
  var tag = $(results).find('.result-date')[i]
  return $(tag).attr('datetime')
}

function getLocation(results, index) {
  var tag = $(results).find('.result-hood')[i]
  return $(tag).text()
}






