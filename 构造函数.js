function People(name,age){
	this.name = name 
	this.age = age
}

People.prototype.sayName = function(){
	return this.name
}

var p1 = new People('perter', 20)