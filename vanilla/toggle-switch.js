class ToggleSwitch extends HTMLElement {
	static get observedAttributes(){
		return ['on'];
	}
	static get formAssociated(){
		return true;
	}

	get on(){
		return this.hasAttribute('on');
	}
	set on(value){
		this.toggleAttribute('on', Boolean(value));
	}

	get value(){
		return this.on;
	}
	set value(value){
		this.on = value;
	}

	get name(){
		return this.getAttribute('name');
	}
	set name(value){
		if(value == null){
			this.removeAttribute('name');
		} else {
			this.setAttribute('name', value);
		}
	}

	#controller;
	#internals;
	#track;

	constructor(){
		super();
		const shadow = this.attachShadow({
			mode: 'closed'
		});
		shadow.innerHTML = `
			<div id="track">
				<div id="thumb"></div>
			</div>
			<style>
				:host {
					display: inline-block;
					line-height: 0;
					cursor: pointer;
				}
				#track {
					width: 2.5rem;
					height: 1rem;
					padding: .25rem;
					background-color: #38314b;
					border-radius: 1rem;
					transition: background-color .2s;
					&.on {
						background-color: #7080B0;
						#thumb { translate: 1.5rem 0; }
					}
				}
				#thumb {
					width: 1rem;
					height: 1rem;
					border-radius: 50%;
					background-color: #F8F8F2;
					transition: translate .2s;
				}
			</style>
		`;
		this.#internals = this.attachInternals();
		this.#track = shadow
			.querySelector('#track');
	}

	toggle(force){
		this.on = force ?? !this.on;
	}

	connectedCallback(){
		const track = this.#track;
		this.#controller?.abort();
		this.#controller = new AbortController();
		const {signal} = this.#controller;
		track.addEventListener('click', () => {
			this.toggle();
		}, {signal});
	}

	disconnectedCallback(){
		this.#controller?.abort();
	}

	attributeChangedCallback(attribute){
		if(attribute == 'on'){
			this.#updateOn();
		}
	}

	#updateOn(){
		this.#track.classList.toggle('on', this.on);
		const formValue = this.on ? 'true' : '';
		this.#internals.setFormValue(formValue);
	}
};

customElements.define(
	'toggle-switch',
	ToggleSwitch
);
