import { alpha } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'react-admin'

const StatusBar = ({ bgColor, total, label, hasAnswered, resource }) => {
  const [percentage, setPercentage] = useState(0)
  const theme = useTheme()
  const hasNoDocuments =
    resource.total === undefined || resource.total === 0 || resource.total < 100

  useEffect(() => {
    let interval = setInterval(() => {
      if (resource.total === undefined) {
        setPercentage(0)
      } else {
        setPercentage(Math.floor((resource.total / total) * 100).toString())
      }
    }, 500)
    return () => {
      clearInterval(interval)
    }
  }, [resource.total, total])

  const containerStyles = {
    height: 30,
    width: '100%',
    backgroundColor: alpha(theme[0].palette.grey[500], 0.12),
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 16,
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: hasAnswered ? '#023E98' : bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 10,
    paddingTop: 50,
    fontWeight: 500,
    fontSize: '18px',
  }

  console.log('percentage', percentage)
  return !hasNoDocuments ? (
    <div className="">
      <div className="-mb-1 flex justify-end">
        <span className="text-sm text-gray-500">
          {resource.total || 0} out of {total}{' '}
        </span>
      </div>
      <div style={containerStyles}>
        <div className="pt-px text-gray-50" style={fillerStyles}>
          <span style={labelStyles}>{percentage === 0 ? 0 : percentage}%</span>
        </div>
      </div>
      <h3 className={`${theme[0].palette.mode === 'dark' ? "text-gray-200" : "text-gray-600"} text-sm font-medium -mt-4 text-gray-600 brightness-150"`}>
        {label}...
      </h3>
    </div>
  ) : null
}

export default StatusBar
