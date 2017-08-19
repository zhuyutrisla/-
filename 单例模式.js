var People = (function(){
	var instance
	function init(name){
		return{
			name: name
		}
	}
	return{
		createPeople: function(name){
			if (!instance){
				instance = init(name)
			}
			return instance
		}
	}

})()

var person1 = People.createPeople('小黑')
var person2 = People.createPeople('小黄')
