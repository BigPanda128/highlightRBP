function highlightCode(node, keywords) {
  //create a new variable and give it the text that is inside the current node
  var text = node.textContent;
  node.textContent = ""; // Clear the node

  //create 2 new variables match is looing for a match and pos keeps postion
  var match, pos = 0;
  //loop through all matches of the keyword
  while (match = keywords.exec(text)) {
    //give the variable before the text you want
    var before = text.slice(pos, match.index);
    //create a new node with the text you just gave before
    node.appendChild(document.createTextNode(before));
    //create a new varable and give it a new element with the text strong 
    //so it knows to bold it
    var strong = document.createElement("strong");
    //create a new element that bolds the keyword you want
    strong.appendChild(document.createTextNode(match[0]));
    //add the new bolded element to node
    node.appendChild(strong);
    //give pos the last index point of keywords
    pos = keywords.lastIndex;
  }
  //make a new variable called after and give it the text at the new position
  var after = text.slice(pos);
  //pop in the new bolded text
  node.appendChild(document.createTextNode(after));
}

