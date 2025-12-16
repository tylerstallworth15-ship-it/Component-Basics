improt React from 'react';
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail,
    showRole,
    onEdit,
    children,
}) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 400}}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center'}}>
          {user.avatarUrl && (
            <img
              src={user.avatarUrl}
              alt={user.name}
              style={ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover'}
            />
          )}

        </div>
           <h2 style={{ margin: 0 }}>{user.name</h2>

           {showEmail && <p style={{ margin: '4px 0 0' }}>{user.email}</p>}
           {showRole && <p style={{ margin: '4px 0 0' }}>{user.role}</p>}
        </div>
      </div>

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
    </div>
    );