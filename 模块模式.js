var Person = (function(){
	var name = '小黑'
	function sayName(){
		console.log(name)
	}
	function changeName(newName){
		name = newName
	}

	return {
		name: name,
		sayName: sayName,
		changeName: changeName
	}
})()

Person.sayName()
Person.changeName('小黄')
Person.sayName()