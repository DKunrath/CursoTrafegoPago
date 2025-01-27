import React, { useState, useEffect } from 'react';
import { LogOut, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UserMenuProps {
  user: any;
  onSignOut: () => void;
}

export function UserMenu({ user, onSignOut }: UserMenuProps) {
  const [profile, setProfile] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data } = await supabase
        .from('users_profile')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (data) {
        setProfile(data);
      }
    }

    if (user) {
      loadProfile();
    }
  }, [user]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1C2128] px-4 py-2 rounded-lg hover:bg-[#2D3440] transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          {profile?.name ? (
            <span className="text-white font-semibold">
              {profile.name.charAt(0).toUpperCase()}
            </span>
          ) : (
            <User className="w-5 h-5 text-white" />
          )}
        </div>
        <span className="text-white">{profile?.name || user.email}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1C2128] rounded-lg shadow-lg py-1 border border-gray-700">
          <button
            onClick={onSignOut}
            className="w-full px-4 py-2 text-left text-gray-300 hover:bg-[#2D3440] flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      )}
    </div>
  );
}