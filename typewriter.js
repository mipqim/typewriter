const sentence = "hello there from lighthouse labs";

const typewirter = function(sentence){
  
  sentence += '\n';
  
  let timeout = 0;

  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), timeout += 50);
  }
};

typewirter(sentence);