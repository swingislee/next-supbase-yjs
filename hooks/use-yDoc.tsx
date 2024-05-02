import { useEffect, useRef } from 'react';
import * as Y from 'yjs';

export const useYDoc = (): Y.Doc => {
  const yDocRef = useRef<Y.Doc | null>(null);

  if (!yDocRef.current) {
    yDocRef.current = new Y.Doc();
  }

  useEffect(() => {
    
    return () => {
      yDocRef.current?.destroy();
    };
  }, []);

  return yDocRef.current;
};