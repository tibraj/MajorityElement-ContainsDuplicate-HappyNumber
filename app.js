//Majority Element
function majorityElement(nums) {
    const obj = {};
    nums.forEach(num => obj[num] = ++obj[num] || 1);
    return Object.keys(obj).filter(key => obj[key] > nums.length / 2)[0];
}


//Contains Duplicate
function containsDuplicate(nums) {
    return nums.length !== new Set(nums).size;
}

function returnContainsDuplicate(nums) {
    console.log(new Set(nums));
    return new Set(nums);
}

function returnDuplicates(nums) {
    let cache = {};
    let results = [];
    for(let i = 0; i < nums.length; i++) {
        if(cache[nums[i]] === true) {
            results.push(nums[i]);
        } else {
            cache[nums[i]] = true;
        }
    }
    console.log(results);
    return results;
}

let numbers = [1,2,3,1,2];
returnContainsDuplicate(numbers);
returnDuplicates(numbers);

//Happy Number
function happyNumber(n) {
    let set = new Set();
    while(n !== 1 && !set.has(n)) {
        set.add(n);
        n = String(n).split('').reduce((acc, cur) => acc + cur * cur, 0);
    }
    console.log(n === 1);
    return n === 1;
}

happyNumber(19);
happyNumber(2);