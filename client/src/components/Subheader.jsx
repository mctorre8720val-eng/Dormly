function Subheader({ Header, Subheader }) {
    return (
        <div 
            className="Subheader"
            style={{
                paddingLeft: "12rem",
                paddingRight: "12rem"
            }}
        >
            <h1 
                className="Header"
                style={{
                    fontSize: "2rem"
                }}
            >
                {Header}
            </h1>

            <p 
                className="Subheader"
                style={{
                    color: "rgb(71, 85, 105)"
                }}
            >
                {Subheader}
            </p>

        </div>
    )
}

export default Subheader;