for (var i = 1; i <= 3; i++)
{
  setTimeout(function(){ console.log(i); }, 0);
};

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

/*function f () {
  let i = 1
  for (i; i <= 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0)
  }

}

console.log(f())*/
