let str = "sagandeep";
let words = str.split("");
console.log(words);
//array = []
//for (let i of words) {
   // array = i + array;
//}


for (let i = 0; i < Math.floor(words.length / 2); i++) {
    let temp = words[i];
    words[i] = words[words.length - 1 - i];
    words[words.length - 1 - i] = temp;
}
console.log(words);
array = words.join('')
console.log(array)

//  reverse a string using decrement counter
str = 'hi i am sagan'
s = ''

for(i=str.length-1; i>=0;i--)
{
    s= s+ str[i]
}
console.log(s)

// reverse each word leaving same order of words
str = 'hi i am sagan'
words = str.split(' ')
console.log(words)
rev = ''
for(i=0;i<words.length; i++)
{
    for(j=words[i].length-1; j>=0;j--)
    {
        rev =  rev + words[i][j] 
        
    }
    rev = rev + ' '
    console.log(rev)
}


// reverse order of words
revv = ''
for(i=words.length-1 ;i>=0; i--)
{
    revv = revv + words[i] + ' '
}
console.log(revv)





