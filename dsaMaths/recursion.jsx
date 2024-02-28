const naming = (n) => {
    let result = []
    for (let i = 0; i < n; i++) {
      result[i] = "suleman"
    }
    return result
}
// console.log("names",naming(5) );

const recursive = (i,n) => {
    if(i > n) {
        return //basecase
    }else {
        // console.log("suleman");// for printing 5 names 
        console.log(i); // for printing linearly from 1 to n
        recursive(i + 1 ,n)
    }
}
recursive(1,4)

// print from n to 1 

const nonLinearly = (i, n) => {
    if (i < 1) {
        return
    } else {
        console.log(i);
        nonLinearly(i - 1, n)


    }
}
nonLinearly(1, 5)


// print 1 to n without using  i +1 with backtrack

const backtrack = (i, n) => {
    if (i < 1) {
        return
    } else {

        backtrack(i - 1, n)
        console.log(i);

    }
}
backtrack(5, 5) //o/p = 1 2 3 4 5

// print n to 1 without using  i -1 with backtrack
const numberTrack = (i,n) => {
    if (i > n) {
        return    
    }
    else {
        numberTrack(i + 1, n)
            console.log(i);
       
    }
}
numberTrack(1,4)