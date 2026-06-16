function Welcome({welcomeTitle, welcomeSubtitle}) {
    return (
        <div className="welcome">
            <h1 className="welcome-title">{welcomeTitle}</h1>
            <p className="welcome-subtitle">{welcomeSubtitle}</p>
        </div>
    )
}

export default Welcome;