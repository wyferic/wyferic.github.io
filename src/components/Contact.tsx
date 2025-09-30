export const Contact = () => {
	return (
		<section id="contact" className="scroll-mt-[96px] w-[90vw] md:w-[md] mb-[calc(20px+48px)] max-w-[60ch] bg-white dark:bg-gray-900 dark:text-white">
			<h2>Contact</h2>
			<form action={process.env.CONTACT_FORM_ENDPOINT + "test string"} method="post" className="mx-auto w-full text-center">
				<p>
					Email me at <a id="send" href="mailto:yifeng.wang@utoronto.ca">yifeng.wang@utoronto.ca</a> or fill the form
				</p>
				{/* <div className="md:flex-1 md:flex md:justify-center"> */}
				<input 
					type="text" id="name" name="name" placeholder="Name" 
					className="w-full border bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white h-12 my-1 px-2 rounded-2xl box-border focus:outline-none"/>
				<input
					type="email" id="email" name="email" placeholder="Email"
					className="w-full border bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white h-12 my-1 px-2 rounded-2xl box-border focus:outline-none"
					required
				/>
				{/* </div> */}
				<textarea
					className="w-full border bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white h-[50%] min-h-[48px] resize-y rounded-md mt-1 px-2 py-1 box-border focus:outline-none"
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
