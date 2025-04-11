export const Contact = () => {
	return (
		<section id="contact">
			<h2>Contact</h2>
			<form action="#" method="post">
				<p>
					Email me at{" "}
					<a id="send" href="mailto:">
						PLACEHOLDER
					</a>
					or fill the form
				</p>
				<input type="text" id="name" name="name" placeholder="Name" />
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					required
				/>
				<textarea
					id="message"
					name="message"
					rows={4}
					cols={50}
					placeholder="Message"
					required
				></textarea>
				<input type="submit" value="Send" />
			</form>
		</section>
	);
};
