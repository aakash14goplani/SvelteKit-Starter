<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<!-- Fail -->
{#if form?.error_message}
		<p>
			Oops! {form?.error_message}
		</p>
	<!-- Success -->
	{:else if form?.message}
		<p>
			{form?.message}
		</p>
	{:else}
		<form use:enhance method="POST">
			<label>
				Name: <input type="text" required name="name" id="name" />
			</label>
			<label>
				Email: <input type="email" required name="email" id="email" />
			</label>
			<label>
				Message: <textarea required name="message" id="message" />
			</label>
			<button type="submit">Send Email</button>
		</form>
{/if}

<style>
	form {
		padding: 20px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}

	label {
		display: block;
	}
</style>
