import React from 'react'
import { SignInOptionsForSelfHosted } from '../../utils/signInOptions'
import { useNavigate } from 'react-router-dom'

const LoginOptionSelfHosted = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/repositoryscreen")
  }
  return (
    <div className="space-y-4 mt-7 px-5">{SignInOptionsForSelfHosted.map((platform) => (
        <button
          key={platform.name}
          className="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100 text-[18px] font-normal"
          onClick={handleNavigation}
        >
          <img
            src={platform.logo}
            className="w-6 h-6 rounded-full mr-4"
            alt={platform.name}
          />
          Sign in with {platform.name}
        </button>
      ))}
      </div>
  )
}

export default LoginOptionSelfHosted