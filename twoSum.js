
const nums = [3,2,3];
const target = 6;



let twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
    throw new Error('No two sum solution'); 
}

console.log(twoSum(nums, target));