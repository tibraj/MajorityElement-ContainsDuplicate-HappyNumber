//Majority Element



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