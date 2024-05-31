let count = 0;

let timer = setInterval(() => {
  count += 2;
  if (count == 10) {
    clearInterval(timer);
  }
  let date = new Date().toLocaleTimeString();
  console.log(`${count} The date and time now ${date}`);
}, 1000);
