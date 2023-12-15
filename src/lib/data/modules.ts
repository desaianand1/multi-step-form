import PersonalInfo from '$lib/components/modules/personal-info.svelte';
import SelectPlan from '$lib/components/modules/select-plan.svelte';
import type { ComponentType } from 'svelte';

export interface FormModule {
	title: string;
	description: string;
	renderableComponent: ComponentType;
}

const PersonalInfoModule: FormModule = {
	title: 'Personal Info',
	description: 'Please provide your name, email address, and phone number',
	renderableComponent: PersonalInfo
};

const SelectPlanModule: FormModule = {
	title: 'Select your plan',
	description: 'You have the option of monthly or yearly billing.',
	renderableComponent: SelectPlan
};

const AddOnsModule: FormModule = {
	title: 'Pick add-ons',
	description: 'Add-ons help enhance your gaming experience',
	renderableComponent: SelectPlan
};

const SummaryModule: FormModule = {
	title: 'Finishing up',
	description: 'Double-check everything looks OK before confirming.',
	renderableComponent: SelectPlan
};

export { PersonalInfoModule, SelectPlanModule, AddOnsModule, SummaryModule };
