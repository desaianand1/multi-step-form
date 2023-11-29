<div class="flex w-full flex-col gap-4">
	<div class="flex flex-col gap-0.5 md:gap-2">
		<label for="name" class="text-sm font-medium text-marine-blue md:text-base">Name</label>
		<input
			type="text"
			name="name"
			id="name"
			minLength="1"
			required
			class="rounded-md border border-light-gray bg-transparent px-4 py-2 text-sm font-semibold text-marine-blue transition-colors placeholder:text-base placeholder:font-medium placeholder:text-cool-gray hover:border-purplish-blue focus:outline-none focus:ring-1 focus:ring-purplish-blue md:text-base"
			placeholder="e.g. Stephen King"
			autocomplete="name"
			autocapitalize="words"
		/>
	</div>

	<div class="flex flex-col gap-0.5 md:gap-2">
		<label for="email" class="text-sm font-medium text-marine-blue md:text-base"
			>Email Address</label
		>
		<input
			type="email"
			name="email"
			id="email"
			required
			class="rounded-md border border-light-gray bg-transparent px-4 py-2.5 text-sm font-semibold text-marine-blue transition-colors placeholder:text-base placeholder:font-medium placeholder:text-cool-gray hover:border-purplish-blue focus:outline-none focus:ring-1 focus:ring-purplish-blue md:text-base"
			autocomplete="email"
			placeholder="e.g. stephenking@lorem.com"
		/>
	</div>

	<div class="flex flex-col gap-0.5 md:gap-2">
		<label for="phone" class="text-sm font-medium text-marine-blue md:text-base"
			>Phone Number</label
		>
		<input
			type="tel"
			name="phone"
			id="phone"
			autocomplete="tel"
			required
			class="rounded-md border border-light-gray bg-transparent px-4 py-2 text-sm font-semibold text-marine-blue transition-colors placeholder:text-base placeholder:font-medium placeholder:text-cool-gray hover:border-purplish-blue focus:outline-none focus:ring-1 focus:ring-purplish-blue md:text-base"
			placeholder="e.g. +1 234 567 890"
		/>
	</div>
</div>
