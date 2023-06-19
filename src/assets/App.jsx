import './index.css'
import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
export function App () {
    
    return(
        <section className='App'>
            <TwitterFollowCard isFollowing= {true} userName='nosoyanilu' name='Analu Fonseca' initialIsFollowing={true}/>
            <TwitterFollowCard userName='soymemoo' name='Merbis Baez'/>
            <TwitterFollowCard userName='diegobrito441' name='Diego Brito'/>
        </section>
    )    
}