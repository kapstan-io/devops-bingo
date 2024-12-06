'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export function PHProvider({ children }) {
  useEffect(() => {
    posthog.init('phc_9Y4QrHZDbOAJOOKXiN4urmmu6gX6yXNHAno4sqK2Qvh', {
      api_host: 'https://us.i.posthog.com',
      capture_pageview: true,
    })
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}