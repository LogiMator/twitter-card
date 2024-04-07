import { useState } from "react"

import "./app.css"
export function TwitterCard ({children ,userName = "unknown", initialIsFollowing}) {

    const [isFollowing, setisFollowing] = useState(initialIsFollowing)
    
    const buttonClassName = isFollowing ? "tw-followCard-bt tw-unfollow" : "tw-followCard-bt "
    const text =  isFollowing ? "following" : "follow"   

    const toggleFollow = () => {
        setisFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-hd">
        <img className="tw-followCard-img" src={`https://unavatar.io/${userName}`} alt="kikobeats" />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-user">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} 
            onClick={toggleFollow}>
                {text}
            </button>
        </aside>
    </article>
    )
}