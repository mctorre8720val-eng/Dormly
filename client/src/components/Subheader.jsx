function Subheader({ Header, Subheader }) {

    const isMobile = window.innerWidth <= 430;

    return (
        <div 
            className="Subheader"
            style={{
                paddingLeft: isMobile ? "1rem" : "12rem",
                paddingRight: isMobile ? "1rem" : "12rem",
                textAlign: isMobile ? "center" : "left"
            }}
        >

            <h1 
                className="Header"
                style={{
                    fontSize: isMobile ? "1.6rem" : "2rem"
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