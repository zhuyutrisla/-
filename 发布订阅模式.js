var Event = (function(){
	var events = {}
	function on(evt,handler){
		events[evt] = events[evt] || []
		events[evt].push({
			handler: handler
		})
	}

	function fire(evt,args){
		if (!events[evt]){
			return
		}
		for(var i =0; i< events[evt].length; i++){
			events[evt][i].handler(args)
		}
	}
	function off(name){
		delete events[name]
	}
	return {
		on: on ,
		fire: fire,
		off: off
	}
})()

Event.on('first',function(){
	console.log('first start')
})

Event.on('second',function(){
	console.log('second start')
})
Event.fire('first')
Event.fire('second')