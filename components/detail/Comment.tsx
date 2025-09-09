"use client"
import Avatar from '@/components/general/Avatar'

type Review = { id: string; user: string; comment: string; rating?: number; createdAt?: string; avatarUrl?: string }

const Comment = ({ prd }: { prd: Review }) => {
  return (
    <div className="flex items-start gap-3 border rounded p-3 mb-2">
      <Avatar image={prd.avatarUrl} />
      <div>
        <div className="text-sm text-slate-600">{prd.user} {prd.createdAt ? `• ${prd.createdAt}` : ''}</div>
        <div className="font-medium">{prd.comment}</div>
        {prd.rating ? <div className="text-xs">Puan: {prd.rating}/5</div> : null}
      </div>
    </div>
  )
}
  
  export default Comment;
  