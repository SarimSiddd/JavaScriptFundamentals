// noinspection ES6ConvertVarToLetConst

const _ = {
    reduce : (array, callback, initialValue)=>{

        var sum = initialValue;
        if (Array.isArray(array))
        {
            for (let v of array)
            {
                if (sum === undefined){
                    sum = v;
                    continue;
                }
                sum = callback(sum,v);
            }
            return sum;
        }
    }
}

console.log(_.reduce([1,2], (sum,n)=> sum+n));
