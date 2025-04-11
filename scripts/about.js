document.body.innerHTML += `
    <section id="about">
        <h2>About</h2>
        <p>${(date => Math.floor((new Date() - new Date(date)) / (31536000000)))('2001-05-01T00:00:00Z')}M, 
            <del>chatgpt prompt spammer</del> "programmer", single, and ready to mingle</p>
    </section>
`