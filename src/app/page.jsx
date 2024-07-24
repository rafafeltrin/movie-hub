import MovieCarousel from "./components/MovieCarousel";
import { getMoviesTrending, getSeriesTrending } from "./api/Require";
import { Suspense } from 'react'

export default async function Home() {
  const moviesTrending = await getMoviesTrending();
  const seriesTrending = await getSeriesTrending();

  return (
    <>
      <div className="flex items-start pt-14 justify-center bg-gray-50 dark:bg-neutral-950 h-screen">
        <div className="flex justify-center dark: w-11/12 md:w-4/5 mt-5 md:h-min">
          <div className="text-left text-black dark:text-white mr-16 lg:w-2/5">
            <h1 className="text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-black dark:bg-white">
                ENCONTRE FILMES
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700">
                SÉRIES DE TV E MAIS
              </span>
            </h1>
            <p className="mt-4 text-zinc-900 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              vel ipsa inventore a facilis similique deleniti nesciunt porro hic
              nam, non aliquam, distinctio natus nostrum excepturi, nisi ea
              mollitia ratione.
            </p>
          </div>
          <div className="relative w-3/5 hidden md:flex items-end h-min justify-end pr-12">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/bra_1_2991d5a3.jpeg"
              className="relative w-60 h-auto rounded-lg hidden lg:block"
              alt="Movie 1"
            />
            <img
              src="https://img.elo7.com.br/product/zoom/4AF71A2/big-poster-homem-aranha-atraves-do-aranhaverso-90x60-cm-003-presente-nerd.jpg"
              className="absolute top-8 z-10 left-36 w-60 h-auto rounded-lg"
              alt="Movie 2"
            />
          </div>
        </div>
      </div>
      <div className="m-5 p-5 mt-0 bg-gradient-to-br from-[#5036ac36] via-[#5537c0] to-[#311992] dark:from-[#130d29] dark:via-[#0a012b] dark:to-[#06011b] rounded-2xl">
        <h1 className=" text-3xl font-bold">Tranding</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieCarousel movies={moviesTrending.results} />
        </Suspense>
      </div>
      {/*
      <div className="m-5 p-5 mt-0 bg-gradient-to-br from-[#5036ac36] via-[#5537c0] to-[#311992] dark:from-[#290d24] dark:via-[#2b0128] dark:to-[#1b0117] rounded-2xl">
        <h1 className=" text-3xl font-bold">Tranding</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieCarousel movies={seriesTrending.results} />
        </Suspense>
      </div>
      */}
      <div className="mb-6 mt-12 md:p-14 p-4">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">A <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Verdadeira</span> Avaliação é a sua</h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Um filme só é realmente bom quando você, como espectador, sente-se conectado com ele. As avaliações e críticas existem para guiar e informar, mas a verdadeira avaliação é a sua própria experiência. Cada pessoa é única e, portanto, sua percepção e apreciação de um filme também serão únicas. Não deixe que números e opiniões alheias determinem suas escolhas; assista, sinta e tire suas próprias conclusões.
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold mt-12">
          Motivos para Assistir a um Filme Hoje
        </h1>
        <div className="md:flex mt-6 p-6 md:px-14">
          <div class="md:w-1/3 mb-5 hover:bg-indigo-950 md:mb-0 md:mx-8 block max-w-sm p-6 bg-gradient-to-br from-[#bd3c727a] via-[#cc18817c] to-[#92198c91] dark:from-[#290d24] dark:via-[#2b0128] dark:to-[#1b0117] rounded-lg shadow">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Relaxamento</h5>
            <p class="font-normal text-gray-900 dark:text-gray-400">
              Assistir a um filme é uma ótima maneira de escapar da rotina diária e relaxar. Seja uma comédia leve, um drama envolvente ou um thriller emocionante, um filme pode proporcionar uma pausa necessária e rejuvenescer sua mente.
            </p>
          </div>
          <div class="md:w-1/3 mb-5 hover:bg-indigo-950 md:mb-0 md:mx-8 block max-w-sm p-6 bg-gradient-to-br from-[#bd3c727a] via-[#cc18817c] to-[#92198c91] dark:from-[#290d24] dark:via-[#2b0128] dark:to-[#1b0117] rounded-lg shadow">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Conexão Emocional</h5>
            <p class="font-normal text-gray-900 dark:text-gray-400">
              Filmes têm o poder de tocar nossos corações e mentes, criando conexões emocionais profundas. Eles podem nos fazer rir, chorar, refletir e até mudar nossa perspectiva sobre o mundo ao nosso redor.
            </p>
          </div>
          <div class="md:w-1/3 mb-5 hover:bg-indigo-950  md:mb-0 md:mx-8 block max-w-sm p-6 bg-gradient-to-br from-[#bd3c727a] via-[#cc18817c] to-[#92198c91] dark:from-[#290d24] dark:via-[#2b0128] dark:to-[#1b0117] rounded-lg shadow">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Relações</h5>
            <p class="font-normal text-gray-900 dark:text-gray-400">
              Assistir a um filme, seja em casa com a família e amigos ou no cinema com desconhecidos, cria uma experiência compartilhada. Discutir as cenas favoritas, os personagens e os enredos depois do filme fortalece laços e promove conversas significativas.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5">
        
      </div>
    </>
  );
}
