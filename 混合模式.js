function Person(name,age){
	this.name = name 
	this.age = age
}

Person.prototype.sayName = function(){
	return this.name
}

function Male(name,age,sex){
	Person.call(this,name,age)
	this.sex = sex
}

Male.prototype = create(Person.prototype)

function create(parent){
	function F(){}
	F.prototype = parent
	return new F()
}

Male.prototype.run = function(){
	console.log('I am running')
}