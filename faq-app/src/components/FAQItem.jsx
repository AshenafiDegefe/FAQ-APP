import React from 'react'

const FAQItem = ({item}) => {
  return (
    <div className='border-b border-gray-200 dark:border-gray-700 
    last:border-none transition-colors duration-300 hover:bg-gradient-to-r *:from-indigo-50
    hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 hover:
    dark:hover:to-transparent'>
      <button className='w-full py-5 px-4 flex justify-between
      items-center text-left focus:outline-none rounded-lg transition-all
      duration-200 cursor-pointer text-gray-900 dark:text-white hover:text-transparent
      hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
      dark:hover:from-indigo-400 dark:hover:to-purple-400'>
        <span className='text-lg font-medium pr-6'>{item.question}</span>
        <div className='flex-shrink-0 flex items-center justify-center
        w-8 min-8 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 transiotion-all duration-200'>
          <i className='bx bx-plus text-gray-500 dark:text-gray-400'></i>
        </div>
      </button>
    </div>
  )
}

export default FAQItem
