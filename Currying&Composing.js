const _ = {
    curry : (...args) => {

    },

    compose : (func1, func2)=>{
       return (...args) =>{
            return func1(func2(...args));
        }
    }
}

const consider = (name) => {
    return `I think it could be... ${name}`;
};

const exclaim  = (statement) => {
    return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim);
console.log(blame("Hi"));