import Body from "../components/Body/Body";

export default function NotFound(){
    return(
        <Body>
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"            
            }} >
                <h1>404 NOT FOUND</h1>
                <img style={{
                    marginTop: "20px",
                }} src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-3959253-3299952.gif" />
            </div>
        </Body>
    );
}