// A function that returns a promise
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}


async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);// This line will execute after the promise is resolved
}

asyncCall();
