import React from 'react'
import samo from './samo.jpeg';
import Footer from './Footer';

function Home() {
    return (
        <div className="App-header">
            <h1 className="pb-5">Linking trees</h1>
            <img id="profile__img" src={samo} className="App-logo mb-2 img-fluid border rounded-circle img-thumbnail" alt="logo" />
            <p id="twitter">
                Twitter: Samuel26541199
            </p>
            <p id="slack" hidden>
                Slack: Ayibanimi Ikoli
            </p>

            <a
                className="links"
                id='btn__zuri'
                href="https://training.zuri.team/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Zuri
            </a>
            <a
                className="links"
                href="http://books.zuri.team/"
                id="books"
                target="_blank"
                rel="noopener noreferrer"
            >
                Books for design and coding
            </a>
            <a
                className="links"
                id='book__python'
                href="https://books.zuri.team/python-for-beginners?ref_id=Ayibanimi+Ikoli"
                target="_blank"
                rel="noopener noreferrer"
            >
                Great reads for sale
            </a>
            <a
                className="links"
                id='"pitch'
                href="https://background.zuri.team/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Background check your devs
            </a>
            <a
                className="links"
                id="book__design"
                href="https://books.zuri.team/design-rules"
                target="_blank"
                rel="noopener noreferrer"
            >
                Free design book you definetely want to get
            </a>
            <a
                className="links"
                id="contact"
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contact Me
            </a>
            <div className="social">
                <span>
                    <img src="./slack.jpeg" alt="" className="social-img" />
                    <img src="./github.png" alt="" className="social-img" />
                </span>
            </div>
            <Footer />
        </div>
    )
}

export default Home