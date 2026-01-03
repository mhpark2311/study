import MovieListCard from './MovieListCard';

export default function App() {
  const items = [
    {
      title: 'Inception',
      genre: 'SF, 스릴러',
      poster: '/image1.jpg',
    },
    {
      title: 'Your Name',
      genre: '로맨스, 판타지',
      poster: '/image2.jpg',
    },
    {
      title: 'Spirited Away',
      genre: '판타지, 애니메이션',
      poster: '/image3.jpg',
    },
  ];

  return (
    <main>
      <MovieListCard items={items} />
    </main>
  );
}
