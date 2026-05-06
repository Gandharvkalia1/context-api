import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

export default function ChangePassword() {
  const navigate = useNavigate()
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    nextPassword: '',
    confirmPassword: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setPasswords((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Change password</CardTitle>
          <CardDescription>Update your password to keep your account secure.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="currentPassword">Current password</Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={passwords.currentPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nextPassword">New password</Label>
              <Input
                id="nextPassword"
                name="nextPassword"
                type="password"
                value={passwords.nextPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwords.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Save changes
            </Button>
            <Link className="text-center text-sm underline" to="/">
              Back to login
            </Link>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
