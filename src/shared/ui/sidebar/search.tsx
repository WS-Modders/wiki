"use client"

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchProps {
    initialQuery: string;
}

export function Search({ initialQuery }: SearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSearch = typeof searchParams.get('search') === 'string' ? searchParams.get('search') : '';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('search') as string;
        router.push(`?search=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                id="search"
                name="search"
                type="search"
                placeholder="Введите для поиска"
                defaultValue={initialQuery}
            />
            <button type="submit">Поиск</button>
        </form>
    );
}