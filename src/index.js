const hyphenopoly = require("hyphenopoly");
const cheerio = require("cheerio")

exports.constructor = async function (params) {

  const hyphenator = hyphenopoly.config({
    "require": ["de", "en-us"],
    "exceptions": {
        "en-us": "en-han-ces"
    }
  });
  const hyphenateText = await hyphenator.get("en-us");
  var tags = params.tags.split(', ');
  function replacer($, text) {
    if (tags.some(e => e === text[0].name)) {
      $(text).html(hyphenateText($(text).html()))
      return $(text)
    } else if ($(text).children().length) {
      $(text).children().each(function(itm) {
        return replacer($, $(this));
      });
    } else {
      return $(text)
    }
  }
  function hyphenateHtml(html) {
    var $ = cheerio.load(html);
    var replacedHtml = $("html").each(function(itm) {
      return replacer($, $(this));
    });
    return $.html(replacedHtml)
  }
  
  return {
    htmlModifiers: [hyphenateHtml]
  }
}