import './App.css';

const App = () => {

  // 1. Create a function that creates a new array with a given value
  //    a. The function should take two parameters: the size of the array and the item to pass in
  //    b. const someArrayFunc = (arraySize, valueToPass) => {'Code for function'}
  //    c. expected result someArrayFunction(3, 'apples') = ['apples', 'apples', 'apples']

  const createArray = (arraySize, valueInput) => {
    
    const newArray = [];

    for (let i = 0; i < arraySize; i++) {
      newArray.push(valueInput);
    }

    console.log(newArray);

  }

  let array1 = createArray(3, 'apples');

  // 2. Reverse: Write a function that reverses the order of the items in the array
  //    a. [1,2,3] = [3,2,1]

  const reverseArray = (arrayInput) => {

    const newArray = arrayInput.reverse();

    console.log(newArray);

  }

  let array2 = reverseArray([1, 2, 3]);

  // 3. Create a function that removes all unnecessary elements from an array
  //    a. use this array: let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
  //    b. remove the falsy values so that the function returns: [1, 'apple', 'bananas', 45, 'alkali'];

  const removeFalsyArrayItems = (arrayInput) => {

    const newArray = arrayInput.filter(item => Boolean(item) === true);

    console.log(newArray);

  }

  let array3 = removeFalsyArrayItems([1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined]);

  // 4. Create a function that returns a duplicate free array
  //    a. let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
  //    b. the function should return [1, 4, 9, 100, 30]

  const removeDuplicateArrayItems = (arrayInput) => {

    const newArray = arrayInput;

    console.log(newArray);

  }

  let array4 = removeDuplicateArrayItems([1, 4, 9, 4, 100, 4, 30, 1]);

  return (
    <div>
      
    </div>
  );

}

export default App;
