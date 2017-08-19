var Event = (function(){
	var events = {}
	function on(evt,handle){
		events[evt] = events[evt] || []
		events[evt].push({handle: handle})
	}

	function fire(evt, args){
		if (!events[evt]){
			return
		}
		for (var i = 0; i< events[evt].length; i++){
			events[evt][i].handle(args)
		}
	}

	function off(name){
		delete events[name]
	}

	return {
		on: on,
		off: off,
		fire: fire
	}
})()

Event.on('change',function(val){
	console.log('change...  now val is' + val)
})


Event.fire('change', '饥人谷')
//Event.off('change')