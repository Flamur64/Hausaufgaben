import Link from "next/link"

export default function Navigation (props) {
    return (
        <div
        style={{
        border: "solid 4px black",
        backgroundColor: props.bgColor
        }}>            
        <Link href="/"><button>Start</button></Link>
        <Link href="/main"><button>Main</button></Link>
        </div>
        )
}