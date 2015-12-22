function f1(){
	"use strict"
	return this;
}
alert(f1() === window);