function createPerson(args){
	var person = {
		name: args.name,
		age: args.age,
		sayName: function(){
			return this.name
		}
	}
	return person
}

var person1 = createPerson({name:'小黄',age: 18})
var person2 = createPerson({name:'小黑',age: 20})