import { supabase } from '../../src/lib/supabase'
import { useUserInfo } from '../../src/lib/userContext'
import ProfileForm from '../../src/components/ProfileForm'

export default function TabTwoScreen() {
  const { profile, loading, saveProfile } = useUserInfo()

  return (
    <ProfileForm
      profile={profile}
      loading={loading!}
      onSave={saveProfile!}
      onLogout={() => supabase.auth.signOut()}
    />
  )
}
