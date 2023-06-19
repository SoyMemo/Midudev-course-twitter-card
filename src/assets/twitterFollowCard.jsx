import { useState } from "react"; 

export function TwitterFollowCard({ userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ?'tw-button-card is-following' : 'tw-button-card';
    const imageSrc = `https://unavatar.io/${userName}`
    const handleClick = () => {
        setIsFollowing(!isFollowing)    
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                alt= 'El avatar de mi esposa' src= {imageSrc} />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className= {buttonClassName} onClick={ handleClick }>
                    {text}
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stop">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}