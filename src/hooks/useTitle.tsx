import { useEffect } from 'react';

export default function useTitle(name: string) {
  useEffect(() => {
    document.title = `${name} | Cristian Fernandez`;
  }, [name]);
}
