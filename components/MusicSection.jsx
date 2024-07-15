import React from 'react'
import MusicDetailCard from './Cards/MusicDetailCard'
function MusicSection({ songs }) {
    return (
        <section className="flex flex-wrap gap-x-3 gap-y-6 justify-center">
            {
                songs.map((elem, ind) =>
                    <MusicDetailCard song={elem} key={elem.title + ind}/>
                )
            }
        </section>
    )
}

export default MusicSection