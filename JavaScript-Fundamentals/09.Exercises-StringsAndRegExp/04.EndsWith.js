function endsWith(string, substring) {
  if(string.substr(-substring.length) == substring){
    return true;
  }
  return false; 
}
endsWith('How have you been', 'been');