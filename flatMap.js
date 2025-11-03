const arr = [1, 2, 3, [4, 6, [7, 8, [25, 30]]]];


const flatArr = arr.flat(Infinity)

// console.log(flatArr);


const tagsFromPost = [
    ['javaScripts', 'react', 'css'],
    ['node', 'express'],
    ['css', 'html', 'react']
]

/* method 1 */

// const flatTags = tagsFromPost.flat()


// const removeDup = new Set(flatTags)
// const removeDupArr = Array.from(removeDup)

// console.log(removeDupArr);

const removeDup = [... new Set(tagsFromPost.flat())]
console.log(removeDup);