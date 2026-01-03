import TeamListCard from './TeamListCard';

export default function App() {
  const items = [
    { name: 'Watanabe', role: 'Engineer', avatar: './image1.jpg' },
    { name: 'Tanaka', role: 'Project Manager', avatar: './image2.jpg' },
    { name: 'Satou', role: 'Project Leader', avatar: './image3.jpg' },
  ];
  return <TeamListCard items={items} />;
}
