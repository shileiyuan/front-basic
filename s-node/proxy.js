//作用在类的方法上
class Dog {
  @readonly
  bark() {
    return 'wang!wang!'
  }
}

//target是Dog.prototype
//key是'bark'
//descriptor是属性描述符
function readonly(target, key, descriptor) {
  console.log(target)
  console.log(key)
  descriptor.writable = false
  return descriptor
}
let dog = new Dog();
dog.bark = 'bark!bark!'
// cannot assign to read only property 'bark' of object '#<Dog>'