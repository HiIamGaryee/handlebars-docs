import { useState, useMemo } from 'react'

type UseExpandableCodeOptions = {
  maxLines?: number
  expandThreshold?: number
}

export function useExpandableCode(
  code: string,
  options: UseExpandableCodeOptions = {}
) {
  const { maxLines = 5, expandThreshold = 30 } = options
  const [isExpanded, setIsExpanded] = useState(false)

  const lines = useMemo(() => code.split('\n'), [code])
  const shouldTruncate = lines.length > expandThreshold
  const displayLines = isExpanded || !shouldTruncate 
    ? lines 
    : lines.slice(0, maxLines)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return {
    displayCode: displayLines.join('\n'),
    isExpanded,
    shouldTruncate,
    totalLines: lines.length,
    toggleExpand,
  }
}

