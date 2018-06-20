var TemplateEngine = function (tpl, data) {
  var re = /<%([^%>]+)?%>/g, match;
  while (match = re.exec(tpl)){
    tpl = tpl.replace(match[0], data[match[1]])
  }
  
  return tpl;
}

var template = "<p>Hello, my name is <%name%>. I\'m <%age%> years old.</p>"
console.log(TemplateEngine(template, {
  name: "Eva",
  age: 31
}))



