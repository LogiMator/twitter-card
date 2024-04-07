import { TwitterCard } from "./TwitterCard";

export function App () {
    return (
        <div className="App">
            <TwitterCard isF userName={"kikobeats"}>
                kikobeats
            </TwitterCard>
            <TwitterCard userName={"midudev"}>
                midudev
            </TwitterCard>
            <TwitterCard initialIsFollowing>
                pheral
            </TwitterCard>
        </div>
    )
}