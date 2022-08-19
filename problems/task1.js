var twoSum = function(nums, target) {
    let arr = []
    for(let i = 0; i < nums.length-1; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                arr.push(i);
                arr.push(j);
                break;
            }
            else{
                continue;
            }
        }
    }
    
    console.log(arr);
};

let nums = [2,7,11,15];
let target = 9;
twoSum(nums, target);
