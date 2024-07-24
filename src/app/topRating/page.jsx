import React from 'react'
import TopRating from '../components/TopRating'
import { getTopRating } from '../api/Require'

const TopRatingPage = () => {
    return (
        <TopRating selection="topRating" title="Melhores Avaliações" p='Os filmes que recebem as melhores avaliações não são apenas populares; eles são obras que resistiram ao teste do tempo, influenciaram gerações e moldaram a indústria cinematográfica. Esses clássicos, sejam eles dramas intensos, comédias atemporais ou épicos visuais, representam o ápice da arte cinematográfica. Eles definem padrões, inspiram novos talentos e continuam a encantar e emocionar espectadores em todo o mundo. Assistir a esses filmes é essencial para qualquer amante do cinema, pois eles são a base sobre a qual a arte cinematográfica se desenvolveu e continua a evoluir.' />
    )
}

export default TopRatingPage