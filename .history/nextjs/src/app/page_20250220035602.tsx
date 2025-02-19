import { connectToDatabase } from '@/lib/mongoose';

export default async function Home() {
  const connect = connectToDatabase();
  console.log('Connect:', connect);

  return <div>HomePage</div>;
}
