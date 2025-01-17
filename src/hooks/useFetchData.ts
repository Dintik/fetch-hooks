import { useCallback, useEffect, useState } from 'react'

export const useFetchData = <T>(endpoint: string, options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [headers, setHeaders] = useState<Headers | null>(null)

  const getData = useCallback(
    async (signal: AbortSignal) => {
      if (!endpoint) {
        setError('Endpoint is required')
        setIsLoading(false)
        return
      }
      setIsLoading(true)

      setError(null)

      try {
        const response = await fetch(endpoint, { ...options, signal })
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        setHeaders(response.headers)
        const json = await response.json()
        setData(json)
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') return
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }

      setIsLoading(false)
    },
    [endpoint, options]
  )

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    getData(signal)

    return () => controller.abort()
  }, [getData])

  return { data, isLoading, error, headers }
}
