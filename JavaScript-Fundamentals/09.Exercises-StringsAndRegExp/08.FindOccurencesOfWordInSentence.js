function findOccurencesofWordInSentence(text, word) {
  let regex = new RegExp(`\\b(${word})+\\b`, 'gi')
  if(text.match(regex)){
    return text.match(regex).length;
  }
  return 0;
}
findOccurencesofWordInSentence('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findOccurencesofWordInSentence('How do you plan on achieving that? How? How can you even think of that?', 'how');