import React from 'react';
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail,
    showRole,
    onEdit,
    children,
}) => {
    return (
      <div className= "border rounded p-4 flex gap-4 items-start">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded object-cover"            
          />
        ) : (
          <div className="w-16 h-16 rounded bg-gray-200 flex items-center justify-center text-gray-600">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className='flex-1'>
           <h2 className='text-lg font-semibold'>{user.name}</h2>

           {showEmail && <p className='text-sm text-gray-700'>{user.email}</p>}
           {showRole && <p className='text-sm text-gray-700'>{user.role}</p>}

           {onEdit && (
            <button
            type='button'
            onClick={() => onEdit(user.id)}
            className='mt-3 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700'
            >
              Edit Profile
            </button>
           )}

      {children && <div style={{ marginTop: 12 }}>{children}</div>}

      {onEdit && (
        <button
        type="button"
        onClick={() => onEdit(user.id)}
        style={{ marginTop: 12, padding: '6px 10px', cursor: 'pointer'}}
        >
          Edit Profile
        </button>
      )}

      {children && <div className='mt-3 text-sm text-gray-500'>{children}</div>}
    </div>
   </div>
  );
};