import Path from '@/app/components/Path';
import PetstoreService from '@/app/data/services/PetstoreService';
import { redirect } from 'next/navigation';
import React from 'react';

const getPathData = async (path?: string) => {
  if (!path) return;
  try {
    const config = await PetstoreService.getPathConfig(path);
    return config;
  } catch (e) {
    return null;
  }
}

export default async function Details({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams['path'] || Array.isArray(searchParams['path'])) {
    redirect('/');
  }
  const path = await getPathData(searchParams['path']);
  if (!path) {
    redirect('/');
  }
  return <main className="flex min-h-screen flex-col items-center p-16 gap-6">
    <Path path={searchParams['path']} data={path} expandable={false} /> 
  </main>
}