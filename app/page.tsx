import PetstoreService from '@/app/data/services/PetstoreService';
import Link from 'next/link';
import React from 'react';
import Path from './components/Path';

async function getConfigData() {
  try {
    const config = await PetstoreService.getConfig();
    return config;
  } catch (e) {
    return null;
  }
}

export default async function Home() {
  // It's possible to fetch it this way because of implementation of server component introduced in Next beta.
  const config = await getConfigData();
  return (
    <main className="flex min-h-screen flex-col items-center p-16 gap-6">
      <section>
        <h1 className="text-md">{config?.info.description}</h1>
      </section>
      <section className="flex flex-col w-full gap-4">
        {Object.entries(config?.paths || {}).map(([path, data]) =>
          <Link href={`/details?path=${path}`}>
            <div className="p-6 drop-shadow-sm bg-white rounded hover:drop-shadow-lg cursor-pointer w-full">
              <Path key={path} path={path} data={data} expandable />
            </div>
          </Link>
        )}
      </section>
    </main>
  )
}
