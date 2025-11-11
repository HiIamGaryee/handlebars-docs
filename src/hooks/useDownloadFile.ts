import { useCallback } from 'react'

type UseDownloadFileOptions = {
  filename: string
  contentType?: string
}

export function useDownloadFile() {
  const downloadFile = useCallback(
    (content: string, options: UseDownloadFileOptions) => {
      const { filename, contentType = 'text/plain' } = options

      // Create a blob from the content
      const blob = new Blob([content], { type: contentType })
      const url = URL.createObjectURL(blob)

      // Create a temporary anchor element
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)

      // Trigger the download
      link.click()

      // Clean up
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    },
    []
  )

  return { downloadFile }
}

