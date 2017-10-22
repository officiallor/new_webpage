

function init() {
  document.getElementById('btn').addEventListener('click', () => {
    test();
  });
}

function test() {
  console.log('I was clicked');
}

var  funcs = [init]
var a = 'this is a line';


export default {
  funcs,
  a
}
