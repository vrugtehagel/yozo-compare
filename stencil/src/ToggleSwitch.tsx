import {
	Component,
	Prop,
	Method,
	Watch,
	AttachInternals,
	h,
} from '@stencil/core';

@Component({
	tag: 'toggle-switch',
	shadow: true,
	formAssociated: true,
	styles: `
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
	`,
})
export class ToggleSwitch {
	@AttachInternals() internals: ElementInternals;

	@Prop({ reflect: true, mutable: true })
	on: boolean = false;

	@Prop({ mutable: true })
	value: boolean = false;

	@Prop({ reflect: true })
	name?: string;

	@Watch('value')
	watchValue(value: boolean){
		this.on = value;
	}

	@Watch('on')
	watchFormValue(on: boolean){
		this.value = on;
		const formValue = on ? 'true' : ''
		this.internals.setFormValue(formValue);
	}

	@Method()
	async toggle(force?: boolean){
		this.on = force ?? !this.on;
	}

	render(){
		return (
			<div
				id="track"
				class={{ on: this.on }}
				onClick={() => this.toggle()}
			>
				<div id="thumb"></div>
			</div>
		);
	}
}
