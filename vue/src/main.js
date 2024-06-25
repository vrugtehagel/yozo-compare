import { defineCustomElement } from 'vue'
import ClickCounter from './ClickCounter.ce.vue'
import NoOp from './NoOp.ce.vue'
import ToggleSwitch from './ToggleSwitch.ce.vue'

customElements.define(
	'click-counter',
	defineCustomElement(ClickCounter),
);

customElements.define(
	'no-op',
	defineCustomElement(NoOp),
);

customElements.define(
	'toggle-switch',
	class extends defineCustomElement(ToggleSwitch){
		static formAssociated = true;
	},
);
