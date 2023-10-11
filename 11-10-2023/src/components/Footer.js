export default function Footer(props) {
    return (
        <footer style={{
        border: "solid 4px black",
        backgroundColor: props.bgColor,
        color: props.tColor
        }}>
        Copyright | Impressum</footer>
        )
}