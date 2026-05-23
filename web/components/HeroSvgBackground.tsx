"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/** Hero SVG iframe: client-only to keep SSR and hydration DOM aligned. */
export function HeroSvgBackground() {
  const isClient = useIsClient();

  return (
    <div className="plexai-hero-svg-frame" aria-hidden={true}>
      {isClient ? (
        <iframe
          src="/plexai-flow-hero.svg"
          title="PLEXAI animated background"
          tabIndex={-1}
          className="plexai-hero-svg-iframe"
        />
      ) : null}
    </div>
  );
}
