// "this" here is "exports"

this.id = 'exports';

const testerObj = {
  func1: function () {
    console.log('func1', this.name);
  },
 
  name: "Gorge" ,


  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1();
testerObj.func2();
