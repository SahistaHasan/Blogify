import React from 'react'
import { assets } from '../../assets/assets'

const ComentTableItem = ({comment}) => {
  return (
    
    <tr className='border-y border-gray-300'>
        <td className='px-6 py-4'>
            <b className='font-medium text-gray-600'>Blog</b> : {comment.blog.title}
            <br/>
            <b className='font-medium text-gray-600'>Name</b> : {comment.name}
            <br/>
            <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
          {new Date(comment.blog.createdAt).toDateString()}
        </td>
        <td className='px-6 py-4'>
          <div className='inline-flex items-center gap-4'>
            {!comment.isApproved ?
            <img src={assets.tick_icon} className='w-5
            hover:scale-110 transition-all cursor-pointer'/>  :  <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>
              Approved
              </p>}
              <img src={assets.bin_icon} alt='' className='w-5 hover:scale-110 transition-all cursor-pointer'/>

          </div>
        </td>
    </tr>
  )
}

export default ComentTableItem
