
const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kyiv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Call me</h2>
                        <p><a href="https://t.me/helena_savitskaya">Telegram</a></p>
                        <p><a href="tel:+380504776347">+38(050)477-63-47</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:helena0518savitskaya@gmail.com">helena0518savitskaya@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export { Contacts };