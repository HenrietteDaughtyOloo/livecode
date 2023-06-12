// function wordsWithLetter(words){
//     var newList = []
//     for (let i = 0; i < words.length; i++) {
//         var x = words[i].split('');
//         for (let j = 0; j < words.length; j++) {
//             if(x[j] =='a'){
//                 newList=newList.push(words[i])
//             }
//             // else{
//             //     return false
//             // }
            
//         }
        
//     }
//             return newList

// }
// words = ["Mango","juices","banana"]
// console.log(wordsWithLetter(words));

// // function words(word){
// //     for(let i = 0; i<word.length;i++){
// //         if(word.includes('a','A')){
// //             return word
// //         }
// //         else{
// //             return 'not found'
// //         }
// //     }
// // }

// // let word=["akirachix","adalab",'nmy']
// // console.log(words(word))




function isPalindrome(word){
    let b = word.split().reverse().join();
    let b2 = b.t
    if (word ===b) {
        return 'is Palindrome'  
    }  
    else{
         return "Not Palindrome"   
    }
}
let word = "Dad"
console.log(isPalindrome(word));

// function palindrome(word){
//     let wordtwo = word.split('').reverse().join('');
//     if(word===wordtwo){
//         return word
//     }
//     else{

//     }
// }

// console.log(isPalindrome(word));