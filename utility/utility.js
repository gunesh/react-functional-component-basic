const getMaxValue = (arr, prop) => {
  var max;
  for (var i = 0; i < arr.length; i++) {
    if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
      max = arr[i];
  }
  console.log(max)
  return max;
};
const fetchApi = () => {
  fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(
      result => {
        console.log(result.data);
      },
      error => {
        console.log('Error in Fetch')
      }
    );
};
