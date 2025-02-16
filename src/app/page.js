import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/kurumsal');
  return null;
}
