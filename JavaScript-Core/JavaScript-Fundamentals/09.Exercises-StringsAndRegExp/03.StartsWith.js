function startsWith(string, substring) {
  if(string.substring(0, substring.length) == substring){
    return true;
  }
  return false; 
}
startsWith('How have you been', 'how');