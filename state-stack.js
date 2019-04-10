class StateStack {
	constructor(options){
		if(!options){
			options = {};
		}
		this.maxLength = options.maxLength || 10;

		this.history = [];
		this.p = -1;
	}

	get length(){
		return this.history.length;
	}

	get state(){
		return this.history[this.p];
	}

	pushState(state){
		this.history = this.history.splice(0, this.p + 1);
		this.history.push(state);
		this.p++;
		return this.state;
	}

	back(){
		if(this.p > -1) {
			this.p--;
		}
		return this.state;
	}

	forward(){
		if(this.p < this.length - 1){
			this.p++;
		}
		return this.state;
	}

	go(num){
		let step = Number(num);
		if(isNaN(step)){
			return this.state;
		}

		let tempPosition = this.p + step;
		if(tempPosition > this.length){
			this.p = this.length - 1;
		}else if(tempPosition < 0){
			this.p = -1;
		}else {
			this.p = tempPosition;
		}

		return this.state;

	}
}
