function twoSum(nums, target) {
    const map = new Map();
    for(i=0; i<= nums.length; i ++){
        const complete = target - nums[i];
        if(map.has(complete)){
            return [map.get(complete),i];
        }
        else map.set(nums[i], i);
    }
}



console.log(twoSum([2, 7, 11, 15], 13)); // [0, 1]