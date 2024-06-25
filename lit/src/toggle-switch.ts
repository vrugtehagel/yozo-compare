import { html, css, LitElement } from 'lit';
import {
	customElement,
	property,
} from 'lit/decorators.js';
import {
	classMap,
} from 'lit/directives/class-map.js';

@customElement('toggle-switch')
export class ClickCounter extends LitElement {
	static formAssociated = true;
	#internals = this.attachInternals();

	static styles = css`
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
	`;

	@property({ reflect: true, type: Boolean })
	accessor on: boolean = false;

	@property({ attribute: false })
	accessor value: boolean = false;

	@property({ reflect: true, type: String })
	accessor name?: string;

	toggle(force){
		this.on = force ?? !this.on;
	}

	updated(changed: Map<string, any>){
		if(changed.has('on')){
			this.#updateOn();
		} else if(changed.has('value')){
			this.#updateValue();
		}
	}

	#updateOn(){
		this.value = this.on;
		const formValue = this.on ? 'true' : '';
		this.#internals.setFormValue(formValue);
	}

	#updateValue(){
		this.on = this.value;
	}

	render() {
		return html`
			<div
				id="track"
				class=${classMap({ on: this.on })}
				@click=${() => this.toggle()}
			>
				<div id="thumb"></div>
			</div>
		`;
	}
}
