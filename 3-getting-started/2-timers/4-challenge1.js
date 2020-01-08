const theOneFunc = valRet => {
    console.log('Hello after ' + valRet + ' seconds');
};

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 5);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
