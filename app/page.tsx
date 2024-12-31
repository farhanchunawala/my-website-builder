
const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                This Website is Under Construction
            </h1>
            <p style={styles.message}>
                We are working hard to bring you the best experience.
                Stay tuned!
            </p>
            <p style={styles.note}>Thank you for your patience.</p>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
		textAlign: "center",
		padding: "0 18px",
    },
    heading: {
        fontSize: "32px",
        color: "#333",
        marginBottom: "18px",
    },
    message: {
        fontSize: "18px",
        color: "#555",
        marginBottom: "12px",
    },
    note: {
        fontSize: "15px",
        color: "#888",
    },
};

export default Home;
