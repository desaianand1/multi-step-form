import type { SvelteComponent } from "svelte"

export interface FormModule {
    title: string
    description: string
    renderableComponent: typeof SvelteComponent
}

const PersonalInfoModule : FormModule = {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number",
    renderableComponent: null
}