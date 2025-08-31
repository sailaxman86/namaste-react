class ReverseString {
    constructor(str)
    {
        this.str = str;
    }
    
    reverse()
    {
        //Solution 1 - Backward iteration and push to new array

        //step1 - Always check for the input
        if(!this.str || this.str.length<2 || typeof this.str !=='string')
        {
            return "Not a valid string to reverse";   
        }

        const backwardArray = [];
        const totalCharsInString = this.str.length - 1;

        for (let i = totalCharsInString; i>=0; i--)
        {
            backwardArray.push(this.str[i]);
        }

        return backwardArray.join('');
    }
}

const inputString = "Hello World";
const reverseStringObject = new ReverseString(inputString).reverse();
console.log(reverseStringObject);