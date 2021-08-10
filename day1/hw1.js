//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

//Your code goes here
function findWords(dogString,dogNames)
{
    let dogName = dogString.split(",")[1].toLowerCase().split(" ").splice(-1);
    for(let i=0; i <= dogNames.length; i++)
    {
        if(dogNames[i].toLowerCase() == dogName)
        {
            return "Matched dog_name";
        }
        continue;
    }
    return "No matches";
} 

//Call method here with parameters
console.log(findWords(dog_string,dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr)
{
    for (let i=0; i < arr.length; i++)
    {
        if (i % 2 == 0)
        {
        arr.splice(i, 1, 'enven index')
        }
    }
    return arr;
}

console.log(replaceEvens(arr1))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//================== CODEWARS #1 ==========//
/*Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9" */

const findSquares = num => {
    return `${((num+1)/2)**2}-${((num-1)/2)**2}`;
};

console.log(findSquares(9))

////================== CODEWARS #2 ==========//
/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input: output)

DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" */

const keys = ['A','T','G','C']
const values = ['T','A','C','G']
function dnaStrand(dna)
{
    dna = dna.split('')
    const newDNA = []
    for(let char of dna)
    {
        newDNA.push(values[keys.indexOf(char)])  
    }
    return newDNA.join('')
}

console.log(dnaStrand("GTAT"))



const pairs = {'A':'T','T':'A','G':'C','C':'G'};
function decodeDNA(dna)
{
    return dna.split('').map(function(a){return pairs[a]}).join('');
}

console.log(decodeDNA("ATTGC"))

