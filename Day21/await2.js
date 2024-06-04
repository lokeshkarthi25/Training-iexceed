// A function that returns a promise
function rejectAfter1Second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('rejected'));
    }, 2000);
  });
}

// An asynchronous function using async/await
async function asyncCall() {
  console.log('calling');
  try {
    const result = await rejectAfter1Second();
    console.log(result); // This line will not execute because the promise is rejected
  } catch (error) {
    console.error(error.message); // Log the error message
  }
}

asyncCall();
