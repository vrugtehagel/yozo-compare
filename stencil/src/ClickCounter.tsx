import {
	Component,
	Prop,
	Method,
	h,
} from '@stencil/core';

@Component({
	tag: 'click-counter',
	shadow: true,
	styles: `
		button {
			padding: .75rem 1.5rem;
			border: none;
			font-size: 1rem;
			line-height: 1.5;
			border-radius: .75rem;
			color: #181823;
			background-color: #FFB86C;
			cursor: pointer;
		}
	`,
})
export class ClickCounter {
	@Prop({ reflect: true, mutable: true })
	amount: number = 0;

	@Method()
	async reset(){
		this.amount = 0;
	}

	render(){
		return (
			<button onClick={() => this.amount++}>
				clicks: {this.amount}
			</button>
		);
	}
}
